<template>
    <div>
        <form name="total" action="/total" method="post">
        <!--central Total-->
        <b-input-group  prepend="central total ">
            <b-form-input v-model="text" placeholder="Enter central Total"></b-form-input>
        </b-input-group>
        <!--central Total-->
        <!--westrn total-->
        <b-input-group  prepend="westrn total " class="margin-up">
            <b-form-input v-model="text" placeholder="Enter westrn total"></b-form-input>
        </b-input-group>
        <!--eastrn total-->
        <b-input-group  prepend="eastrn total" class="margin-up">
            <b-form-input v-model="text" placeholder="Enter eastrn total"></b-form-input>
        </b-input-group>
        <!--eastrn total-->
        <!--grand total-->
        <b-input-group  prepend="grand total" class="margin-up">
            <b-form-input v-model="text" placeholder="Enter grand total"></b-form-input>
        </b-input-group>
        <!--grand total-->
        <b-button class="VB-button">refresh</b-button>
        </form>
    </div>
</template>

<script>
export default {
    name: "total",
}
</script>

<style lang="scss">

</style>