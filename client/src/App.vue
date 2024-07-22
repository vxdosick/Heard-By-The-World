<template>
    <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  props: {
  },
  data() {
    return {

    }
  },
  methods: {

  }
});
</script>

<style lang="scss">
// Reset styles
*{
	padding: 0;
	margin: 0;
	border: 0;
}
*, *:before, *:after{
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}
:focus, :active{outline: none;}
a:focus, a:active{outline: none;}

nav,footer,header,aside{display: block;}

html, body{
	height: 100%;
	width: 100%;
	font-style: 100%;
	line-height: 1;
	font-size: 14px;
	-ms-text-size-adjust: 100%;
	-moz-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	font-family: "Inter";
}

input, button, textarea{font-family: inherit;}

input::-ms-clear{display:none;}
button{cursor: pointer;}
button::-moz-focus-inner{padding: 0;border: 0;}
a, a:visited{text-decoration: none;}
a:hover{text-decoration: none;}
ul li{list-style-type: none;}
img{vertical-align: top;}
html {
    scroll-behavior: smooth;
}
h1,h2, h3, h4, h5, h6{font-weight: 400;}
// Normal use styles
  .wrapper {
    width: 100%;
  }
  .container {
    max-width: 1470px;
    margin: 0 auto;
    padding: 0px 15px;
  }
  .container__small {
    max-width: 1200px;
    margin: 0 auto;
  }
  .normal__text {
    font-size: 21px;
    font-weight: 400;
  }
  .small__text {
    font-size: 18px;
    font-weight: 400;
    line-height: 140%;
  }
  .supertitle__text {
    font-size: 80px;
    font-weight: bold;
  }
  .title__text {
    font-size: 32px;
    font-weight: 600;
  }
  .button__text {
    font-size: 18px;
    font-weight: 600;
  }
</style>
