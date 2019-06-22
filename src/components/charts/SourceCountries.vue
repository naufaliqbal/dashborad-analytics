<template>
  <div id="source-countries">
    <section id="source-countries__label">
      <label for="source-countries">Source Countries</label>
    </section>
    <section id="source-countries__maps">
      <div id="source-countries__maps--image">
        <img :src="maps" alt="maps">
      </div>
      <div id="source-countries__maps--legends">
        <ul>
          <li v-for="(country, idx) in countries" :key="idx">
            <span id="color" :style="'border: 3px solid ' + country.color"></span>
            <span id="name">{{country.name}}</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SourceCountries',
  data () {
    return {
      maps: require('../../assets/img/map.png'),
      countries: [
        {
          color: '#FF8474',
          name: 'Indonesia'
        },
        {
          color: '#A3A1FB',
          name: 'United States'
        },
        {
          color: '#5EE2A0',
          name: 'South Africa'
        },
        {
          color: '#FF7CC3',
          name: 'Russia'
        },
        {
          color: '#54D8FF',
          name: 'Spain'
        }
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
  margin: 15px 25px;
}
a {
  color: #42b983;
}
#source-countries::before {
  content: "";
  background-color: #0d1539;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: 10px;
  left: 0;
  position: absolute;
}
#source-countries__label {
  font-size: 20px;
  text-align: left;
  padding: 12px;
  color: #849fb4;
  margin: 5px;
  background-color: #070c24;
}
#source-countries {
  grid-area: countries;
  position: relative;
  border-radius: 5px;
}
#source-countries__maps {
  display: flex;
  align-items: center;
  padding: 12px;
  margin: 5px;
}
#source-countries__maps--image {
  width: 70%;
}
#source-countries__maps--legends span#color {
  height: 8px;
  width: 8px;
  border-radius: 10px;
  display: inline-block;
  margin: 0 5px;
}
#source-countries__maps--legends ul {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  color: #849fb4;
  font-size: 12px;
  font-family: "MontserratSemiBold", Arial, Helvetica, sans-serif;
}
</style>
