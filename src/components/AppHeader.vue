<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Weather Forecast</a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <button type="button" class="btn btn-light" @click="$emit('showModal')">Add City</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
  },
}
</script>

<style scoped>

</style>
