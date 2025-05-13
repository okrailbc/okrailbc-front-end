<template>
  <TextComponent :component="Markdown" />
</template>

<script setup>
import TextComponent from "../components/TextComponent.vue";
import Markdown from "../markdown/AboutUs.md";
</script>

<script>
export default {};
</script>
