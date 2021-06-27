<template>
  <h2>This is from HTTP Post Component</h2>
  <h2 class="postMsg err" v-if="errMsg">{{errMsg}}</h2>
  <h2 class="postMsg postSuccess" v-if="postResMsg">{{postResMsg}}</h2>
  <form @submit.prevent="createPost">
      <div>
          <label for="userId">ID:</label>
          <input type="text" v-model="formData.userId" name="userId" />
      </div>

      <div>
          <label for="title">Title:</label>
          <input type="text" v-model="formData.title" name="title" />
      </div>

      <div>
          <label for="body">Body:</label>
          <input type="text" v-model="formData.body" name="body" />
      </div>

      <button>Create Post </button>
  </form>
</template>

<script>
import axios from 'axios';
export default {
  name : 'HttpPost',
  data(){
    return{
      formData : {
        userId : '',
        title : '',
        body: ''
      },
      errMsg : '',
      postResMsg : ''
    }
  },
  methods : {
    createPost(){
        axios.post('https://jsonplaceholder.typicode.com/posts', this.formData)
          .then((response) => {
            this.postResMsg = response.data.userId ? 'Successfully Created the Post' : '';
          })
          .catch((error)=>{
            console.log(error);
            this.errMsg = 'Error While Posting the Data';
          })
    }
  }
}
</script>
<style scoped>
.postMsg{
    border: 1px dashed;
    padding: 0.5rem;
    max-width: 400px;
    margin: 2rem auto;
}
.err{
    color: #e21818;
}
button{
  margin:1rem;
}
form{
      max-width: 400px;
    margin: 0 auto;
}
  form > div{
    margin-top: 1rem;
  }
  label {	
	font-weight: bold;
	display: flex;
	margin-bottom: 5px;
  }
  input[type='text'],
	textarea,
	select {
	display: block;
	width: 400px;
	padding: 6px 12px;
	font-size: 14px;
	line-height: 1.42857143;
	color: #555;
	background-color: #fff;
	background-image: none;
	border: 1px solid #ccc;
	border-radius: 4px;
  box-sizing: border-box;
	}
	input + label {
	font-weight: bold;
	display: inline-flex;
	margin-right: 20px;
	}
  .postSuccess{
    color: green;
  }
</style>
