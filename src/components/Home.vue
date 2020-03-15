<template>
  <div>
    home
    <dl>
      <dt>Board List:</dt>
      <dd>
        <p v-if="loading">loading.....</p>
        <p v-else>API result: {{apiRes}}</p>
        <ul>
          <li><router-link to="/b/1">Board 1</router-link></li>
          <li><router-link to="/b/2">Board 2</router-link></li>
        </ul>
      </dd>
    </dl>
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    name: 'Home',
    data() {
      return {
        loading: false,
        apiRes: '',
        error: ''
      }
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        this.loading = true;

        axios.get('http://localhost:3000/health')
          .then(response => {
            this.apiRes = response.data;
          })
          .catch(res => {
            this.error = res.response.data
          })
          .finally(() => {
            this.loading = false;
          });
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>