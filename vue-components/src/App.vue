<template>
  <h1>Hello</h1>
  <!-- <Greetings name="Sree" initial="First Name"/>
  <Greetings name="Nivas" initial="Middle Name"/>
  <Greetings name="Gattu" initial="Last Name"/>
  <Greetings :name="name" :initial="initial"/> -->

 <!-- :likescount -> : is for passing count as a Number instead of a string , same with Boolean -->
  <Blog title='Veu JS Docs' :likesCount="90" :isPublished="true"/>
</template>

<script>
// import Greetings from './components/Greetings.vue'
import Blog from './components/Blog.vue'
export default {
  name: 'App',
  components: {
    // Greetings
    Blog
  },
  data(){
    return{
      // name : 'JS',
      // initial : "Vue"
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
</style>
