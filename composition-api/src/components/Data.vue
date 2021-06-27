<template>
<h2>Replacement for Data()</h2>
  <h2>Options -- {{o_fname}}</h2>
  <h2>Composition -- {{c_fname}} </h2>
  <h2>Reactive -- {{state.r_fname}} and {{state.r_lname}} Name</h2>
</template>

<script>
import {reactive, ref} from 'vue';

export default {
    name : 'Data',
    setup(){
        const c_fname = ref('Gattu');

        const state = reactive({
            r_fname : 'Reactive first',
            r_lname : 'Reactive last'
        });

        return{
            c_fname,
            state
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