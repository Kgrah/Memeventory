<template>
  <div class="sidebaritem">
      <img src="https://www.shareicon.net/data/32x32/2017/04/28/885302_wheel_512x512.png"/>
      <div>
          <!-- will become <router-link></router-link>-->
          <a href="www.reddit.com">{{title}}</a>
      </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component({
  props: [
    'title'
  ]
})
export default class SideBarItem extends Vue {
}
</script>

<style>

a {
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    font-size: 20px;
    color: grey;
    transition: 0.3s;
    box-shadow: 0px 0px 0px 0px #ccc;
}
</style>
