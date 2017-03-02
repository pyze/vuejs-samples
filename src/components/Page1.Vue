<template>
  <div class="page1">
    <h1>{{ msg }}</h1>
    <p>Landing on page1</p>
  </div>
</template>

<script>
export default {
  name: 'page1',
  data () {
    return {
      msg: 'Welcome to Page1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
