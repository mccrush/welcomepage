<template>
  <div class="nav-scroller bg-white"> <!--  shadow-sm -->
      <nav class="nav justify-content-end">
        <a class="nav-link" href="https://mail.google.com/mail/?tab=wm">Почта</a>
        <a class="nav-link" href="https://www.google.ru/imghp?hl=ru&tab=wi">Картинки</a>
        <form class="form-inline">
          <button class="btn btn-sm mr-sm-3 ml-sm-2 btn-light" type="button" data-toggle="collapse" href="#collapseLauncher" role="button" aria-expanded="false" aria-controls="collapseLauncher"></button>
        </form>   
      </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
};
</script>

<style scoped>
a.nav-link {
  font-size: 14px;
  color: #6c757d;
  padding: 0.5rem 0.5rem;
  transition-duration: 0.3s;
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
  transition-duration: 0.3s;
}

button.btn-light:hover {
  opacity: 0.8;
}
</style>