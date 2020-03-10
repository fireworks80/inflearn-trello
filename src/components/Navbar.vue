<template>
  <div>

    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/login">login</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>

<style lang="scss" scoped>

  ul {
    display: inline-flex;
    list-style: none;
  }

</style>