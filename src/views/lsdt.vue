<template>
  <div id="box">
      <li v-for="i in arr">{{i.tit}}</li>
  </div>
</template>


<script>
export default {
  data() {
    return {
      arr: []
    };
  },
  created() {
    this.$http.get("http://localhost:8000/news").then(e => {
      this.arr = e.body;
    });
  }
};
</script>


<style>

</style>

