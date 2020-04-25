<template>
  <form @submit.prevent='handleSubmit' class="form">
    <input type="text" name="title" v-model="title" placeholder="TITLE *" />
    <br />
    <textarea name="description" v-model="description" placeholder="DESCRIPTION *"> </textarea>
    <br />
    <input required type="text" name="link" v-model="link" placeholder="LINK *" />
    <br />
    <div><button>SEND</button></div>
  </form>
</template>

<script>
export default {
  name: 'Form',
  props: {
    dataVideo: Object,
  },

  data() {
    return {
      title: '',
      description: '',
      link: '',
    };
  },
  methods: {
    handleSubmit() {
      this.$emit('onsubmit', {
        title: this.$data.title,
        description: this.$data.description,
        link: this.$data.link,
        id: this.$data.id,
      });
    },
  },
  mounted() {
    if (this.dataVideo) {
      this.$data.link = this.dataVideo.link;
      this.$data.title = this.dataVideo.title;
      this.$data.description = this.dataVideo.description;
      this.$data.id = this.dataVideo.id;
    }
  },
};

</script>

<style lang='scss' scoped>
  .form {
    background-color: rgb(118,154,164);
    display: block;
    text-align: center;
    padding-top: 5rem;
    input, textarea {
      padding: 1rem 0 1rem 0;
      width: 40vw;
      border: none;
      background-color: rgb(118,154,164);
      border-bottom: white solid 1px;
      color: white;
      &::placeholder {
        color: white;
      }

      &:focus {
        outline: none;
      }
    }
    input:first-child {
        border-top: white solid 1px;
    }
    div {
      margin: auto;
      width: 40vw;
      button {
        background-color: rgb(118,154,164);
        border: none;
        color: white;
        cursor: pointer;
        text-align: left;
        display: block;
        padding: 2rem 0 0 0;
      }
    }

  }

</style>
