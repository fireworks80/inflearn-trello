<template>
  <div class="login">
    <h2>Log in to Trello</h2>
    <form @submit.prevent="onSubmit">
      <p><label for="email">Email: </label><input class="form-control" v-model="email" id="email" type="email" playceholder="test@test.com"></p>
      <p><label for="pw">Password: </label><input class="form-control" v-model="password" id="pw" type="password" playceholder="123123"></p>
      <button class="btn" :class="{'btn-success': !invalidForm}" :disabled="invalidForm">log in</button>
    </form>
    <p class="error" v-if="error">login Failer</p>
  </div>
</template>

<script>
import { auth, setAuthInHeader } from '../api';
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      error: '',
      rPath: ''
    };
  },
  computed: {
    invalidForm() {
      return !this.email || !this.password;
    }
  },
  created() {
    this.rPath = this.$route.query.rPath || '/';
  },
  methods: {
    onSubmit() {
      auth.login(this.email, this.password)
          .then(res => {
            localStorage.setItem('token', res.accessToken);
            setAuthInHeader(res.accessToken);
            this.$router.push(this.rPath);
          })
          .catch( error => {
            this.error = error;
            console.log(error);
          })
    }
  }
}
</script>

<style>
.login {
  width: 400px;
  margin: 0 auto; 
}
.error {
  color: #f00;
}

</style>