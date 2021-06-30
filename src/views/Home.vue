<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <orpos />
      </div>
      <div class="col">
        <total /> 
      </div>
      <div class="col">
        <close />
      </div>
    </div>
    <div class="row">
      <record />
    </div>
  </div>
</template>

<script>
import orpos from '@/components/orpos.vue';
import total from '@/components/total.vue'
import close from '@/components/close.vue'
import record from '../components/record.vue'
export default {
  components:{
    orpos,
    total,
    close,
    record
  }
}
</script>

<style lang="sss" scoped>

</style>