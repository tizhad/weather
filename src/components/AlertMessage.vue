<template>
  <div class="alert alert-danger w-50 align-items-center align-self-center m-auto" role="alert">
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'AlertMessage',
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
