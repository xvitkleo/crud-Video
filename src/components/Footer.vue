<template>
  <footer class='footer'>
    <div class="info">
      <h2>Leonardo Joaquin Porras Moreno</h2>
      <h3>Front - End Developer</h3>
    </div>
    <div class="icons">
      <figure><img src="https://i.pinimg.com/originals/41/28/2b/41282b58cf85ddaf5d28df96ed91de98.png" alt="facebook-icon"></figure>
      <figure><img src="https://i.pinimg.com/originals/79/7a/fe/797afe1351677d0ad8787224e6a5be2a.png" alt="instagram-icon"></figure>
      <figure><img src="https://www.iconninja.com/files/604/580/1001/github-development-code-coding-program-programming-icon.svg" alt="github-icon"></figure>
    </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang='scss' scoped>
.footer {
  background: rgb(48, 50, 51);
  padding: 0.8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  figure, img {
    height: 3rem;
    width: 3rem;
    filter: grayscale(100%);
  }
  h2 {
    font-size: 1rem;
    color: white;
    font-weight: normal;
  }
  h3 {
    font-size: 0.8rem;
    color: gray;
    font-weight: normal;
  }
  .icons {
    display: flex;
  }
}
</style>
