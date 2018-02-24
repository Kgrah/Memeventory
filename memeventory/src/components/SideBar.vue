<template>
  <div class="sidenav">
    <div class="side-nav">
        <div v-for="item in items">
            <router-view
            class="nav-item"
            v-bind:title="item">
            </router-view>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'

@Component({
})
export default class SideBar extends Vue {
  public items: string[];

  constructor() {
    super();
    this.items = [ 'Dashboard', 'Collections', 'Profile', 'Settings' ];
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side-nav {
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color:white;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    box-shadow: 1.5px 1.5px 2px 1.5px #ccc;
}
</style>
