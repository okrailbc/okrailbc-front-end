<template>
  <div>
    <img
      :style="style"
      :src="getImageUrl()"
      :alt="altText"
      @error="imageLoadError"
    />
  </div>
</template>

<script>
export default {
  name: "ImageComponent",
  props: {
    src: {
      type: String,
      default: null,
    },
    altText: {
      type: String,
      default: null,
    },
    width: {
      type: String,
      default: null,
    },
    height: {
      type: String,
      default: null,
    },
  },
  computed: {
    style() {
      const style = `width: ${this.width}; height: ${this.height};`;
      return style;
    },
  },
  methods: {
    getImageUrl() {
      const path = `public/assets/${this.src}`;
      console.log("potato result", path);
      return path;
    },
    imageLoadError() {
      console.log(`Image failed to load: ${this.src}`);
    },
  },
};
</script>
