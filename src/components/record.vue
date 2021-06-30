<template>
    <div>
         <b-table striped hover :items="items"></b-table>
    </div>
</template>

<script>
export default {
    name:"record",
    data(){
        return{
            items:[
                {store:"LCW",mall:"redsea",brand:"LCW",till:"001",ip:"10.64.71.100",server:"clint"},
                {store:"LCW",mall:"redsea",brand:"LCW",till:"001",ip:"10.64.71.100",server:"clint"},
                {store:"LCW",mall:"redsea",brand:"LCW",till:"001",ip:"10.64.71.100",server:"clint"}
            ]
        }
    }
}
</script>