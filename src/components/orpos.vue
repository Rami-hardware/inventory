<template>
    <div>
        <form method="post" action="/orpos">
       <b-form-group v-slot="{ ariaDescribedby }">
      <b-form-checkbox-group
        id="checkbox-group-2"
        v-model="selected"
        :aria-describedby="ariaDescribedby"
        name="flavour-2"
      >
        <b-form-checkbox value="orange">pos no. mode</b-form-checkbox>
        <b-form-checkbox value="apple">pos no. wth training</b-form-checkbox>
        <b-form-checkbox value="pineapple">training only</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>
        <input type='checkbox' name="POS_No" /> pos no. mode
        <input type='checkbox' name="POS_Not" /> pos no. wth training
        <input type='checkbox' name="training" /> training only
        <label> store 
            <input type="text" name = "store">
        </label>
            <label> brand 
            <input type="text" name = "brand">
        </label>
            <label> mall 
            <input type="text" name = "mall">
        </label>
            <label> s\c 
            <input type="text" name = "sc">
        </label>
            <label> pos type 
            <input type="text" name = "pos_type">
        </label>
            <label> span 
            <input type="text" name = "span">
        </label>
            <label> region 
            <input type="text" name = "region">
        </label>
        <b-button>connectivity</b-button>
        <b-button>exports</b-button>
        <b-button>search</b-button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'orpos',
    data() {
      return {
        selected: [], // Must be an array reference!
        options: [
          { text: 'Orange', value: 'orange' },
          { text: 'Apple', value: 'apple' },
          { text: 'Pineapple', value: 'pineapple' },
          { text: 'Grape', value: 'grape' }
        ]
      }
    }
  }

</script>