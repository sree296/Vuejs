<template>
    <h2>This is from Component 5</h2>

    <Component6 />
</template>
<script>
import Component6 from './Component6.vue';
export default{
    name : 'Component5',
    components : {
        Component6
    }
}
</script>
