<template>
  <div id="linksWrap" class=""> <!--  shadow-sm -->
      <!-- <h1>{{ msg }}</h1> -->
      <a href="#" class="link-item d-inline-block shadow-sm" v-for="i in 8" v-bind:key="i"></a>
  </div>
</template>

<script>
export default {
  name: 'Linkswrap',
  props: {
    msg: String
  },
  methods: {
    setShadow: function(event) {
      event.target.classList.toggle('shadow-sm');
      event.target.classList.toggle('shadow');
    }
  }
};
</script>

<style scoped>
div#links {
  margin: 10px;
  padding: 10px;
}

a.link-item {
  width: 154px;
  height: 126px;
  padding: 1px;
  vertical-align: top;
  margin: 10px;
  border-radius: 2px;
}
</style>