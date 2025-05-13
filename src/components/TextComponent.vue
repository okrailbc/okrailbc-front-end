<template>
  <div>
    <Component :is="component" />
  </div>
</template>

<script>
export default {
  name: "TextComponent",
  props: {
    component: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss"></style>
