<template>
  <h1>This is App component</h1>
  <button @click="showModal = true">Open Modal</button>
  <ChildComp v-show="showModal" @close="showModal = false"/>
</template>

<script>
import ChildComp from './components/ChildComp.vue'

export default {
  name: 'App',
  components: {
    ChildComp
  },
  data(){
    return {
      showModal : false
    }
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
