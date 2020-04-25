<template>
  <div class='view-user-add'>
    <div><h1>VIDEO ADD</h1></div>
    <Form v-on:onsubmit="handleSubmit"/>
  </div>
</template>

<script>
import Form from '../components/Form.vue';

export default {
  name: 'VideoAdd',
  components: {
    Form,
  },
  methods: {
    handleSubmit(valueVideo) {
      fetch('http://localhost:3000/videos', {
        method: 'POST',
        body: JSON.stringify(valueVideo),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then(() => this.$router.replace('/videos'));
    },
  },
};
</script>

<style lang='scss' scoped>
  .view-user-add {
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
