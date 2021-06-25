<template>
  <Greetings />
</template>

<script>
import Greetings from './components/Greetings.vue'
export default {
  name: 'App',
  components: {
    Greetings
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
</style>
