<template>
  <div id="app">
    <div id="nav">
      <navbar />
    </div>
    <router-view/>
  </div>
</template>
<script>
import navbar from "@/components/navbar.vue";
export default {
  name: "app",
  components:{
    navbar
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    &.router-link-exact-active {
      color: blue;
    }
  }
}


</style>
