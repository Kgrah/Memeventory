<template>
  <div class="sidebaritem">
      <table>
          <td class="image-row"><img src="https://www.shareicon.net/data/32x32/2017/04/28/885302_wheel_512x512.png"/></td>
          <td class="link-row"><a href="www.reddit.com">{{title}}</a></td>
      </table>
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
.sidebaritem {
    width: 300px;
    padding-bottom: 20px;
}
img {
    margin: auto;
    vertical-align: middle;
}
a { 
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    font-size: 18px;
    color: grey;
    transition: 0.3s;
    box-shadow: 0px 0px 0px 0px #ccc;
}
</style>
