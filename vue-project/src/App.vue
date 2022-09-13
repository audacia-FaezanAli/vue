<script setup lang="ts">
import {ref} from 'vue'
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from "./components/HelloWorld.vue";
import EmployeeTable from "./components/EmployeeTable.vue"

const pageHeader = ref('Home Page')

</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld :msg='pageHeader'/>
      
      <nav>
        <RouterLink @click="pageHeader='Home Page'" to="/">Home</RouterLink>
        <RouterLink @click="pageHeader='Sign Up'" to="/signup">Sign Up</RouterLink>
        <!-- <RouterLink @click="pageHeader='New User'" to="/userform">User Form</RouterLink> -->
        <RouterLink @click="pageHeader='Employees'" to="/employees">Employees</RouterLink>
        <!-- <RouterLink @click="pageHeader='Workshop'" to="/workshop">Workshop</RouterLink> -->
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
