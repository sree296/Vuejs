<template>
    <h1> {{initial}} : {{name}} </h1>
</template>
<script>
export default {
    name : 'Greetings',
    props: ['name', 'initial']
}
</script>
