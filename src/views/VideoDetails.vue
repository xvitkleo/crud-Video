<template>
  <Card
    class="card"
    v-if='video.id'
    :key="video.id"
    :id="video.id"
    :title="video.title"
    :description="video.description"
    :link="video.link"
  />

</template>

<script>
import Card from '../components/Card.vue';

export default {
  name: 'VideoDetails',
  components: {
    Card,
  },
  data() {
    return {
      video: {},
    };
  },
  mounted() {
    fetch(`http://localhost:3000/videos/${this.$route.params.id}`)
      .then((response) => response.json())
      .then((video) => {
        this.video = video;
        return video;
      });
  },
};
</script>

<style lang='scss' scoped>
  .card {
    height: 100%;
    margin: 1rem 25rem;
  }
</style>
