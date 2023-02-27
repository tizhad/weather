<template>
  <div class="m-4">
    <div class="row row-cols-md-1 g-1">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-4">
                <span>Tomorrow</span>
              </div>
            </div>
            <div
                class="row align-items-center align-self-center align-content-center"
            >
              <div class="col-6 display-3">
                <img class="w-25" :src="this.forecast.icon" alt="weather icon" /><strong>
                {{ this.forecast.temp }} &deg;C</strong
              >
              </div>
              <div class="col-6">
                <div class="row">
                  <span
                  >Min: {{ this.forecast.temp_max }}&deg; &nbsp;Max:
                    {{ this.forecast.temp_min }}&deg;</span
                  >
                </div>
                <div class="row">
                  <span>Humidity {{ this.forecast.humidity }}</span>
                </div>
                <div class="row">
                  <span>Wind Speed {{ this.forecast.windSpeed }}</span>
                </div>
                <div class="row">
                  <span>Real Feel {{ this.forecast.feels_like }}</span>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <span>{{ this.forecast.description }}</span>
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
  name: 'TomorrowForecast',
  props: {
    forecast: {
      type: Object,
      required: true,
    },
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>
