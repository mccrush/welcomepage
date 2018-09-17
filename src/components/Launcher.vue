<template>
  <div class="collapse shadow-sm position-absolute bg-white" id="collapseLauncher">
      <ul id="listApps">
        <li class="list-item d-inline-block" v-for="i in 7" v-bind:key=i><a href="#" class="item-a">Item {{ i }}</a></li>
      </ul> 
  </div>
</template>

<script>
export default {
  name: 'Launcher',
  props: {
    msg: String
  }
};
</script>

<style scoped>
/* transition-duration: 0.15s; */
div#collapseLauncher {
  width: 320px;
  top: 40px; /* 52px; */
  right: 14px; /* у гул 8 */
}

ul#listApps {
  margin: 0;
  padding: 28px 27px 28px 28px;
}

li.list-item {
  list-style: none;
  width: 86px;
  height: 98px;
  padding: 1px;
  vertical-align: top;
}

a.item-a {
  margin: 8px 2px;
  text-align: center;
  outline: none;
}
</style>