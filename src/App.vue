<template>
  <div id="app" class="cover-container d-flex flex-column h-100">
    <Header/>
    <div class="mb-auto"></div> 
    <div class="d-flex flex-column"><!-- border  -->
      <Logo msg="This is Logo" class="col-12 align-self-center"/>
      <!-- <Search msg="This is Search" class="col-6 align-self-center"/> -->
      <div id="links" class="col-8 align-self-center"> <!--  shadow-sm -->
          <Links v-for="link in listLinks" :key="link.id" :linkFrom="link"/>
      </div>
    </div>
    <div class="mt-auto"></div>
    <Editor/>
    <Launcher/>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import { loadList } from './components/storage.js';
import Header from './components/Header.vue';
import Launcher from './components/Launcher.vue';
import Logo from './components/Logo.vue';
import Search from './components/Search.vue';
import Links from './components/Links.vue';
import Editor from './components/Editor.vue';

export default {
  name: 'app',
  data: function() {
    return {
      listLinks: loadList()
    };
  },
  components: {
    Header,
    Launcher,
    Logo,
    Search,
    Links,
    Editor
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

div#link {
  margin: 10px;
  padding: 10px;
}
</style>
