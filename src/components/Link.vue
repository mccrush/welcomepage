<template>
  <a href="#" class="link-item d-inline-block shadow-sm" v-on:mouseover="showButs" v-on:mouseout="hideButs" title="">
    <div class="icon">
      <img src="https://s2.googleusercontent.com/s2/favicons?domain_url=https://trello.com/b/wNz9Hbop/01-tasklist&amp;alt=s&amp;sz=32" class="icon-img" width="16" height="16" title="" alt="">
    </div>
    <div class="title">
      {{ msg }}
    </div>
    <div class="edit invisible" title="Изменить ссылку">

    </div>
    <div class="clear invisible" title="Удалить ссылку">

    </div>
    <img src="assets/tempImage.png" alt="Title img" class="thumb" width="154" height="96">
  </a>
</template>

<script>
export default {
  name: 'link',
  props: {
    msg: String
  },
  methods: {
    showButs: function(event) {
      let target = event.target;
      if (target.localName == 'a') {
        target.childNodes[2].classList.remove('invisible');
        target.childNodes[3].classList.remove('invisible');
      } else {
        target = target.parentNode;
        if (target.localName == 'a') {
          target.childNodes[2].classList.remove('invisible');
          target.childNodes[3].classList.remove('invisible');
        } else {
          target = target.parentNode;
          if (target.localName == 'a') {
            target.childNodes[2].classList.remove('invisible');
            target.childNodes[3].classList.remove('invisible');
          }
        }
      }
    },
    hideButs: function(event) {
      let target = event.target;
      if (target.localName == 'a') {
        target.childNodes[2].classList.add('invisible');
        target.childNodes[3].classList.add('invisible');
      } else {
        target = target.parentNode;
        if (target.localName == 'a') {
          target.childNodes[2].classList.add('invisible');
          target.childNodes[3].classList.add('invisible');
        } else {
          target = target.parentNode;
          if (target.localName == 'a') {
            target.childNodes[2].classList.add('invisible');
            target.childNodes[3].classList.add('invisible');
          }
        }
      }
    }
  }
};
</script>

<style scoped>
a.link-item {
  width: 154px;
  height: 126px;
  display: inline-block;
  position: relative;
  margin: 8px 8px 8px 8px;
  border-radius: 2px;
  font-size: 12px;
  color: #343a40;
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
  background: #fff;
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
  background: #fff;
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