<template>
  <section id="app__navbar">
    <nav id="app__navbar--title">
      <p>
        <label id="gray">Analytics</label>
        <label id="blue">Dashboard</label>
      </p>
    </nav>
    <nav id="app__navbar--credentials">
      <ul>
        <li id="app__navbar--credentials__profile-picture">
          <img :src="profilePicture" alt="profile-picture">
        </li>
        <li id="app__navbar--credentials__username">
          <span>{{username}}</span>
        </li>
        <li id="app__navbar--credentials__datetime">
          <div>
            <span id="date">{{dateNow}}</span>
            <span id="time">{{timeNow}}</span>
          </div>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['username'],
  data () {
    return {
      date: new Date().getDate(),
      months: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      profilePicture: require('../assets/img/profpict.jpg')
    };
  },
  computed: {
    dateNow () {
      let vm = this;
      return (
        vm.twoDigitsValidate(vm.date) +
        '-' +
        vm.twoDigitsValidate(vm.months) +
        '-' +
        vm.twoDigitsValidate(vm.year)
      );
    },
    timeNow () {
      let vm = this;
      let punctuation = vm.hours < 12 ? 'AM' : 'PM';
      let time = vm.hours % 12 || 12;
      return time + '.' + vm.twoDigitsValidate(vm.minutes) + ' ' + punctuation;
    }
  },
  methods: {
    twoDigitsValidate (value) {
      let isTwoDigits = value < 10 ? '0' : '';
      return isTwoDigits + String(value);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#gray {
  color: darkgray;
}
#blue {
  color: #5b9cff;
}
span {
  color: whitesmoke;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  align-items: center;
  margin: 10px 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  position: relative;
  left: -33px;
}
a {
  color: #42b983;
}
#app__navbar {
  display: flex;
  align-items: center;
}
#app__navbar--title {
  margin: 0;
  width: 80%;
  font-size: 20px;
  text-align: left;
  text-transform: uppercase;
  background-color: #070c24;
}
#app__navbar--credentials {
  background-image: linear-gradient(89deg, #6783ff 100%, #4bc2ff 100%);
}
#app__navbar--credentials__profile-picture img {
  height: 45px;
  border: 2px solid #fff;
  border-radius: 50px;
}
#app__navbar--credentials__username {
  min-width: fit-content;
  font-size: 13px;
}
#app__navbar--credentials__username span::after {
  content: "\25BC";
  display: inline;
  margin: 0 5px;
}
#date {
  font-family: "MontserratSemiBold", Helvetica, Arial, sans-serif;
  font-size: 12px;
}
#time {
  display: inline-block;
  font-family: "MontserratBold", Helvetica, Arial, sans-serif;
  font-size: 20px;
}
</style>
