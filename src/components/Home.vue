<template>
  <div class='home'>
    <div id='banner'>
      <h1>Trevor Clelland</h1>
      <router-link to="/hello">This is a button</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
