<template>
  <div class='view-videos'>
    <Card
      v-for='video in videos'
      :key="video.id"
      :id="video.id"
      :title="video.title"
      :description="video.description"
      :link="video.link"
      v-on:emitdelete="handleDelete"
    />

    <Modal
      v-if="flagModal"
      v-on:close="flagModal = !flagModal"
      v-on:onaccept="handleAcceptModal"
      v-on:oncancel="flagModal = !flagModal"
    />
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import Modal from '../components/Modal.vue';

export default {
  name: 'Videos',
  components: {
    Card,
    Modal,
  },
  data() {
    return {
      videos: [],
      flagModal: false,
      hasDeleted: false,
      currentid: '',
    };
  },
  methods: {
    handleDelete(id) {
      this.flagModal = true;
      this.currentId = id;
    },
    handleAcceptModal() {
      fetch(`http://localhost:3000/videos/${this.currentId}`, {
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then(() => {
          this.videos = this.videos.filter((video) => video.id !== this.currentId);
          this.flagModal = false;
          this.currentId = '';
        });
    },
  },
  mounted() {
    fetch('http://localhost:3000/videos')
      .then((response) => response.json())
      .then((videos) => {
        this.videos = videos;
        return videos;
      });
  },
};
</script>

<style>
  .view-videos {
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(5, calc(18.3vw));
    gap: 1.5rem;
  }
</style>
