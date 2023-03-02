<template>
  <div class="row mb-5 mt-5">
    <div class="col-lg-8 mx-auto">
      <form @submit.prevent="getSearchResult">
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
  <div v-if="message" class="alert alert-danger w-50 align-items-center align-self-center m-auto" role="alert">{{message}}</div>
</template>

<script>
import { getWeatherData } from "@/api/weatherApi";

export default {
  name: "SearchCity",
  emits: ["newSearch"],
  data() {
    return {
      query: "",
      loading: false,
      searchResult: null,
      message: "",
    };
  },
  watch: {
    query(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.message = null;
      }
    },
  },
  methods: {
    async getSearchResult() {
      this.loading = true;
      try {
        const result = await getWeatherData(this.query);
        this.searchResult = result;
        if (this.searchResult === null) {
          this.message = "Please Enter the city name correctly!";
        }else {
          this.setData(this.searchResult);
        }
      } catch (error) {
        this.message = "Something went wrong, Please try again"
      } finally {
        this.loading = false;
      }
    },
    setData(searchResult) {
      const cityForecast =  {
        city: searchResult.city.name,
      };
      this.$emit("newSearch", cityForecast.city);
    }
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
