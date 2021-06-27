<template>
  <HttpPost />
  <hr />
  <HttpGet />
</template>

<script>
import HttpGet from './components/HttpGet.vue';
import HttpPost from './components/HttpPost.vue';

export default {
  name: 'App',
  components: {
    HttpGet,
    HttpPost
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
