<template>
  <center id="app__body--center">
    <header id="app__body--center__tabs">
      <ul>
        <li v-for="(tab, idx) in tabs" :key="idx">{{tab}}</li>
      </ul>
    </header>
    <section id="app__body--center__charts">
      <MalwareSessionChart></MalwareSessionChart>
      <CacheCoverageChart></CacheCoverageChart>
      <AlertTable></AlertTable>
      <RequestGbChart></RequestGbChart>
      <SourceCountries></SourceCountries>
      <TopApplicationChart></TopApplicationChart>
      <TopMalwareChart></TopMalwareChart>
    </section>
  </center>
</template>

<script>
import MalwareSessionChart from './charts/MalwareSessionChart';
import CacheCoverageChart from './charts/CacheCoverageChart';
import AlertTable from './charts/AlertTable';
import RequestGbChart from './charts/RequestGbChart';
import SourceCountries from './charts/SourceCountries';
import TopApplicationChart from './charts/TopApplicationChart';
import TopMalwareChart from './charts/TopMalwareChart';

export default {
  name: 'DashboardBodyCenter',
  components: {
    MalwareSessionChart,
    CacheCoverageChart,
    AlertTable,
    RequestGbChart,
    SourceCountries,
    TopApplicationChart,
    TopMalwareChart
  },
  data () {
    return {
      tabs: [
        'Tab Menu Utama',
        'Tab Menu 2',
        'Tab Menu 2',
        'Tab Menu 2',
        'Tab Menu 2'
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
  margin: 0;
}
li {
  display: inline-block;
  margin: 25px 25px 15px;
}
a {
  color: #42b983;
}
#app__body--center {
  width: 100%;
}
#app__body--center__tabs {
  text-align: left;
  font-size: 14px;
  border-bottom: 2px solid #2c3e50;
}
#app__body--center__tabs li:first-child {
  margin-left: 0;
  color: #08a4bc;
}
#app__body--center__charts {
  display: grid;
  grid-template-areas:
    "malware malware cache"
    "alert alert alert"
    "requestgb countries countries"
    "requestgb topapps topmalware"
    "requestgb topapps topmalware";
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
  grid-gap: 20px;
  margin: 20px 0;
}
</style>
