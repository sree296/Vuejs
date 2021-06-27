<template>
    <h2>Replacement for Methods</h2>
    <h3>{{userName}} </h3>
    <button @click="setName">Change User Name</button>
</template>

<script>
export default {
    name : 'MethodsReplace',
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
