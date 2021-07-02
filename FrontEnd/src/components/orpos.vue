<template>
    <div>
        <form method="post" action="/orpos">
        <!--Checkboxes-->
        <b-form-checkbox class="one-line">pos no. mode</b-form-checkbox>
        <b-form-checkbox class="one-line">pos no. wth training</b-form-checkbox>
        <b-form-checkbox class="one-line">training only</b-form-checkbox>
        <!--Checkboxes-->
        <!--store-->
        <b-input-group  prepend="store" class="margin-up">
            <b-form-input v-model="text"  class="VB-input" placeholder="Enter store name"></b-form-input>
        </b-input-group>
        <!--store-->
        <!--brand-->
        <b-input-group  prepend="brand" class="margin-up">
          <b-form-input v-model="text" class="VB-input" placeholder="Enter brand name"></b-form-input>
        </b-input-group>
        <!--brand-->
        <!--mall-->
        <b-input-group  prepend="mall" class="margin-up">
          <b-form-input list="my-list-id" class="VB-input" placeholder="enter mall name"></b-form-input>
        </b-input-group>
        <!--mall-->
        <!--S\C-->
        <b-input-group  prepend="s\c" class="margin-up">
          <b-form-input list="my-list-id" class="VB-input" placeholder="enter s\c name"></b-form-input>
        </b-input-group>
        <!--S\C-->
        <!--pos type-->
        <b-input-group  prepend="postype" class="margin-up">
          <b-form-input list="my-list-id" class="VB-input" placeholder="enter postype name"></b-form-input>
        </b-input-group>
        <!--pos type-->
        <!--span-->
        <b-input-group  prepend="span" class="margin-up">
          <b-form-input list="my-list-id" class="VB-input" placeholder="enter span name"></b-form-input>  
        </b-input-group>
        <!--span-->
        <!--region-->
        <b-input-group  prepend="region" class="margin-up">
          <b-form-input list="my-list-id" class="VB-input" placeholder="enter region name"></b-form-input>
        </b-input-group>
        <!--region-->
        <b-button class="VB-button">connectivity</b-button>
        <b-button class="VB-button">exports</b-button>
        <b-button class="VB-button">search</b-button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'orpos',
  }

</script>
<style lang="scss" scoped>
.one-line{
  float: left;
  padding-left: 10px;
}
</style>