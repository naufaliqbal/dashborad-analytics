<template>
  <main id="app__body">
    <DashboardBodyAside></DashboardBodyAside>
    <DashboardBodyCenter></DashboardBodyCenter>
  </main>
</template>

<script>
import DashboardBodyAside from './DashboardBodyAside';
import DashboardBodyCenter from './DashboardBodyCenter';

export default {
  name: 'DashboardBody',
  components: { DashboardBodyAside, DashboardBodyCenter }
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
#app__body {
  display: flex;
}
</style>
