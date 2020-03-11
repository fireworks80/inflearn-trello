<template>
  <div>
    Card 

    <p v-if="loading">loading card ...</p>
    <p v-else>Cid: <em>{{cid}}</em></p>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    data() {
      return {
        cid: 0,
        loading: false
      }
    },
    // created() {
    //   this.fetchData();
    // },
    // watch: {
    //   '$route'() {
    //     this.fetchData();
    //   }
    // },
    // watch 를 다른 형식으로도 사용 가능
    // immediate: true 하면 $route가 변경 즉시 실행한다는 것 이므로
    // created()와 중복이 되므로 created()를 삭제
    watch: {
      '$route': {
        handler: 'fetchData',
        immediate: true
      }
    },
    methods: {
      fetchData() {
        this.loading = true;
        setTimeout(() => {
          this.cid = this.$route.params.cid;
          this.loading = false;
        }, 500);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>