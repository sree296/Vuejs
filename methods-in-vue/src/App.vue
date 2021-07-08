<template>
<fieldset>
    <legend>Methods in Vue</legend>
    <MethodsComponent/>
</fieldset>
  
</template>

<script>
import MethodsComponent from './components/MethodsComponent.vue'

export default {
  name: 'App',
  components: {
    MethodsComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 750px;
  margin: 0 auto;
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
</style>
