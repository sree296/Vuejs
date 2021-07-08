<template>
  <h2>{{fname}}</h2>
  <button @mousemove="changeName('Arg - Gattu')"> Change Name </button>

  <h3>Number : {{numVal}} </h3>
  <button @click="increment(2)">Increment By 2</button>
  <button @click="decrement(1)">Decrement By 1</button>
</template>
<script>
export default {
  name : 'MethodsComponent',
  data(){
    return{
      fname : 'Sreeni',
      numVal : 0
    }
  },
  methods : {
    changeName(val){
      this.fname = val;
    },
    increment(incVal){
      this.numVal += incVal;
    },
    decrement(decVal){
      this.numVal -= decVal;
    }
  }
}
</script>
