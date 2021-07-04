<template>
  <b-container fluid>
    <!-- User Interface controls -->
    <b-row>

      <b-col lg="6" class="my-1">
        <b-form-group
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
            ></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <!-- Main table element -->
    <b-table
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filter-included-fields="filterOn"
      stacked="md"
      show-empty
      small
      @filtered="onFiltered"
      striped
      bordered
      outlined
      hover
      noCollapse>
    </b-table>
    
<div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
</div>
  </b-container>
</template>

<script>

export default {
    name:"record",
    data(){
        return{
            perPage: 5,
            currentPage:1,
            items : [],
            filter: null,
            filterOn: [],
      }

    },
    methods:{
        get(){
        fetch("http://localhost:5050").then(response => response.json()).then(data => (this.items = data));
        }
    },
    mounted(){
        this.get();
        this.totalRows = this.items.length;
    },
    computed: {
      rows() {
        return this.items.length
      },
    },

}

</script>
<style lang="scss" scoped> 
.table{
    text-transform: lowercase !important;
    
}
</style>