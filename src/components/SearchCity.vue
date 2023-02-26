<template>
  <div class="row mb-5 mt-5">
    <div class="col-lg-8 mx-auto">
      <form @submit.prevent="getCityForecast">
          <div class="input-group">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search City ..."
              aria-label="Search"
              v-model="query"
            />
            <div class="input-group-prepend">
              <button
                type="submit"
                class="btn btn-danger rounded text-warning"
                @click="getCityForecast"
              >
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
      </form>
    </div>
  </div>
  <div v-if="loading" class="spinner-border text-primary" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</template>

<script>
import { getWeatherData } from "@/api/weatherApi";

export default {
  name: "SearchCity",
  emits: ["errorMessage", "newQuery"],
  data() {
    return {
      query: "",
      loading: false,
      searchResults: [],
      message: "",
    };
  },
  watch: {
    query(newVal, oldVal) {
      if(newVal !== oldVal ) this.$emit("newQuery");
    }
  },
  methods: {
    async getCityForecast() {
      this.loading = true;
      try {
        const result = await getWeatherData(this.query);
        this.searchResults = result;
        if (this.searchResults === null) {
          this.$emit("errorMessage", "Please Enter the city name correctly!")
          this.loading = false;
        }
      } catch (error) {
        this.$emit("Please enter the city name correctly!", error)
      }
    },
  },
};
</script>

<style scoped>
.form-control::placeholder {
  font-size: 0.95rem;
  color: #aaa;
  font-style: italic;
}
body {
  background: #ffd89b;
  background: -webkit-linear-gradient(to right, #ffd89b, #19547b);
  background: linear-gradient(to right, #ffd89b, #19547b);
  min-height: 100vh;
}
.form-control:focus {
  box-shadow: none;
}
</style>
