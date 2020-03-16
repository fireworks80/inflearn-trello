<template>
  <div>
    home
    <dl>
      <dt>Board List:</dt>
      <dd>
        <p v-if="loading">loading.....</p>
        <div v-else>
          <p>API result:</p>
          <div v-for="b in boards" :key="b.id">{{b}}</div>
        </div>

        <ul>
          <li><router-link to="/b/1">Board 1</router-link></li>
          <li><router-link to="/b/2">Board 2</router-link></li>
        </ul>
      </dd>
    </dl>
  </div>
</template>

<script>
import { board } from '../api';

  export default {
    name: 'Home',
    data() {
      return {
        loading: false,
        boards: [],
        error: ''
      }
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        this.loading = true;
        board.fetch()
              .then( data => { this.boards = data; })
              .finally(() => {
                this.loading = false;
              });
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>