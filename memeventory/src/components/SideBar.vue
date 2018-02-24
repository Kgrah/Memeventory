<template>
  <div class="hello">
    <table>
      <tr>Hey there</tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class SideBar extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
tr {
  width: 100 px;
  height: 30px;
}

table {
  border: 2px solid;
  box-shadow: lightgrey;
}
</style>
