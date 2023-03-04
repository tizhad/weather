<template>
  <div class="row">
    <div
      class="col-md-6"
      v-for="(item, index) in this.todayForecast"
      :key="index"
    >
      <TodayForecast
        v-if="item"
        :forecastData="item"
        @removeCity="removeCity"
      ></TodayForecast>
    </div>
  </div>
</template>

<script>
import TodayForecast from "@/components/TodayForecast.vue";

import { toRaw } from "vue";

export default {
  name: "CityList",
  emits: ["removeCity"],
  components: { TodayForecast },
  props: {
    cityForecast: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      todayForecast: null,
      tomorrowForecast: null,
      cityForecastData: [],
    };
  },
  created() {
    this.setTodayForecast(this.cityForecast);
  },
  methods: {
    setTodayForecast(forecast) {
      this.todayForecast = toRaw(forecast);
    },
    removeCity(city) {
      this.$emit('removeCity', city);
    }
  },
};
</script>
