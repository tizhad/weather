<template>
  <AppHeader @showModal="showAddCityModal"/>
  <SearchCity v-if="showModal"></SearchCity>
</template>

<script>
import SearchCity from '@/components/SearchCity.vue';
import AppHeader from '@/components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    SearchCity,
    AppHeader,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    showAddCityModal() {
      this.showModal = true;
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
