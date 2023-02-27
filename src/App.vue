<template>
  <AppHeader @showSearchCityForm="showAddCityForm"></AppHeader>
  <SearchCity v-if="showForm" @errorMessage="showAlert"  @newQuery = removeAlert @new-search = "onSearch"></SearchCity>
  <DefaultCity v-if="defaultCityForecast" :defaultCityData="defaultCityForecast"></DefaultCity>
  <CityList v-if="searchResult" :newCityForecast="searchResult"></CityList>
  <AlertMessage v-if="showErrorMsg" :message=errorMsg></AlertMessage>

</template>

<script>
import AlertMessage from '@/components/AlertMessage.vue';
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
    AlertMessage,
    SearchCity,
    AppHeader,
  },
  data() {
    return {
      showForm: false,
      showErrorMsg: false,
      errorMsg: "",
      defaultCityForecast: null,
      searchResult: null,
    };
  },
  created() {
  this.getDefaultCityDate();
  },
  methods: {
    showAddCityForm() {
      this.showForm = true;
      this.errorMsg = "";
    },
    showAlert(errorMsg) {
      if (errorMsg !== this.errorMsg) {
        this.showErrorMsg = true;
        this.errorMsg = errorMsg;
      }
    },
    removeAlert() {
      this.showErrorMsg = false;
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
