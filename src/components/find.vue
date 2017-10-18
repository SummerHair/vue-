<template>
	<div class="find-nav">
		<bx>
			<ul>
				<li v-for="(findnav,index) in findnavs" >
					<router-link :to='{path:findnav.url}'  :class="{current:findnav.iscurrent}">{{findnav.name}}</router-link>
				</li>
			</ul>
		</bx>
	</div>
	
</template>

<script>
	import bx from './bx'
	export default {
		name:'find',
		components:{
			bx
		},
		data() {
			return {
				findnavs:[
					{
						name:'推荐',url:'/find/recommend',iscurrent:true
					},
					{
						name:'排行榜',url:'/find/ranking'
					},
					{
						name:'歌单',url:'/find/song'
					},
					{
						name:'主播电台',url:'/find/radio'
					},
					{
						name:'歌手',url:'/find/singer'
					},
					{
						name:'新碟上架',url:'/find/new'
					}
				]
			}
		},
		methods:{
			
		}
		
	}
</script>

<style>
.find-nav{
	z-index: 90;
	height: 35px;
	box-sizing: border-box;
	background-color: #C20C0C;
	border-bottom: 1px solid #a40011;
}
.find-nav ul{
	float: left;
    padding-left: 180px;
}
.find-nav ul li{
	float: left;
    height: 34px;
    text-align: center;
    list-style: none;
}
.find-nav ul li a{	
    text-align: center;
	color: #fff;
    text-decoration: none;
    display: inline-block;
    height: 20px;
    padding: 0 13px;
    margin: 7px 17px 0;
    border-radius: 20px;
    line-height: 21px;
}
.find-nav ul li a:hover{
	background: #9B0909;
}
.current{
	background: #9B0909;
}
</style>