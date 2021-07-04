<template>
    <div>
 <b-container fluid>
    <!-- User Interface controls -->

      

      <b-col lg="6" class="my-1">
        <b-form-group
          label=""
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="keyword"
              type="search"
              placeholder="Type to Search"
            ></b-form-input>

            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>

    <!-- Main table element -->
    <b-table
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filter-included-fields="filterOn"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      stacked="md"
      show-empty
      small
      @filtered="onFiltered"
    ></b-table>
  </b-container>
    </div>
</template>

<script>

export default {
    name:"record",
    data(){
        return{
            perPage: 3,
            currentPage:1,
            items : [],
            keyword:''
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
      },
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          }),
      
    }
}

</script>
<style lang="scss" scoped> 
.table{
    text-transform: lowercase !important;
    
}
</style>