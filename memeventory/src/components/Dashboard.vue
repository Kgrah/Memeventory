<template>
  <div class="dashboard">
      <router-view name="cardmat"></router-view>
      <router-view name="sidebar"></router-view>
      <router-view name="banner"></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Dashboard extends Vue {
}
</script>

<style>

</style>
