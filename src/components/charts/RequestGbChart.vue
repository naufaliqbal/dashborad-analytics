<template>
  <div id="request-gb-chart">
    <section id="request-gb-chart__request">
      <apexchart type="radialBar" :options="chartOptions" :series="series"></apexchart>
      <div id="label-wrapper">
        <p>Request Saved</p>
        <small>147k request cached from 267k total</small>
      </div>
    </section>
    <section id="request-gb-chart__request">
      <apexchart type="radialBar" :options="chartOptions" :series="series"></apexchart>
      <div id="label-wrapper">
        <p>GB's Saved</p>
        <small>9.80 GB saved from 10.41 GB total</small>
      </div>
    </section>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  name: 'RequestGbChart',
  components: {
    apexchart: VueApexCharts
  },
  data () {
    return {
      series: [20],
      chartOptions: {
        chart: {
          id: 'request-gb',
          fontFamily: '\'Montserrat\', Helvetica, Arial, sans-serif;'
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: 'rgba(255,255,255, 0.2)',
              strokeWidth: '97%',
              margin: 15 // margin is in pixels
            },
            dataLabels: {
              show: true,
              name: {
                show: false
              },
              value: {
                offsetY: 0,
                fontSize: '26px',
                color: '#fff'
              }
            }
          }
        }
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
#request-gb-chart {
  grid-area: requestgb;
  position: relative;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#request-gb-chart::before {
  content: "";
  background-color: #0d1539;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: 10px;
  left: 0;
  position: absolute;
}
#request-gb-chart__request {
  color: #849fb4;
}
#label-wrapper {
  margin: 25px 0;
}
#request-gb-chart__request p {
  font-size: 20px;
  margin: 0;
}
#request-gb-chart__request small {
  font-size: 12px;
}
</style>
