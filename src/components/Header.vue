<template>
  <header class='header'>
    <a @click='handleHome'>Videos</a>
    <router-link to='/videos/add'>
      <span>+</span>
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'Header',

  methods: {
    handleHome() {
      this.$router.replace('/videos');
    },
  },
};

</script>

<style lang="scss" scoped>
.header {
  background: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem 0.5rem 2rem;
  align-items: center;
  a {
    font-size: 2rem;
    text-decoration: none;
    cursor: pointer;
  }
  span {
    font-size: 2rem;
  }
}
</style>
