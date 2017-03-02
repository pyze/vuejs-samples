<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="testCustomEvent()">Test postCustomEvent</button>
    <button @click="testCustomEventWithAttributes()">Test postCustomEventWithAttributes</button>
    <a href="#/Page1"> <button >Page1</button></a>
  </div>
</template>

<script>
export default {
  name: 'hello',
  methods:{
    testCustomEvent : function(){
      PyzeEvents.postCustomEvent("Send events to Pyze");
    },
    testCustomEventWithAttributes : function(){
      PyzeEvents.postCustomEventWithAttributes('Sending events with attributes',{'Button Name' : 'Click to send'});
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
