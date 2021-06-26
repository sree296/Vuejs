<template>
  <div>This is from App Component :: Username -- {{name}} </div>
  <Component4 />
</template>

<script>
import Component4 from './components/Component4.vue'

export default {
  name: 'App',
  data(){
    return{
      name : 'Sreeni'
    }
  },
  components: {
    Component4
  },
  provide(){
    return {
       userName : this.name
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
