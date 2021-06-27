<template>
    <h2>Replacement for Methods</h2>
    <h3>{{userName}} </h3>
    <button @click="setName">Change User Name</button>

    <h2>{{count}}</h2>
    <button @click="incrementCount">Increment Count</button>
</template>

<script>
import {ref} from 'vue';
export default {
    name : 'MethodsReplace',
    setup(){
        const count = ref(0);
         function incrementCount(){
            count.value++
        }
        return{
            count,
            incrementCount
        }
    },
    data(){
        return{
            userName : 'Sreeni'
        }
    },
    methods: {
        setName(){
            this.userName = 'Gattu';
        }
    }
}
</script>
