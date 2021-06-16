<template>
  <div class="page-login">
    <h1>Login</h1>
    <form @submit.prevent="login" class="login-form">
      <label>Email Address</label>
      <input
        type="text"
        v-model="email"
        placeholder="Email Address"
        class="input"
        required>
      <br />
      <label>Password</label>
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        class="input"
        required>
      <br />
      <button class="button">Log In</button>
    </form>

    <p>
      <router-link to="/signup">Create a New Account</router-link>
    </p>
  </div>
</template>
<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {

    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
        this.$router.replace('/profile')
      }).catch(err => {
        alert(err.message)
      })
    },
  },
  computed() {
    
  } 
}
</script>