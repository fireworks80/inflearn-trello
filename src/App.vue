<template>
  <div id="app">
    <Navbar />
    <h1>Welcome to Your Vue.js App</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
