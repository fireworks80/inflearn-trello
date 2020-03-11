<template>
  <div>
    Board 
    <div v-if="loading">
      <p>loading Board ...</p>
    </div>
    <div v-else>
      <p>bid: <em>{{bid}}</em></p>
      <ul>
        <li><router-link :to="`/b/${bid}/c/1`">card1</router-link></li>
        <li><router-link :to="`/b/${bid}/c/2`">card2</router-link></li>
      </ul>
      <hr>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Board',
    data() {
      return {
        bid: 0,
        loading: false
      }
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.bid = this.$route.params.bid;
        }, 500);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>