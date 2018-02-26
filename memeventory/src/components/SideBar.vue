<template>
    <div class="side-nav">
        <div v-bind:key="item" v-for="item in items">
            <router-view
            class="nav-item"
            v-bind:title="item">
            </router-view>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
})
export default class SideBar extends Vue {
  items: string[];

  constructor () {
    super()
    this.items = [ 'Dashboard', 'Collections', 'Profile', 'Settings' ]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side-nav {
    height: 50%;
    position: fixed;
    margin-left: 10px;
    margin-bottom: 10px;
    top: 200px;
    width: 150px;
    left: 0;
    background-color:white;
    overflow-x: hidden;
    transition: 0.5s;
    box-shadow: 2px 2px 2px 2px #ccc;
}
</style>
