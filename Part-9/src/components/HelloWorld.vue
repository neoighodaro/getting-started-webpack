<template>
  <div class="container">
    <h1>{{ message }}</h1>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  padding: 0 16px;
  max-width: 1200px;
}

.container h1 {
  color: #2a2a55;
  text-align: center;
}
</style>


<script>
export default {
  data: () => ({
    message: "Hello World!"
  })
};
</script>
