<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About Us</RouterLink>
    <RouterLink to="/info">Train Info</RouterLink>
    <RouterLink to="/resources">Resources</RouterLink>
    <RouterLink to="/support">Support Our Cause</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
  <footer>
    <p>Privacy policy: we don't collect data from you, period.</p>
  </footer>
</template>

<style lang="scss">
main {
  background-color: $primary;
  max-width: 80em;
}

footer {
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>
