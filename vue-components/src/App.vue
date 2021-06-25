<template>
  <h1>Hello</h1>
  <Greetings name="Sree" initial="First Name"/>
  <Greetings name="Nivas" initial="Middle Name"/>
  <Greetings name="Gattu" initial="Last Name"/>
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
