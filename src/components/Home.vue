<template>
  <div>
    home
    <dl>
      <dt>Board List</dt>
      <dd>
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
    name: 'Home'
  }
</script>

<style lang="scss" scoped>

</style>