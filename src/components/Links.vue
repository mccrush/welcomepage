<template>
  <div id="logo" class="shadow-sm bg-white"> <!--  shadow-sm -->
      <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Logo',
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