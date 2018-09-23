<template>
  <section class="container">
    <div id="stickers-container">
      <sticker v-for="(sticker, index) in stickers" v-bind:sticker="sticker" v-bind:key="index"></sticker>
    </div>
  </section>
</template>

<script>

import Sticker from "../components/Sticker";
import { Sticker as StickerClass } from "../assets/Class/Sticker.class"

export default {
  components: {
    Sticker
  },
  data () {
    return {
      stickers: [
        new StickerClass({
          author: "Benjamin",
          img: "https://placehold.id/100x100",
          alt: "Place holder"
        }),
        new StickerClass({
          author: "Jakob",
          img: "https://placehold.id/100x100",
          alt: "Place holder"
        }),
      ]
    };
  },
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>

