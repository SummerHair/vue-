<template>
  <div id="top">
   		<bx>
	   		<div class="logo">
				<h1><a href="#"></a></h1>
			</div>
			<ul id="nav">
				<li v-for="nav in navs">
					<router-link :to='{path:nav.url}'>{{nav.message}}</router-link>
				</li> 	
			</ul>
			<div class="funtion">
					<input type="text" name="" id="" placeholder="搜索音乐或者音乐人"/>
					<a href="#" class="sptg">视频投稿</a>
			</div>
			<div class="sign">
				  <a href="#">登录</a>
				  <div class="signshow">
				  	<ul>
				  		<li>
				  			<a href="#">手机号登录</a>
				  		</li>
				  		<li>
				  			<a href="#">网易账号登录</a>
				  		</li>
				  		<li>
				  			<a href="#">微信登录</a>
				  		</li>
				  		<li>
				  			<a href="#">微博登录</a>
				  		</li>
				  		<li>
				  			<a href="#">手机QQ登录</a>
				  		</li>
				  		<li>
				  			<a href="#">邮箱登录</a>
				  		</li>
				  	</ul>
				  </div>
			</div>
   		</bx>
  </div>
  
</template>
<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import bx from './bx'
import find from './find'
import friend from './friend'

export default {
  name: 'top',
  components: {
    bx
  },
  data () {
		 return {
			navs: [
	      { message: '发现音乐',url:'/find' },
	      { message: '我的音乐' ,url:'/my'},
	      { message: '朋友' ,url:'/friend'},
	      { message: '商城' ,url:'/city'},
	      { message: '音乐人' ,url:'/people'},
	      { message: '下载客户端' ,url:'/download'},
	    ]
		 }
	},
	
}

</script>

<style>
*{
	margin: 0;
	padding: 0;
}
html,body{
	font-size: 12px;
	font-family: "微软雅黑";
}
#top{
	position: relative;
    z-index: 1000;
    height: 70px;
    box-sizing: border-box;
    background: #242424;
    border-bottom: 1px solid #000;
}
.logo{
	float: left;
    width: 176px;
    height: 69px;
    background: url(../../static/topbar.png);
    background-position: 0 0;
}
h1{
	float: left;
    width: 157px;
    height: 100%;
    padding-right: 20px;
    text-indent: -9999px;
}
#nav{
	float: left;
}
#nav li{
	position: relative;
    background-position: right -300px;
    float: left;
    height: 70px;
    font-size: 14px;
    list-style:none;
}
#nav li a{
    text-decoration: none;
    color: #fff;
    padding: 0 19px;
    text-align: center;
    line-height: 70px;
}
.funtion{
	overflow: hidden;
	height: 100%;
	float: left;
	margin-left: 55px;
}
.funtion input{
	  height: 30px;
    border-radius: 30px;
    padding-left: 15px;
    margin-top: 20px;
    outline: none;
    border: none;
}
.funtion .sptg{
		display: inline-block;
    width: 90px;
    height: 32px;
    margin: 19px 0 0 12px;
    box-sizing: border-box;
    padding-left: 32px;
    line-height: 33px;
    color: #ccc;
    background: url(../../static/topbar.png);
    background-position: 0 -140px;
   	font-size: 12px;
    zoom: 1;
    text-decoration: none;
}
.sign{
	  float: right;
    height: 45px;
    margin: 20px 0 0 20px;
    padding: 0 22px 0 0;
    background: url(../../static/topbar.png);
    background-position: right -46px;
    position: relative;
    zoom: 1;
}
.sign>a{
	  display: block;
    width: 28px;
    margin-top: 10px;
    color: #787878;
    text-decoration: none;
}
.signshow{
	  position: absolute;
    top: 38px;
    right: -43px;
    width: 158px;
    background: #2b2b2b;
    border: 1px solid #202020;
    box-shadow: 0 8px 24px 0 rgba(0,0,0,0.50);
    border-radius: 4px;
    z-index: 111;
    display: none;
}
.signshow ul li{
	list-style: none;
	width: 100%;
	height: 38px;
	line-height: 38px;
	text-align: center;
}
.signshow ul li a{
	color: #ccc;
	text-decoration: none;
}
</style>
