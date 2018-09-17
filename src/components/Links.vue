<template>
  <div :href=linkFrom.href :id=linkFrom.id class="link-item d-inline-block shadow-sm" v-on:click="goLink" v-on:mouseover="showButs" v-on:mouseout="hideButs" :title=linkFrom.title>
    <div class="icon">
      <img :src=linkFrom.icon class="icon-img" width="16" height="16" title="" alt="">
    </div>
    <div class="title">
      {{ linkFrom.title }}
    </div>
    <!-- <div class="edit invisible" title="Изменить ссылку" v-on:click.self="evEdit">
    </div> -->
    <div class="edit invisible" title="Изменить ссылку" v-on:click.self="evEdit" data-toggle="collapse" href="#collapseEditor" aria-expanded="false" aria-controls="collapseEditor">
    </div>
    <div class="clear invisible" title="Удалить ссылку" v-on:click.self="evClear">
    </div>
    <img :src=linkFrom.thumb :alt=linkFrom.title class="thumb" width="154" height="96">
  </div>
</template>

<script>
function ale() {
  alert('Griby');
}

export default {
  name: 'links',
  props: ['linkFrom'],
  data: function() {
    return {
      tecId: '0'
    };
  },
  methods: {
    showButs: function(event) {
      let target = event.target;

      if (target.classList[0] == 'link-item') {
        target.childNodes[2].classList.remove('invisible');
        target.childNodes[3].classList.remove('invisible');
        this.tecId = target.getAttribute('id');
        console.log(this.tecId);
      } else {
        target = target.parentNode;
        if (target.classList[0] == 'link-item') {
          target.childNodes[2].classList.remove('invisible');
          target.childNodes[3].classList.remove('invisible');
          this.tecId = target.getAttribute('id');
          console.log(this.tecId);
        } else {
          target = target.parentNode;
          if (target.classList[0] == 'link-item') {
            target.childNodes[2].classList.remove('invisible');
            target.childNodes[3].classList.remove('invisible');
            this.tecId = target.getAttribute('id');
            console.log(this.tecId);
          }
        }
      }
    },
    hideButs: function(event) {
      let target = event.target;
      if (target.classList[0] == 'link-item') {
        target.childNodes[2].classList.add('invisible');
        target.childNodes[3].classList.add('invisible');
      } else {
        target = target.parentNode;
        if (target.classList[0] == 'link-item') {
          target.childNodes[2].classList.add('invisible');
          target.childNodes[3].classList.add('invisible');
        } else {
          target = target.parentNode;
          if (target.classList[0] == 'link-item') {
            target.childNodes[2].classList.add('invisible');
            target.childNodes[3].classList.add('invisible');
          }
        }
      }
    },
    goLink: function(event) {
      let target = event.target;
      if (target.classList[0] == 'edit') {
        window.location.href = '#';
      } else {
        if (target.classList[0] == 'link-item') {
          if (target.getAttribute('href') !== '#') {
            window.location.href = target.getAttribute('href');
          } else {
            console.log(1, target.getAttribute('href'));
          }
        } else {
          target = target.parentNode;
          if (target.classList[0] == 'link-item') {
            if (target.getAttribute('href') !== '#') {
              window.location.href = target.getAttribute('href');
            } else {
              console.log(1, target.getAttribute('href'));
            }
          } else {
            target = target.parentNode;
            if (target.classList[0] == 'link-item') {
              if (target.getAttribute('href') !== '#') {
                window.location.href = target.getAttribute('href');
              } else {
                console.log(1, target.getAttribute('href'));
              }
            }
          }
        }
      }
    },
    evEdit: function() {
      console.log('yes edit Call');

      //return true;
      //document.getElementById('collapseEditor').classList.remove('collapse');
    },
    evClear: function() {
      alert('evClear');
    }
  }
};
</script>

<style scoped>
div.link-item {
  width: 154px;
  height: 126px;
  position: relative;
  margin: 8px;
  border-radius: 2px;
  font-size: 12px;
  color: #343a40;
  background: #f8f9fa;
  cursor: pointer;
}
div.icon {
  width: 18px;
  height: 18px;
  display: block;
  position: absolute;
  top: 6px;
  left: 6px;
  /* outline: 1px solid rgb(0, 156, 228);*/
}
div.title {
  width: 120px;
  height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  position: absolute;
  top: 7px;
  left: 28px;
  opacity: 0.9;
}
div.edit {
  width: 18px;
  height: 18px;
  background: #f8f9fa; /* #fff; */
  /*background: linear-gradient(to left, rgb(255, 255, 255) 60%, transparent);*/
  position: absolute;
  top: 6px;
  right: 24px;
  opacity: 0.8;
  transition: opacity 300ms;
}
div.edit:hover {
  opacity: 1;
}
div.edit::after {
  width: 18px;
  height: 18px;
  content: '';
  display: block;
  background: url('/assets/icons/baseline_edit_black_18dp.png') center center
    no-repeat;
  position: absolute;
  top: 0px;
  right: 0px;
  opacity: 0.6;
}

div.clear {
  width: 18px;
  height: 18px;
  background: #f8f9fa; /* #fff; */
  position: absolute;
  top: 6px;
  right: 6px;
  opacity: 0.8;
  transition: opacity 300ms;
}

div.clear:hover {
  opacity: 1;
}

div.clear::after {
  width: 18px;
  height: 18px;
  content: '';
  display: block;
  background: url('/assets/icons/baseline_close_black_18dp.png') center center
    no-repeat;
  position: absolute;
  top: 0px;
  right: 0px;
  opacity: 0.6;
}

img.thumb {
  width: 154px;
  height: 96px;
  display: block;
  position: absolute;
  top: 30px;
  border-radius: 2px;
}

img.icon-img {
  vertical-align: top;
  margin-top: 1px;
}
</style>