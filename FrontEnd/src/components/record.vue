<template>
    <div>
         <b-table striped hover :items="items"></b-table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"record",
    data(){
        return{
            items: []
        }
    },created(){
        this.getRecords();
    },
    methods:{
        getRecords() {
            try{
            const respose =  axios.get('http://localhost:5050/')
            this.items = respose.data();
            }catch(err){
                console.log(err)
            }
        }
    }
}
</script>