<template>
  <main class="main">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: 'Main',
};
</script>

<style lang="scss" scoped>
.main {
  background-color: white;
}
</style>
