<template>
  <div id="logo" class="mb-5"> <!--  shadow-sm -->
      <img alt="Google" height="92" src="assets/googlelogo_color_272x92dp.png" width="272">
  </div>
</template>

<script>
export default {
  name: 'logo',
  props: {
    msg: String
  }
};
</script>

<style scoped>
div#logo {
  margin: 10px;
}
</style>