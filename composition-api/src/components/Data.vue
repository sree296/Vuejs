<template>
  <h2>Options -- {{o_fname}}</h2>
  <h2>Composition -- {{c_fname}} </h2>
</template>

<script>
import {ref} from 'vue';

export default {
    name : 'Data',
    setup(){
        const c_fname = ref('Gattu');
        return{
            c_fname
        }
    },
    data(){
        return{
            o_fname : 'Sreeni'
        }
    }
}
</script>

<style>

</style>