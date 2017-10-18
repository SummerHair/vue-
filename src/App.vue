<template>
  	<div id="app">
  			<top></top>
				 <div class="main">
					<router-view name="one">
					</router-view>
				    <router-view name="two">
				  	</router-view>
				  	<router-view name="three">
					</router-view>
			    <div class="footer">
			    	<audio src="https://m7.music.126.net/20171016160758/770a332bdb38422e965473fd6c98f6f1/ymusic/a1e3/b617/fc8c/fa120b2244dd59ddf3f19956872c7fc9.mp3" autobuffer autoloop loop controls></audio>
			    </div>

  	</div>
  </div>
</template>
<script>
	
import top from './components/myhead'
import bx from './components/bx'
export default {
  name: 'app',
  components: {
    top,bx
  },
  data () {
		 return {
			
		 }
	},
	
}

</script>
<style>
*{
	box-sizing: border-box;
}
li{
	list-style: none;
}
a{
	text-decoration: none;
}
.footer{
	height: 50px;
    background-color: #333;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
.footer audio{
	width: 80%;
	margin:0 auto;
	display: block;
	margin-top: 9px;
}
</style>
