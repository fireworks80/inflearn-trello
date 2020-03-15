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
  export default {
    name: 'Home',
    data() {
      return {
        loading: false,
        apiRes: ''
      }
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        this.loading = true;

        const req = new XMLHttpRequest();

        req.open('GET', 'http://localhost:3000/health');
        req.send();
        req.addEventListener('load', () => {
          this.loading = false;
          this.apiRes = {
            status: req.status,
            statusText: req.statusText,
            response: JSON.parse(req.response)
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>