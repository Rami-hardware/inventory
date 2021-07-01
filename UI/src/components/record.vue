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
            items: null
        }
    },
    mounted(){
        axios.get('http://192.168.4.183:5050/').then(response => this.info = response.data)
    }
}
</script>