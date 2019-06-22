<template>
  <div id="alert-table">
    <div id="alert-table__label">
      <label for="alert-table">Alerts</label>
    </div>
    <div id="alert-table__table">
      <table>
        <thead>
          <tr>
            <th v-for="(head, idx) in alerts.head" :key="idx">{{head}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(alert, idx) in alerts.body" :key="idx">
            <td v-for="(data, idx) in alert.data" :key="idx" v-html="data">{{data}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlertTable',
  data () {
    return {
      alerts: {
        head: [
          'Alert',
          'Severity',
          'Source IPv4',
          'Target IPv4',
          'Device',
          'Timestamp'
        ],
        body: [
          {
            data: [
              'THREAT_INTEL',
              'INTEL',
              '10.128.35.6',
              '<div style="width: 85%; border-radius: 5px; background-color: #6783FF;">&nbsp;</div>',
              'IA',
              '2017-05-11T11:59:02.652544+0000'
            ]
          },
          {
            data: [
              'THREAT_INTEL',
              'INTEL',
              '<div style="width: 85%; border-radius: 5px; background-color: #6783FF;">&nbsp;</div>',
              '10.128.35.6',
              'IA',
              '2017-05-11T11:59:02.652544+0000'
            ]
          },
          {
            data: [
              'THREAT_INTEL',
              'INTEL',
              '10.128.35.6',
              '<div style="width: 85%; border-radius: 5px; background-color: #6783FF;">&nbsp;</div>',
              'IA',
              '2017-05-11T11:59:02.652544+0000'
            ]
          }
        ]
      }
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
#alert-table::before {
  content: "";
  background-color: #0d1539;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: 10px;
  left: 0;
  position: absolute;
}
#alert-table__label {
  font-size: 20px;
  text-align: left;
  padding: 12px;
  color: #849fb4;
  margin: 5px;
  background-color: #070c24;
}
#alert-table {
  grid-area: alert;
  position: relative;
  border-radius: 5px;
}
#alert-table__table {
  font-size: 12px;
  color: #849fb4;
  text-align: left;
  padding: 12px;
  margin: 5px;
}
table {
  width: 100%;
}
th {
  padding-bottom: 10px;
}
td {
  padding: 10px 0;
  border-bottom: 1px solid #849fb421;
}
</style>
