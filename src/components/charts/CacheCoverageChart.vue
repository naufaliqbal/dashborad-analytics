<template>
  <div id="cache-coverage-chart">
    <div id="cache-coverage-chart__label">
      <label for="cache-coverage">Cache Coverage</label>
    </div>
    <div id="cache-coverage-chart__chart">
      <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  name: 'CacheCoverageChart',
  components: {
    apexchart: VueApexCharts
  },
  data () {
    return {
      series: [33, 35, 29, 41],
      chartOptions: {
        chart: {
          id: 'cache-coverage',
          fontFamily: '\'Montserrat\', Helvetica, Arial, sans-serif;'
        },
        plotOptions: {
          pie: {
            offsetY: 30,
            donut: {
              size: '80%',
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: '18px',
                  offsetY: -10
                },
                value: {
                  show: true,
                  fontSize: '18px'
                }
              }
            }
          }
        },
        labels: ['Hits', 'Expired', 'Misses', 'Not Cached'],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }
        ],
        dataLabels: {
          enabled: false
        },
        legend: {
          position: 'right',
          horizontalAlign: 'left',
          fontSize: '14px',
          offsetY: 30,
          labels: {
            colors: ['#6783FF', 'rgb(254, 176, 25)', '#FF5E39', '#849FB4']
          },
          itemMargin: {
            horizontal: 10
          },
          markers: {
            width: 12,
            height: 12
          }
        },
        stroke: {
          show: false
        },
        fill: {
          colors: [
            '#6783FF',
            '#4BD963',
            'rgb(254, 176, 25)',
            'rgb(255, 69, 96)'
          ]
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
#cache-coverage-chart::before {
  content: "";
  background-color: #0d1539;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: 10px;
  left: 0;
  position: absolute;
}
#cache-coverage-chart__label {
  font-size: 20px;
  text-align: left;
  padding: 12px;
  color: #849fb4;
  margin: 5px;
  background-color: #070c24;
}
#cache-coverage-chart {
  grid-area: cache;
  position: relative;
  border-radius: 5px;
  color: #849fb4;
}
</style>
