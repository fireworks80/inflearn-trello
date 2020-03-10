<template>
  <div>
    Board
    <p><em>bid: {{bid}}</em></p>
    <ul>
      <li>
        <!-- 
          to 와 :to의 차이
          to: 정적 라우팅
          :to 동적 라우팅 vue 라우터와는 별개이고 데이터를 바인딩 할 수 있다.
        -->
        <router-link :to="`/b/${bid}/c/1`">card 1</router-link>
      </li>
      <li>
        <router-link :to="`/b/${bid}/c/2`">card 2</router-link>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
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