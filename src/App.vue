<script setup>
import { RouterLink, RouterView } from "vue-router";
import project from "/package.json";
</script>

<template>
  <header>
    <ImageComponent
      src="trainlogo-formatted.svg"
      alt-text="Valley Rail Working Group logo"
      width="8rem"
      height="5rem"
    />
    <div>
      <h1>Valley Rail Working Group</h1>
      <p>Bringing passenger rail to the Thompson-Okanagan region of B.C. Canada</p>
    </div>
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
      to="/faq"
    >
      FAQ
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
  <div class="flexbox-footer">
    <main>
      <RouterView />
    </main>
    <footer>
      <p>
        Privacy policy: We respect your privacy. As of the time of writing, the Valley Rail Working
        Group doesn't collect browsing data, and our
        <a href="https://kinsta.com/legal/data-processing-addendum/">hosting provider</a> doesn't
        use or disclose user data outside that which is required to perform their services.
      </p>

      <p>
        If you sign up for our mailing list, we'll collect your name and email address so we can
        send you emails about our progress from time to time. You are free to unsubscribe at any
        time through the link in the email or by messaging us directly. We will not share your data
        with any person or organization unless it's necessary to perform the requested service. We
        will never sell your data, period. If you have any questions, send us a message at
        <a href="mailto:okrailbc@gmail.com">okrailbc@gmail.com</a>. We'd love to chat!
      </p>
    </footer>
  </div>
</template>

<script>
import ImageComponent from "@/components/ImageComponent.vue";
export default {
  created() {
    console.log(`Application version: ${project.version}`);
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  place-items: center;
  justify-content: center;
  gap: 2rem;
}

.routerlink {
  padding: 1rem;
  font-weight: 700;
}

.flexbox-footer {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 55rem;
  justify-content: center;
  align-items: stretch;
  margin: 0 auto;
}

main {
  background-color: $accent-light;
  color: $primary-dark;
  padding: 1rem;
  border-radius: 6px;
  flex: 1 0 auto;
  // justify-content: center;
  margin: 0 auto;
}

nav {
  background-color: $primary-dark;
  color: $secondary;
  padding: 1rem;
  position: sticky;
  top: 0;
  text-align: center;
}

footer {
  color: $secondary-light;
  font-size: 0.75em;
  text-align: center;
  max-width: 60rem;
  justify-content: center;
  margin: 0 auto;
}
</style>
