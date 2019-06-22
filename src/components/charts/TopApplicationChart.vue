<template>
  <div id="top-application-chart">
    <div id="top-application-chart__label">
      <label for="top-application">Top Application</label>
    </div>
    <div id="top-application-chart__chart">
      <apexchart height="250" type="bar" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  name: 'TopApplication',
  components: {
    apexchart: VueApexCharts
  },
  data () {
    return {
      series: [
        {
          name: 'Top Application',
          data: [100, 160, 218, 231, 250]
        }
      ],
      chartOptions: {
        chart: {
          fontFamily: '\'Montserrat\', Helvetica, Arial, sans-serif;'
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '40%',
            colors: {
              ranges: [
                {
                  from: 100,
                  to: 100,
                  color: '#6783FF'
                }
              ]
            }
          }
        },
        grid: {
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          labels: {
            show: false
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          categories: [
            'Application-1',
            'Application-2',
            'Application-3',
            'Application-4',
            'Application-5'
          ]
        },
        yaxis: {
          labels: {
            style: {
              fontSize: '11px',
              color: '#849FB4'
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
#top-application-chart {
  grid-area: topapps;
  position: relative;
  border-radius: 5px;
}
#top-application-chart::before {
  content: "";
  background-color: #0d1539;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: 10px;
  left: 0;
  position: absolute;
}
#top-application-chart__label {
  font-size: 20px;
  text-align: left;
  padding: 12px;
  color: #849fb4;
  margin: 5px;
  background-color: #070c24;
}
</style>
