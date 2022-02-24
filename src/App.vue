<template>
  <router-view/>
</template>

<script>
export default {
  data() {
    return {
      url: process.env.VUE_APP_API,
      path: process.env.VUE_APP_PATH,
    };
  },
  mounted() {
    console.log(this.url, this.path);
  },
};
</script>

<style lang="scss">
@import 'bootstrap'
</style>
