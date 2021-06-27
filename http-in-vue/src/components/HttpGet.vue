<template>
  <h2>This is from HTTP Get Component</h2>
  <button @click="GetPosts">Get Posts </button>
  <h2 class="err" v-if="errMsg">{{errMsg}}</h2>
  <div v-for="post in posts" :key="post.id">
    <h3>{{post.id}}.{{post.title}}</h3>
    <p>{{post.body}}</p>
    <hr />
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name : 'HttpGet',
  data(){
    return{
      posts : [],
      errMsg : ''
    }
  },
  methods : {
    GetPosts(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then((response) => {
            console.log(response.data);
            this.posts = response.data;
          })
          .catch((error)=>{
            console.log(error);
            this.errMsg = 'Error While Getting the Data';
          })
    }
  }
}
</script>
<style scoped>
.err{
    color: #e21818;
    border: 1px dashed;
    padding: 0.5rem;
    max-width: 400px;
    margin: 2rem auto;
}
</style>
