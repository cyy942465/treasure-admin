<template>
  <div class="container">
    <p>{{ getPage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    getPage() {
      console.log(this.$route.name);
      return this.$route.name;
    }
  }
}
</script>

<style scoped>
.container {
  padding-left: 1em;
  height: 2em;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
}

.line {
  width: 100%;
  margin-top: 1em;
  border: 1px solid #CFD8DC;
}

</style>