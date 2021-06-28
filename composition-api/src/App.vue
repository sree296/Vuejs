<template>
<Vmodel />
<hr />
<Data />
<hr />
<MethodsReplace />

</template>

<script>
import Data from './components/Data.vue';
import MethodsReplace from './components/MethodsReplace.vue';
import Vmodel from './components/Vmodel.vue';

export default {
  name: 'App',
  components: {
    Data,
    MethodsReplace,
    Vmodel
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
