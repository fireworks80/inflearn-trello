<template>
  <div>
    card <em>{{cid}}</em>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    data() {
      return {
        cid: 0
      }
    },
    created() {
      this.cid = this.$route.params.cid
    },
    watch: {
      '$route'() {
        this.cid = this.$route.params.cid
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>