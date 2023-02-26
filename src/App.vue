<template>
  <AppHeader @showSearchCityForm="showAddCityForm"></AppHeader>
  <SearchCity v-if="showForm" @errorMessage="showAlert"  @newQuery = removeAlert></SearchCity>
  <AlertMessage v-if="showErrorMsg" :message=errorMsg></AlertMessage>
</template>

<script>
import AlertMessage from '@/components/AlertMessage.vue';
import SearchCity from '@/components/SearchCity.vue';
import AppHeader from '@/components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AlertMessage,
    SearchCity,
    AppHeader,
  },
  data() {
    return {
      showForm: false,
      showErrorMsg: false,
      errorMsg: "",
    };
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
    }
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
