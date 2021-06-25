<template>
  <WatchComponent />
  <FormHandle />
</template>

<script>
import FormHandle from './components/FormHandle.vue';
import WatchComponent from './components/WatchComponent.vue';

export default {
  name: 'App',
  components: {
    FormHandle,
    WatchComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
button{
    margin: 0.5rem;
    cursor: pointer;
    color: #fff;
    background-color: #0d6efd;
    border: 1px solid #0d6efd;
    font-weight: bold;
    padding: 0.5rem;
}
input{
  margin-bottom:1rem;
}
legend{
      font-size: 1.5rem;
}
</style>
