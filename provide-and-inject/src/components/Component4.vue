<template>
  <h1> This is from Component 4 </h1>
  <Component5 />
</template>

<script>
import Component5 from './Component5.vue';

export default {
  name: 'Component4',
  components : {
    Component5
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
