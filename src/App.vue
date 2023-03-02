<template>
  <AppHeader @showSearchCityForm="showAddCityForm"></AppHeader>
  <SearchCity v-if="showForm" @newSearch="onSearch"></SearchCity>
  <div
      v-if="errorMsg"
      class="alert alert-danger w-50 align-items-center align-self-center m-auto"
      role="alert"
  >
    {{ errorMsg }}
  </div>
  <CityList
    v-if="this.storedCitiesForecastData.length > 0"
    :cityForecast="this.storedCitiesForecastData"
  ></CityList>
</template>

<script>
import CityList from "@/components/CityList.vue";
import SearchCity from "@/components/SearchCity.vue";
import AppHeader from "@/components/AppHeader.vue";
import { getWeatherData } from "@/api/weatherApi";
import {toRaw} from 'vue';

export default {
  name: "App",
  components: {
    CityList,
    SearchCity,
    AppHeader,
  },
  data() {
    return {
      showForm: false,
      defaultCityForecast: null,
      errorMsg: null,
      cityList: ["Amsterdam"],
      storedCitiesForecastData: [],
    };
  },
  created() {
    const storedCityList = JSON.parse(localStorage.getItem("cityList"));
    localStorage.setItem("cityList", JSON.stringify(storedCityList));
    this.cityList = storedCityList;
    this.cityList.forEach((city) => {
      this.getCityForecast(city);
    });
  },
  methods: {
    showAddCityForm() {
      this.showForm = true;
    },
    async onSearch(city) {
      if (!this.cityList.includes(city)) {
        this.cityList.push(city);
      }
      localStorage.setItem("cityList", JSON.stringify(this.cityList));
      const weatherData = await this.getCityForecast(city);
      this.storedCitiesForecastData.push(toRaw(weatherData));
      if (weatherData) {
        this.errorMsg = null;
      }
    },
    async getCityForecast(city) {
      try {
        const result = await getWeatherData(city);
        if (result && result.list.length > 0) {
          this.storedCitiesForecastData.push(result);
        }
        if (result === null) {
          this.errorMsg = "Something went wrong! Please refresh the page.";
        }
      } catch (error) {
        this.errorMsg = "Something went wrong! Please refresh the page.";
      }
    },
  },
};
</script>

<style>
@import "~@fortawesome/fontawesome-free/css/all.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
