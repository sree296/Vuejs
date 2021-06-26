<template>
    <h1>{{title}}</h1>
    <h1>{{likesCount}} Likes</h1>
    <div>
        <h2>This Article is <span v-if="!isPublished">Not</span> Published</h2>
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
