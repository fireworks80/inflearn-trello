<template>
  <div>
    Board
    <p><em>bid: {{bid}}</em></p>
  </div>
</template>

<script>
  export default {
    name: 'Board',
    data() {
      return {
        bid: 0
      }
    },
    created() {
      this.bid = this.$route.params.bid;
    }
  }
</script>

<style lang="scss" scoped>

</style>