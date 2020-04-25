<template>
  <article class="card">
      <iframe :src="link"></iframe>
      <div class="info">
        <h1 @click='handleDetails'>{{ title }}</h1>
        <p>{{ description }}</p>
      </div>
      <div class="modifiers">
        <button @click="handleDelete">Eliminar</button>
        <button @click="handleEdit">Editar</button>
      </div>


  </article>

</template>

<script>

export default {
  name: 'Card',
  data() {
    return {
      player: Object,
    };
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleDelete() {
      this.$emit('emitdelete', this.id);
    },
    handleEdit() {
      this.$router.push(`/videos/edit/${this.id}`);
    },
    handleDetails() {
      this.$router.push(`/videos/details/${this.id}`);
    },
  },

};

</script>

<style lang="scss" scoped>
.card {
  box-sizing: border-box;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0.2rem 0.2rem 0.2rem rgba(128, 128, 128, 0.466);

  iframe {
    width: 100%;
    border: none;
    height: 80%; //para details
  }

  .info {
    padding: 0 1rem 0rem 1rem;
    h1 {
      line-height: 1.1;
      cursor: pointer;
    }
    p {
      color: gray;
      font-weight: normal;
    }
  }
  .modifiers {
    display: flex;
    padding: 0.3rem 1rem 0.6rem 1rem;
    justify-content: space-between;
    color: gray;

    button {
      cursor: pointer;
      background-color: rgba(52, 57, 58, 0.918);
      color: white;
      border: none;
      border-radius: 4px;
      font-weight: normal;
      padding: 0.3rem;
      width: 5rem;
      font-size: 0.8rem;
    }
  }


}

</style>
