<template>
  <div class="container-fluid collapse position-absolute bg-white shadow-lg" id="collapseEditor">
      <div class="row justify-content-center"><!-- justify-content-center -->
        <div class="col-6 text-left"> <!-- align-self-center  bg-info  is-invalid  is-valid-->  
              <input type="text" class="form-control form-control-sm mt-3" id="inpitLink" placeholder="Insert Link"  autofocus>
              <button type="button" class="close position-absolute bg-white t-10" aria-label="Close" title="Clear form">
                <span aria-hidden="true" class="p-2">&times;</span>
              </button>
              <input type="text" class="form-control form-control-sm mt-3 mb-3" id="inpitTitle" placeholder="Insert Title">
              <button type="button" class="close position-absolute bg-white t-30" aria-label="Close" title="Clear form">
                <span aria-hidden="true" class="p-2">&times;</span>
              </button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Editor',
  props: {
    msg: String
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