<template>
  <div class="view-user-edit">
    <div><h1>Edit</h1></div>
    <Form v-if='video.id' :dataVideo='video' v-on:onsubmit='handleSubmit'/>
  </div>
</template>

<script>
import Form from '../components/Form.vue';

export default {
  name: 'VideoEdit',
  components: {
    Form,
  },
  data() {
    return {
      video: {},
    };
  },
  methods: {
    handleSubmit(valuesForm) {
      fetch(`http://localhost:3000/videos/${valuesForm.id}`, {
        method: 'PUT',
        body: JSON.stringify(valuesForm),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then(() => this.$router.replace('/videos'));
    },
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
  .view-user-edit {
    background-color: rgb(118,154,164);
    height: 100%;
    div {
      margin: auto;
      width: 40vw;
      background-color: rgb(118,154,164);
      padding-top: 3rem;
      h1 {
        background-color: rgb(118,154,164);
        color: white;
      }
    }
  }
</style>
