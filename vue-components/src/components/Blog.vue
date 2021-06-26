<template>
    <h1>{{title}}</h1>
    <h1>{{likesCount}} Likes</h1>
    <div>
        <h2 v-if="isPublished">This Article is Published</h2>
        <h2 v-else>This Article is Not Published</h2>
    </div>
</template>
<script>
export default {
    name : 'Blog',
    props : {
      title : String,
      likesCount : Number,
      isPublished : Boolean
    }
}
</script>
