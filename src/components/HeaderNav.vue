<template>
  <div id="nav">
    <nav class="account-nav">
      <div class="logo">
        <a href="/">
          <div class="logo-placeholder" style="height: 50px; width: 50px; background: lightgrey; margin: 0 auto 1rem;"></div>
        </a>
      </div>
      <div>
        {{ user.loggedIn }}
      </div>
      <ul class="navbar-nav ml-auto">
          <template v-if="user.loggedIn">
            <div class="nav-item">{{ user.data.displayName }}</div>
            <li class="nav-item">
              <a class="nav-link" @click.prevent="logout">Sign out</a>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <router-link to="login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="register" class="nav-link">Register</router-link>
            </li>
          </template>
        </ul>
    </nav>
    
  </div>
</template>
<script>
import firebase from 'firebase'
import { mapGetters } from 'vuex';

export default {
  name: "HeaderNav",
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.replace({ name: "Home" })
      })
    }
  }
};
</script>

<style scoped lang="scss">
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    div, li {
      display: block;

      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
</style>