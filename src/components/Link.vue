<template>
      <a href="#" class="link-item d-inline-block shadow-sm" >{{ msg }}</a>
</template>

<script>
export default {
  name: 'Link',
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
a.link-item {
  width: 154px;
  height: 126px;
  padding: 1px;
  vertical-align: top;
  margin: 10px;
  border-radius: 2px;
}
</style>