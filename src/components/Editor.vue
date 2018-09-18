<template>
  <div class="container-fluid collapse position-absolute bg-white shadow-lg" id="collapseEditor">
      <div class="row justify-content-center"><!-- justify-content-center -->
        <div class="col-6 text-left"> <!-- align-self-center  bg-info  is-invalid  is-valid-->  
              <input type="text" class="form-control form-control-sm mt-3" id="inpitLink" placeholder="Insert Link"  autofocus v-on:keyup.enter="closeEditor" v-model.trim="href" v-on:input="saveChange">
              <button type="button" class="close position-absolute bg-white t-10" aria-label="Close" title="Clear form">
                <span aria-hidden="true" class="p-2" v-on:click.self="clearHref">&times;</span>
              </button>
              <input type="text" class="form-control form-control-sm mt-3 mb-3" id="inpitTitle" placeholder="Insert Title" v-on:keyup.enter="closeEditor" v-model.trim="title"  v-on:input="saveChange">
              <button type="button" class="close position-absolute bg-white t-30" aria-label="Close" title="Clear form">
                <span aria-hidden="true" class="p-2" v-on:click.self="clearTitle">&times;</span>
              </button>
        </div>
      </div>
  </div>
</template>

<script>
// :value=this.title
import { eventEmitter } from '../main.js';
import { saveHref, saveTitle } from '../core/datasave.js';

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
      this.href = '';
      //document.getElementById('inpitLink').value = '';
      //document.getElementById('inpitLink').placeholder = '';
      document.getElementById('inpitLink').focus();
    },
    clearTitle: function() {
      this.title = '';
      //document.getElementById('inpitTitle').value = '';
      //document.getElementById('inpitTitle').placeholder = '';
      document.getElementById('inpitTitle').focus();
    },
    closeEditor: function() {
      $('#collapseEditor').collapse('hide');
      saveHref(this.href);
      saveTitle(this.title);
    },
    saveChange: function() {
      saveHref(this.href);
      saveTitle(this.title);
      //console.log(document.getElementById('inpitTitle').value);
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