<template>
  <div class="m-4">
    <h3 >{{ this.data.city }}</h3>
    <div class="row row-cols-md-1 g-1">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-2">
                <span>TODAY</span>
              </div>
            </div>
            <div
                class="row align-items-center align-self-center align-content-center"
            >
              <div class="col-6 display-2">
                <img class="w-25" :src="this.forecastData.icon" alt="weather icon" /><strong>
                {{ this.forecastData.temp }} &deg;C</strong
              >
              </div>
              <div class="col-6">
                <div class="row">
                  <span
                  >H: {{ this.forecastData.temp_max }}&deg; &nbsp;L:
                    {{ this.forecastData.temp_min }}&deg;</span
                  >
                </div>
                <div class="row">
                  <span>Humidity {{ this.forecastData.humidity }}</span>
                </div>
                <div class="row">
                  <span>Wind Speed {{ this.forecastData.windSpeed }}</span>
                </div>
                <div class="row">
                  <span>Real Feel {{ forecastData.feels_like }}</span>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <span>{{ this.forecastData.description }}</span>
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
export default {
  name: 'TodayForecast',
  props: {
    forecastData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      data: {
        city: this.forecastData.city.name ,
        temp: this.forecastData.temp,
        feels_like: this.forecastData.feels_like,
        temp_min: this.forecastData.temp_min,
        temp_max: this.forecastData.temp_max,
        humidity: this.forecastData.humidity,
        windSpeed: this.forecastData.speed,
        description: this.forecastData.description,
        icon: `http://openweathermap.org/img/wn/${this.forecastData.icon}@2x.png`,
      },
    }
  }
}
</script>
