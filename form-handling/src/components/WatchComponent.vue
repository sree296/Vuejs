<template>
<fieldset>
    <legend>Watchers</legend>
    <h2>Volume Trakcer (0-20)</h2>
    <h3>Current Volume :: {{volume }}</h3>

    <div>
         <button @click="volume -= 2">Decrease</button>
         <button @click="volume += 2">Increase</button>

    </div>
    <div>
        <input type="text" v-model="movieName" >
    </div>

    <div>
        <input type="text" v-model="movieInfo.title" >
    </div>

    <div>
        <input type="text" v-model="movieInfo.actor" >
    </div>
</fieldset>
</template>
<script>
export default {
    name : 'WatchComponent',
    data(){
        return{
            volume : 10,
            movieName : 'Sreeni',
            movieInfo : {
                title : '',
                actor : ''
            }
        }
    },
    methods : {},
    computed : {},
    watch : {
        volume(newValue, oldValue){
             if(newValue > oldValue && newValue === 16){
                 alert('Listening to a High Volume may Damage Ears')
             }   
        },
        movieName : {
            handler(newValue){
                console.log('Calling an API', newValue)
            },
            immediate : true
        },
        movieInfo : {
            handler(newValue){
                console.log("Calling movie Info", newValue.title);
            },
            deep : true
        }
    }
}
</script>