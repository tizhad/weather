<template>
  <div class="row">
    <div class="col-md-6">
      <TodayForecast :forecastData="todayForecast"></TodayForecast>
    </div>
    <div class="col-md-6">
      <TomorrowForecast :forecast="tomorrowForecast"></TomorrowForecast>
    </div>
  </div>
</template>
<script>
import TodayForecast from "@/components/TodayForecast.vue";
import TomorrowForecast from "@/components/TomorrowForecast.vue";

export default {
  name: "DefaultCity",
  components: { TodayForecast, TomorrowForecast },
  props: {
    defaultCityData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      today: new Date().toISOString().slice(0, 10),
      tomorrow: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
      timeString: null,
      todayForecast: this.defaultCityData,
      tomorrowForecast: this.defaultCityData,
    };
  },
  mounted() {
    this.setTodayForecast(this.defaultCityData);
    this.setTomorrowForecast(this.defaultCityData);
  },
  methods: {
    setTodayForecast(defaultCityData) {
      this.todayForecast = {
        city: defaultCityData.city.name,
        temp: defaultCityData.list[0].main.temp,
        feels_like: defaultCityData.list[0].main.feels_like,
        temp_min: defaultCityData.list[0].main.temp_min,
        temp_max: defaultCityData.list[0].main.temp_max,
        humidity: defaultCityData.list[0].main.humidity,
        windSpeed: defaultCityData.list[0].wind.speed,
        description: defaultCityData.list[0].weather[0].description,
        icon: `http://openweathermap.org/img/wn/${defaultCityData.list[0].weather[0].icon}@2x.png`,
      };
    },
    setTomorrowForecast(defaultCityData) {
      const forecast = defaultCityData.list.find((f) => f.dt_txt.includes(this.tomorrow));
      this.tomorrowForecast = {
        city: defaultCityData.city.name,
        temp: forecast.main.temp,
        feels_like: forecast.main.feels_like,
        temp_min: forecast.main.temp_min,
        temp_max: forecast.main.temp_max,
        humidity: forecast.main.humidity,
        windSpeed: forecast.wind.speed,
        description: forecast.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`,
      };
    },
  },
};
</script>
<style scoped></style>
