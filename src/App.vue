<template>
  <div id="app">
    <h1>Welcome to Your Vue.js App</h1>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: { Navbar }
}
</script>

<style>
</style>
