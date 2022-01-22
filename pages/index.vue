<template>
  <div class="container">
    <TheHero />
    <LargeCardDisplay
      v-for="cardInfo in largeCardInfo"
      :key="cardInfo.id"
      :cardsSection="cardInfo"
    />
  </div>
</template>

<script>
import { largeCardSections } from "@/assets/svg/data.js";
export default {
  data() {
    return {
      largeCardInfo: largeCardSections,
    };
  },
};
</script>

<style></style>
