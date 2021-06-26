<template>
  <section class="modal">
      <div class="over-lay"></div>
      <div class="modal-content">
        <h1>Modal Header</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <button @click="$emit('close')">Close</button>
      </div>
  </section>
</template>
<script>
export default {
  name : 'ChildComp',
  emits : ['close']
}
</script>
<style scoped>
.over-lay{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    overflow: hidden;
    outline: 0;
    background: #00000050;
}
.modal-content{
  background: #fff;
  max-width: 400px;
  z-index: 3;
  position: absolute;
  padding: 1rem;
  border-radius: 3px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
