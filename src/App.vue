<template>
  <div id="app" class="cover-container d-flex flex-column h-100">
    <Header/>
    <Launcher/>
    <div class="mb-auto"></div> 
    <div class="border d-flex flex-column">
      <Logo msg="Google 1" class="col-12 align-self-center"/>
      <Logo msg="Google 2" class="col-6 align-self-center"/>
      <Logo msg="Google 3" class="col-8 align-self-center"/>
    </div>
    <div class="mt-auto"></div>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Launcher from './components/Launcher.vue';
import Logo from './components/Logo.vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    Header,
    Launcher,
    Logo,
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.h-100 {
  height: 100% !important;
}

.mb-auto {
  margin-bottom: auto !important;
}

.mt-auto {
  margin-top: auto !important;
}
</style>
