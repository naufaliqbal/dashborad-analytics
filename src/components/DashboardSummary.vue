<template>
  <nav id="app__summary">
    <div id="app__summary--logo">
      <img :src="docotelLogo" alt="docotel-logo">
    </div>
    <ul id="app__summary--lists">
      <li v-for="(summary, idx) in dataSummaries" :key="idx">
        <label :for="summary.value">{{summary.label}}</label>
        <span>{{summary.value}}</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Summary',
  props: ['dataSummaries'],
  data () {
    return {
      docotelLogo: require('../assets/img/docotel-logo.png')
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
#app__summary {
  display: flex;
  align-items: center;
  background-color: #0d1539;
}
#app__summary--logo img {
  width: 140px;
  padding: 15px;
}
#app__summary--lists {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
#app__summary--lists li span {
  display: block;
  margin: 5px 0;
  font-size: 20px;
  font-family: "MontserratBold", Helvetica, Arial, sans-serif;
  color: #52B4FF;
}
#app__summary--lists li label {
  color: #849FB4;
  font-size: 13px;
}
</style>
