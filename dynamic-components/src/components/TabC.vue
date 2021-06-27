<template>
    <h2>Tab C Content</h2>
    <input type="text" v-model="userName" />
</template>

<script>
export default {
    name : 'TabC',
    data(){
        return{
            userName : ''
        }
    }
}
</script>