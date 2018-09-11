<template>
  <div class="nav-scroller bg-white shadow-sm ">
      <nav class="nav justify-content-end">
        <a class="nav-link" href="#">Почта</a>
        <a class="nav-link" href="#">Картинки</a>
        <form class="form-inline">
          <button class="btn btn-sm mr-sm-3 ml-sm-1 btn-light" type="button"></button>
        </form>   
      </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderMy',
  props: {
    msgmy: String
  }
};
</script>

<style scoped>
a.nav-link {
  font-size: 14px;
  color: #6c757d;
  padding: 0.5rem 0.5rem;
}

a.nav-link:hover {
  font-size: 14px;
  color: #343a40;
}

button.btn-light {
  width: 26px;
  height: 26px;
  background: url('/assets/ic_apps_black_24dp_1x.png') center center no-repeat;
  opacity: 0.5;
}

button.btn-light:hover {
  opacity: 0.9;
}
</style>