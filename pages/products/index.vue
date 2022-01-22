<template lang="en">
<div>
<TheNav />
    <div class="container">
        <LargeCardDisplay v-for="cardInfo in largeCardInfo.slice(0,1)" :key="cardInfo.id" :cardsSection="cardInfo"/>
        <SmallCardDisplay v-for="cardInfo in smallCardsInfo" :key="cardInfo.id" :cardsSection="cardInfo"/>
    </div>
    </div>
</template>

<script>
import { largeCardSections, smallCardSections } from "@/assets/data.js";
export default {
  data() {
    return {
      largeCardInfo: largeCardSections,
      smallCardsInfo: smallCardSections,
    };
  },
};
</script>

<style scoped></style>
