<template>
  <div class="m-4">
    <div class="row">
      <h3>{{ this.forecastData.city.name }}</h3>
    </div>
    <div class="row row-cols-md-1 g-1">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-4">
                <span><strong>TODAY</strong></span>
              </div>
            </div>
            <div
              class="row align-items-center align-self-center align-content-center"
            >
              <div class="col-6 display-4">
                <img class="w-25" :src="icon" alt="weather icon" /><strong>
                  {{ this.forecastData.list[0].main.temp }} &deg;C</strong
                >
              </div>
              <div class="col-6">
                <div class="row">
                  <span
                    >H: {{ this.forecastData.list[0].main.temp_max }}&deg;
                    &nbsp; L:
                    {{ this.forecastData.list[0].main.temp_min }}&deg;</span
                  >
                </div>
                <div class="row">
                  <span
                    >Humidity
                    {{ this.forecastData.list[0].main.humidity }}</span
                  >
                </div>
                <div class="row">
                  <span
                    >Wind Speed {{ this.forecastData.list[0].wind.speed }}</span
                  >
                </div>
                <div class="row">
                  <span
                    >Real Feel
                    {{ this.forecastData.list[0].main.feels_like }}</span
                  >
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <span>{{
                    this.forecastData.list[0].weather[0].description
                  }}</span>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="card-body">
            <div class="row">
              <div class="col-4">
                <span><strong>TOMORROW</strong></span>
              </div>
            </div>
            <div
              class="row align-items-center align-self-center align-content-center"
            >
              <div class="col-6 display-4">
                <img class="w-25" :src="icon" alt="weather icon" /><strong>
                  {{ this.forecastData.list[0].main.temp }} &deg;C</strong
                >
              </div>
              <div class="col-6">
                <div class="row">
                  <span
                    >H: {{ this.maximumTemp }}&deg;
                    &nbsp; L:
                    {{ this.minimumTemp }}&deg;</span
                  >
                </div>
                <div class="row">
                  <span
                    >Humidity
                    {{ this.forecastData.list[0].main.humidity }}</span
                  >
                </div>
                <div class="row">
                  <span
                    >Wind Speed {{ this.forecastData.list[0].wind.speed }}</span
                  >
                </div>
                <div class="row">
                  <span
                    >Real Feel
                    {{ this.forecastData.list[0].main.feels_like }}</span
                  >
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <span>{{
                    this.forecastData.list[0].weather[0].description
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment/moment";

export default {
  name: "TodayForecast",
  props: {
    forecastData: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.setTomorrowForecast(this.forecastData);
  },
  data() {
    return {
      icon: `http://openweathermap.org/img/wn/${this.forecastData.list[0]?.weather[0]?.icon}@2x.png`,
      tomorrowForecast: null,
      todayForecast: null,
      minimumTemp: null,
      maximumTemp: null,
    };
  },
  methods: {
    setTomorrowForecast(forecastData) {
      const tomorrow = moment().add(1, "day").format("YYYY-MM-DD");
      let minimumTemp = Infinity;
      let maximumTemp = -Infinity;
      let tomorrowForecast;

      forecastData.list.forEach((item) => {
        if (item.dt_txt.includes(tomorrow)) {
          if (item.main.temp < minimumTemp) {
            minimumTemp = item.main.temp;
          }
          if (item.main.temp > maximumTemp) {
            maximumTemp = item.main.temp;
          }
          tomorrowForecast = {
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
      });

      this.minimumTemp = minimumTemp;
      this.maximumTemp = maximumTemp;
      this.tomorrowForecast = tomorrowForecast;

      return forecastData.list.filter((item) => item.dt_txt.includes(tomorrow));
    },

    setMinAndMaxTemp() {},
    setTodayForecast(forecastData) {
      let today = moment();
      return (this.tomorrowForecast = forecastData.list.filter((item) => {
        if (item.dt_txt.includes(today)) {
          return (this.tomorrowForecast = {
            temp: item.main.temp,
            feels_like: item.main.feels_like,
            temp_min: item.main.temp_min,
            temp_max: item.main.temp_max,
            humidity: item.main.humidity,
            windSpeed: item.wind.speed,
            description: item.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
          });
        }
        return false;
      }));
    },
  },
};
</script>
