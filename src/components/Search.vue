<template>
  <div id="search"> <!--  shadow-sm -->
      <input id="searchInput" class="form-control" type="text">
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    msg: String
  }
};
</script>

<style scoped>
div#search {
  margin: 10px;
}

input.form-control {
  border-radius: 2px;
  color: #343a40;
}

input.form-control:hover {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}
</style>