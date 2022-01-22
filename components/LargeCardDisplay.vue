<template lang="">
  <div class="container">
    <h4 class="header">{{ cardsSection.title }}</h4>
    <p class="snippet">
      {{ cardsSection.snippet }}
    </p>
    <div class="cards-container">
      <LargeCard
        v-for="card in cardsSection.cards"
        :key="card.id"
        :card="card"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: ["cardsSection"],
};
</script>
<style scoped>
.container {
  margin-top: 5rem;
}
.header {
  font-weight: 700;
  font-size: 1.5rem;
}
.snippet {
  color: grey;
  margin-bottom: 1.5rem;
}
.cards-container {
  display: flex;
  justify-content: space-between;
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
</style>
