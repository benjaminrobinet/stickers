<template>
  <div class="sticker">
    <p>{{ sticker.author }}</p>
  </div>
</template>

<style scoped>
  .sticker{
    background: red;
    width: 200px;
    height: 200px;
  }
</style>

<script>
  import {Sticker as StickerClass} from "../assets/Class/Sticker.class";

  export default {
    props: {
      sticker: StickerClass
    },
  }

  // console.log(this.sticker);

</script>
