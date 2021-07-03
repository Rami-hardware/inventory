<template>
    <div>
    <b-table 
          id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small></b-table>
    <b-pagination       
       v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"></b-pagination>
    </div>
</template>

<script>

export default {
    name:"record",
    data(){
        return{
            perPage: 5,
            currentPage:1,
            items : []
        }
    },
    methods:{
        get(){
        fetch("http://localhost:5050").then(response => response.json()).then(data => (this.items = data));
        }
    },
    mounted(){
        this.get();
    },
    computed: {
      rows() {
        return this.items.length
      }
    }
}
</script>