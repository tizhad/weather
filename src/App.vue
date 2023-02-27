<template>
  <AppHeader @showSearchCityForm="showAddCityForm"></AppHeader>
  <SearchCity v-if="showForm"  @newSearch = "onSearch"></SearchCity>
  <DefaultCity v-if="defaultCityForecast" :defaultCityData="defaultCityForecast"></DefaultCity>
  <CityList v-if="searchResult" :newCityForecast="searchResult"></CityList>
  <div v-if="errorMsg" class="alert alert-danger w-50 align-items-center align-self-center m-auto" role="alert">{{message}}</div>

</template>

<script>
import CityList from '@/components/CityList.vue';
import DefaultCity from '@/components/DefaultCity.vue';
import SearchCity from '@/components/SearchCity.vue';
import AppHeader from '@/components/AppHeader.vue';
import {getWeatherData} from '@/api/weatherApi';

export default {
  name: 'App',
  components: {
    CityList,
    DefaultCity,
    SearchCity,
    AppHeader,
  },
  data() {
    return {
      showForm: false,
      defaultCityForecast: null,
      searchResult: null,
      errorMsg: null,
    };
  },
  created() {
  this.getDefaultCityDate();
  },
  methods: {
    showAddCityForm() {
      this.showForm = true;
    },
    onSearch(result) {
      this.searchResult = result;
    },
    async getDefaultCityDate() {
        try {
          const result = await getWeatherData('Amsterdam');
          if (result && result.list.length > 0) {
            this.defaultCityForecast = result;
          }
          if (this.defaultCityForecast === null) {
            this.errorMsg = "Something went wrong! Please refresh the page."
          }
        } catch (error) {
          this.errorMsg = "Something went wrong! Please refresh the page."
        }
      },
  }
}
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
