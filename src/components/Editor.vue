<template>
  <div class="container-fluid collapse position-absolute bg-white shadow-lg" id="collapseEditor">
      <div class="row justify-content-center"><!-- justify-content-center -->
        <div class="col-6 text-left"> <!-- align-self-center  bg-info  is-invalid  is-valid-->  
              <input type="text" class="form-control form-control-sm mt-3" id="inpitLink" placeholder="Insert Link"  autofocus :value=this.href>
              <button type="button" class="close position-absolute bg-white t-10" aria-label="Close" title="Clear form">
                <span aria-hidden="true" class="p-2" v-on:click.self="clearHref">&times;</span>
              </button>
              <input type="text" class="form-control form-control-sm mt-3 mb-3" id="inpitTitle" placeholder="Insert Title" :value=this.title>
              <button type="button" class="close position-absolute bg-white t-30" aria-label="Close" title="Clear form">
                <span aria-hidden="true" class="p-2" v-on:click.self="clearTitle">&times;</span>
              </button>
        </div>
      </div>
  </div>
</template>

<script>
import { eventEmitter } from '../main.js';

export default {
  name: 'Editor',
  data() {
    return {
      id: '0',
      href: '',
      title: ''
    };
  },
  created() {
    eventEmitter.$on('show-form', linkFrom => {
      //console.log('yes inedit = ' + linkFrom);
      this.id = linkFrom.id;
      this.href = linkFrom.href;
      this.title = linkFrom.title;
    });
  },
  methods: {
    clearHref: function() {
      document.getElementById('inpitLink').value = '';
      document.getElementById('inpitLink').placeholder = '';
      document.getElementById('inpitLink').focus();
    },
    clearTitle: function() {
      document.getElementById('inpitTitle').value = '';
      document.getElementById('inpitTitle').placeholder = '';
      document.getElementById('inpitTitle').focus();
    }
  }
};
</script>

<style scoped>
/* transition-duration: 0.15s; */
div#collapseEditor {
  width: 100%;
  bottom: 0; /* 52px; */
  left: 0; /* у гул 8 */
}

.t-10 {
  top: 20px;
  right: 16px;
}

.t-30 {
  top: 67px;
  right: 16px;
}
</style>