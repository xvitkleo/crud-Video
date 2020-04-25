<template>
  <div class='app'>
    <Header />
    <Main class="main">
      <router-view></router-view>
    </Main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Baloo+Paaji+2&display=swap');
* {
  margin: 0;
  box-sizing: border-box;
  font-family: 'Baloo Paaji 2', cursive;
  font-weight: bold;
}

.app {
  display: flex;
  flex-flow: column;
  height: 100vh;
}

.main {
  flex-grow: 1;
  display: flex;
  flex-flow: column;
}

</style>
