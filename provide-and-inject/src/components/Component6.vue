<template>
    <h3>This is from Component 6 :: Username - {{userName}}</h3>
</template>

<script>

export default {
    name : 'Component6',
    inject : ['userName']
}
</script>
