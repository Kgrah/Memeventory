<template>
  <div class="cardmat">
      <h1>Cardmat</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CardMat extends Vue {
}
</script>

<style scoped>
.cardmat {
 position: fixed; 
}
</style>
