<template>
  <div class="col-md-12 mt-4"> <h1>Amsterdam</h1></div>
  <div class="row bg-light">
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
      console.log(this.todayForecast)
    },
    setTomorrowForecast(defaultCityData) {
      defaultCityData.list.map((item) => {
        if (item.dt_txt.includes(this.tomorrow)) {
          this.tomorrowForecast = {
            temp: item.main.temp,
            feels_like: item.main.feels_like,
            temp_min: item.main.temp_min,
            temp_max: item.main.temp_max,
            humidity: item.main.humidity,
            windSpeed: item.wind.speed,
            description: item.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
          };
        }
      })
    },
  },
};
</script>
<style scoped></style>
