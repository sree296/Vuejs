<template>
<h2>Replacement for v-model in Composition API</h2>
    <div>
     <h3>Options API </h3>   
    <input type="text" placeholder="Enter First name" v-model="fname" />
    <br />
    <input type="text" placeholder="Enter Last name" v-model="lname" />
    </div>
    <div>
        <h3>Composition API - ref</h3>   
    <input type="text" placeholder="Enter Super Hero name" v-model="superHeroName" />
    </div>

    <div>
        <h3>Composition API - Reactive</h3>   
        <input type="text" placeholder="Programming Language" v-model="pLang" />
        <br />
        <input type="text" placeholder="JS Frame Work" v-model="jsFrameWork" />
    </div>
</template>
<script>
import {ref, reactive, toRefs} from 'vue';
export default{
    name : 'Vmodel',
    setup(){
        const superHeroName = ref('');
        
        const state = reactive({
            pLang  : '',
            jsFrameWork : ''
        })
        return{
            superHeroName,
            ...toRefs(state)
        }
    },
    data(){
        return{
            fname : '',
            lname : ''
        }
    }
}
</script>