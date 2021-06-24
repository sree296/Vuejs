<template>
  <div>
    <pre>
        {{ JSON.stringify(formValues,null,2) }}
    </pre>
  </div>
  <form @submit="submitProfile">
      <div>
          <label for="name">Name</label>
          <input type="text" id="name" v-model="formValues.name"/>
      </div>

      <div>
          <label for="profile">Profile Summary</label>
          <textarea type="text" id="profile" v-model="formValues.profileSummary"/>
      </div>

      <div>
          <label for="country">Country</label>
          <select id="country" v-model="formValues.country">
              <option value="" selected>-- Select Country --</option>
              <option value="india">India</option>
              <option value="singapore">Singapore</option>
              <option value="canada">Canada</option>
          </select>
      </div>

      <div>
          <label for="jobLocation">Job Location</label>
          <select id="jobLocation" multiple v-model="formValues.jobLocation">
              <option value="">-- Select Multiple Countries --</option>
              <option value="india">India</option>
              <option value="singapore">Singapore</option>
              <option value="canada">Canada</option>
          </select>
      </div>

      <div>
        <input type="checkbox" id="remoteWork" true-value="yes" false-value="no" v-model="formValues.remoteWork"/>
        <label for="remoteWork">Open to Remote Working</label>
      </div>

      <div>
        <label>Skill Set</label>
        
        <input type="checkbox" id="html" value="html" v-model="formValues.skillSet"/>
        <label for="html">HTML</label>

        <input type="checkbox" id="css" value="css" v-model="formValues.skillSet"/>
        <label for="css">CSS</label>

        <input type="checkbox" id="javaScript" value="javaScript" v-model="formValues.skillSet"/>
        <label for="javaScript">JavaScript</label>

        <input type="checkbox" id="veuJs" value="veuJs" v-model="formValues.skillSet"/>
        <label for="veuJs">Vue Js</label>

      </div>

      <div>
        <label>Years of Experience</label>
        
        <input type="radio" id="0-2" value="0-2" v-model="formValues.yearsOfExp"/>
        <label for="0-2">0-2</label>

        <input type="radio" id="3-5" value="3-5" v-model="formValues.yearsOfExp"/>
        <label for="3-5">3-5</label>

        <input type="radio" id="6-10" value="6-10" v-model="formValues.yearsOfExp"/>
        <label for="6-10">6-10</label>

        <input type="radio" id="10+" value="10+" v-model="formValues.yearsOfExp"/>
        <label for="10+">10 +</label>

      </div>

      <div>
        <button>Submit </button>
      </div>
  </form>
</template>

<script>
export default {
  name: 'FormHandle',
  data(){
    return{
      fname: 'Sreeni',
      lname : 'Gattu',
      counter : 0,
      formValues : {
        name : '',
        profileSummary : '',
        country : '',
        jobLocation : [],
        remoteWork: "no",
        skillSet : [],
        yearsOfExp: ''
      }
    }
  },
  methods: {
    increment(){
      this.counter = this.counter + 1;
    },
    submitProfile(event){
        event.preventDefault();
        console.log(this.formValues);
    }
  }
}
</script>

<style>
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
	
	

</style>