<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div></div>
  </header>
  <nav>
    <RouterLink
      class="routerlink"
      to="/"
    >
      Home
    </RouterLink>
    <RouterLink
      class="routerlink"
      to="/about"
    >
      About Us
    </RouterLink>
    <RouterLink
      class="routerlink"
      to="/info"
    >
      Train Info
    </RouterLink>
    <RouterLink
      class="routerlink"
      to="/resources"
    >
      Resources
    </RouterLink>
    <RouterLink
      class="routerlink"
      to="/support"
    >
      Support Our Cause
    </RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
  <footer>
    <p>
      Privacy policy: The short version is that we respect your privacy and don't sell your data
      under any circumstances.
    </p>
  </footer>
</template>

<style lang="scss" scoped>
header {
  padding-bottom: 5rem;
}

.routerlink {
  padding: 1rem;
  font-weight: 700;
}

main {
  background-color: $accent-light;
  color: $primary-dark;
  max-width: 80em;
  padding: 1rem;
  border-radius: 6px;
}

nav {
  background-color: $primary-dark;
  color: $secondary;
  padding: 1rem;
  position: sticky;
  top: 0;
}

footer {
  margin-top: 3rem;
  position: sticky;
  font-size: 0.75em;
}
</style>
