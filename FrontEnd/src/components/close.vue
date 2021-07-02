<template>
    <div>
        <form name="closed" action="/close" method="post" class="from">
            <!--Date [From]-->
            <b-input-group>
                <template #prepend>
                    <b-input-group-text >from</b-input-group-text>
                </template>
            <b-form-datepicker id="example-datepicker"></b-form-datepicker>
            </b-input-group>
            <!--Date [From]-->
            <!--Date [to] -->
            <b-input-group class="margin-up">
                <template #prepend>
                    <b-input-group-text >to</b-input-group-text>
                </template>
                <b-form-datepicker id="example-datepicker"></b-form-datepicker>
            </b-input-group>
            <!--Date [to] -->
            <!--Brand-->
            <b-input-group  prepend="brand" class="margin-up">
                <b-form-input list="my-list-id" class="VB-input" placeholder="enter brand name"></b-form-input>
                    <datalist id="my-list-id">
                        <option>Manual Option</option>
                        <option v-for="size in sizes" :key="size">{{ size }}</option>
                    </datalist>
            </b-input-group>
            <!--Brand-->
            <!--mall-->
                <b-input-group  prepend="mall" class="margin-up">
                    <b-form-input list="my-list-id" class="VB-input" placeholder="enter mall name"></b-form-input>
                        <datalist id="my-list-id">
                            <option>Manual Option</option>
                            <option v-for="size in sizes" :key="size">{{ size }}</option>
                        </datalist>
                </b-input-group>
            <!--mall-->
            <!--buttons-->
            <b-button class="VB-button">search</b-button>
            <b-button class="VB-button">exports</b-button>
            <!--buttons-->
        </form>
    </div>
</template>

<script>
export default {
    name: 'close',
    data(){
        return{
            sizes: ['Small', 'Medium', 'Large', 'Extra Large']
        }
    }
}
</script>

<style lang="scss">

</style>