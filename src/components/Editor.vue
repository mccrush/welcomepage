<template>
  <div class="container-fluid collapse position-absolute bg-white shadow-lg" id="collapseEditor">
      <div class="row justify-content-center"><!-- justify-content-center -->
        <div class="col-6 text-left"> <!-- align-self-center  bg-info  is-invalid  is-valid-->  
              <input type="text" class="form-control form-control-sm mt-3" id="inpitLink" placeholder="Insert Link"  autofocus v-on:keyup.enter="closeEditor" v-model.trim="href" v-on:input="onChange">
              <button type="button" class="close position-absolute bg-white t-10" aria-label="Close" title="Clear form">
                <span aria-hidden="true" class="p-2" v-on:click.self="clearHref">&times;</span>
              </button>
              <input type="text" class="form-control form-control-sm mt-3 mb-3" id="inpitTitle" placeholder="Insert Title" v-on:keyup.enter="closeEditor" v-model.trim="title"  v-on:input="onChange">
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
//import { validForm } from '../core/control.js';
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
      document.getElementById('inpitLink').classList.remove('is-invalid');
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
      document.getElementById('inpitLink').classList.add('is-invalid');
      document.getElementById('inpitLink').placeholder =
        'Поле не может быть пустым';
    },
    clearTitle: function() {
      this.title = '';
      document.getElementById('inpitTitle').focus();
    },
    closeEditor: function() {
      $('#collapseEditor').collapse('hide');
    },
    onChange: function() {
      if (this.title !== '' && this.href === '') {
        document.getElementById('inpitLink').classList.add('is-invalid');
        document.getElementById('inpitLink').placeholder =
          'Поле не может быть пустым';
      } else {
        document.getElementById('inpitLink').classList.remove('is-invalid');
        document.getElementById('inpitLink').placeholder = 'Insert Link';
        if (this.title === '') {
          // Загружаем Заголовок с интернета
          // this.title = ...
          let adres = this.href;
          if (adres.search(/https:\/\//) !== -1) {
            adres = adres.replace('https://', '');
            console.log('After knife: ' + adres);
          } else if (adres.search(/http:\/\//) !== -1) {
            adres = adres.replace('http://', '');
            console.log('After knife: ' + adres);
          } else {
            adres = adres;
            console.log('After knife: ' + adres);
          }

          // var xhr = new XMLHttpRequest();
          // xhr.open(
          //   'GET',
          //   'https://textance.herokuapp.com/rest/title/' + adres,
          //   false
          // );
          // xhr.send();
          // if (xhr.status != 200) {
          //   this.title = '';
          //   console.log(xhr.status + ': ' + xhr.statusText);
          // } else {
          //   this.title = xhr.responseText;
          // }
        }
        saveHref(this.href);
        saveTitle(this.title);
      }
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