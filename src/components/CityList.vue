<template>
  <div class="row">
    <div class="col-md-6">
      <TodayForecast
        v-if="newCityForecast"
        :forecastData="cityData"
      ></TodayForecast>
    </div>
    <div class="col-md-6">
      <TomorrowForecast
        v-if="newCityForecast"
        :forecast="cityData"
      ></TomorrowForecast>
    </div>
  </div>
</template>

<script>
import TodayForecast from "@/components/TodayForecast.vue";
import TomorrowForecast from "@/components/TomorrowForecast.vue";

export default {
  name: "CityList",
  components: { TomorrowForecast, TodayForecast },
  props: {
    newCityForecast: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log(this.newCityForecast, "new city in city list");
  },
  data() {
    return {
      cityData: {
        city: this.newCityForecast.city.name,
        temp: this.newCityForecast.list[0].main.temp,
        feels_like: this.newCityForecast.list[0].main.feels_like,
        temp_min: this.newCityForecast.list[0].main.temp_min,
        temp_max: this.newCityForecast.list[0].main.temp_max,
        humidity: this.newCityForecast.list[0].main.humidity,
        windSpeed: this.newCityForecast.list[0].wind.speed,
        description: this.newCityForecast.list[0].weather[0].description,
        icon: `http://openweathermap.org/img/wn/${this.newCityForecast.list[0].weather[0].icon}@2x.png`,
      },
    };
  },
  methods: {},
};
</script>
