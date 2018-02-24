<template>
  <div class="sidenav">
    <div class="side-nav">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
class SideBar extends Vue {

}

export default SideBar;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side-nav {
    height: 100%;
    width: 200px;
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
img {
  float: left;
}
a {
    display: inline;
    font-family: 'Roboto', sans-serif;
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: grey;
    transition: 0.3s;
    text-align: left;
    box-shadow: 0px 0px 0px 0px #ccc;
    float: left;
}
</style>
