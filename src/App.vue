<template>
  <div id="app">
    <Navbar :username="username"></Navbar>
    <Summary :dataSummaries="summaryData"></Summary>
    <DashboardBody></DashboardBody>
  </div>
</template>

<script>
import Navbar from './components/DashboardNavbar';
import Summary from './components/DashboardSummary';
import DashboardBody from './components/DashboardBody';

export default {
  name: 'app',
  components: {
    Navbar,
    Summary,
    DashboardBody
  },
  data () {
    return {
      username: 'Ari Marpaung',
      summaryData: [
        {
          label: 'Last',
          value: 24556
        },
        {
          label: 'High',
          value: 34556
        },
        {
          label: 'Low',
          value: 14556
        },
        {
          label: 'Alert',
          value: 34556
        },
        {
          label: 'Malware',
          value: 34556
        }
      ]

    };
  },
  mounted () {},
  computed: {}
};
</script>

<style>
@font-face {
  font-family: Montserrat;
  src: url("./assets/fonts/Montserrat-Medium.ttf");
}
@font-face {
  font-family: MontserratBold;
  src: url("./assets/fonts/Montserrat-Bold.ttf");
}
@font-face {
  font-family: MontserratSemiBold;
  src: url("./assets/fonts/Montserrat-SemiBold.ttf");
}
body {
  background-color: #070c24;
  margin: 0;
}
#app {
  width: 90%;
  min-width: 960px;
  max-width: 1200px;
  margin: auto;
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
}
</style>
