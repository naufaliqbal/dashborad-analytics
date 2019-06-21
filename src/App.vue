<template>
  <div id="app">
    <Navbar :title="title" :profilePicture="profilePicture" :username="username"></Navbar>
  </div>
</template>

<script>
import Navbar from "./components/DashboardNavbar";

export default {
  name: "app",
  components: {
    Navbar
  },
  data() {
    return {
      furnitureStyles: [],
      furnitureProducts: [],
      checkedStyles: [],
      rangeDelivery: [],
      searchKeyword: "",
      isOutOfStock: false,
      fabelioLogo: require("./assets/fabelio.png"),
      profilePicture: require("./assets/profpict.jpg"),
      username: "Ari Marpaung"
    };
  },
  mounted() {
    fetch("https://www.mocky.io/v2/5c9105cb330000112b649af8")
      .then(resp => resp.json())
      .then(data => {
        this.furnitureStyles = data.furniture_styles;
        this.furnitureProducts = data.products.map(el => {
          if (+el.delivery_time <= 7) {
            el["range_delivery"] = "1 week";
          } else if (+el.delivery_time > 7 && +el.delivery_time <= 14) {
            el["range_delivery"] = "2 weeks";
          } else if (+el.delivery_time > 14 && +el.delivery_time <= 30) {
            el["range_delivery"] = "1 month";
          } else {
            el["range_delivery"] = "more";
          }
          return el;
        });
      });
  },
  computed: {
    filteredProducts() {
      let vm = this;
      if (
        !vm.searchKeyword &&
        !vm.rangeDelivery.length &&
        !vm.checkedStyles.length
      ) {
        return vm.furnitureProducts;
      } else {
        let filtered = vm.furnitureProducts
          .filter(el => {
            return vm.searchKeyword
              ? el.name.toLowerCase().indexOf(vm.searchKeyword) > -1
              : el;
          })
          .filter(el => {
            return vm.rangeDelivery.length
              ? vm.rangeDelivery.indexOf(el.range_delivery) > -1
              : el;
          })
          .filter(el => {
            return vm.checkedStyles.length
              ? el.furniture_style.some(r => vm.checkedStyles.indexOf(r) > -1)
              : el;
          });

        // handle if products is out of stock
        filtered.length ? (vm.isOutOfStock = false) : (vm.isOutOfStock = true);

        return filtered;
      }
    }
  }
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
