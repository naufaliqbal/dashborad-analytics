<template>
  <aside id="app__body--aside">
    <ul>
      <li v-for="(icon, idx) in icons" :key="idx">
        <img :src="icon" alt="icon">
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'DashboardBodyAside',
  data () {
    return {
      icons: [
        require('../assets/img/growth.png'),
        require('../assets/img/reload.png'),
        require('../assets/img/history.png'),
        require('../assets/img/verification.png'),
        require('../assets/img/locked-padlock.png')
      ]
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
#app__body--aside{
  width: 8rem;
}
#app__body--aside ul {
  display: flex;
  flex-direction: column;
  margin: 80px 0;
}
#app__body--aside ul li {
  margin: 20px 0;
  text-align: center;
}
</style>
