<template>
	<div id="banner">
		 <el-carousel :interval="5000" arrow="always" @change="change" class="banner">
		    <el-carousel-item v-for="(item,index) in imglist" >
		      <img :src='item.src' alt="" >
		    </el-carousel-item>
		  </el-carousel>
      <div class="content">
          <bx>
          <div class="content-left">
            <div class="title">
              <a href="#" class="title-name">热门推荐</a>
              <ul>
                <li>
                  <a href="#">华语</a>
                </li>
                <li>
                  <a href="#">流行</a>
                </li>
                <li>
                  <a href="#">摇滚</a>
                </li>
                <li>
                  <a href="#">民谣</a>
                </li>
                <li>
                  <a href="#">电子</a>
                </li>
              </ul>
                  <span>更多</span>
                </div>
                <div class="left-list">
                  <ul>
                    <li v-for="item in hot">
                      <a href="#">
                        <img :src='item.img' alt="">
                        <p>{{item.say}}</p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="guanggao">
                  <a href="#">
                    <img :src="guanggao" alt="">
                  </a>
                </div>
                <div class="title">
                  <a href="#" class="title-name">新歌上架</a>
                  <span>更多</span>
                </div>
                <div class='new-sing'>
                  <ul>
                    <li v-for="item in hot">
                      <a href="#">
                        <img :src='item.img' alt="">
                        <p>{{item.say}}</p>
                      </a>
                    </li>
                  </ul>
                  <i class="el-icon-arrow-left pre"></i>
                  <i class="el-icon-arrow-right next"></i>
                </div>
                <div class="title">
                  <a href="#" class="title-name">榜单</a>
                  <span>更多</span>
                </div>
                <div class='ranking-list'>
                    <div v-for="item in bd">
                      <div class="ranking-list-li">
                      <div class="ranking-left">
                          <a href="#"><img :src="item.img" alt=""></a>
                        </div>
                       <div class="ranking-right">
                          <a href="#">
                          <p class="ranking-right-title">{{item.name}}</p>
                          <p class="ranking-right-btn"><i class="el-icon-caret-right"></i>
                            <i class="el-icon-star-off"></i>
                          </p>
                        </a>
                       </div>
                    </div>
                    <ul class="ranking-list-ul" >
                      <li class="list-li" v-for="item in rankinglist" @click="bf(item.id)">
                        <div class="list-li-div">
                          <a href="javascript:void(0)">
                            <span>{{item.xh}}</span>
                          <span :id="item.id">{{item.name}}</span>
                          </a>
                        </div>
                        <span>
                          <i class="el-icon-caret-right"></i>
                          <i class="el-icon-plus"></i>
                          <i class="el-icon-star-off"></i>
                        </span>
                      </li>
                    </ul>
                    <div class="more">
                      <a href="#">查看全部</a>
                    </div>
                    </div>
                </div>
          </div>
          </bx>
         </div>
	</div>

</template>

<script>
import bx from './bx'
	export default {
		name:"recommend",
    components: {
    bx
  },
    data () {
      return {
         imglist : [
          {src:'../static/1.jpg'},
          {src:'../static/2.jpg'},
          {src:'../static/3.jpg'},
          {src:'../static/4.jpg'},
        ],
        hot :[
        {img:'/static/hot1.jpg',id:33756016,say:'风虽大，绕过你的世界,为什么你结婚'},
        {img:'/static/hot2.jpg',id:28892408,say:'风虽大，绕过你的世界，IDE名字'},
        {img:'/static/hot3.jpg',id:5434331,say:'风虽大，绕过你的世界，你的名字'},
        {img:'/static/hot4.jpg',id:5469289,say:'风虽大，绕过你的世界，拯救世界'},
        {img:'/static/hot5.jpg',id:378625,say:'风虽大，绕过你的世界，农夫山泉'},
        {img:'/static/hot6.jpg',id:499091,say:'风虽大，绕过你的世界'},
        {img:'/static/hot7.jpg',id:5383219,say:'风虽大，绕过你的世界'},
        {img:'/static/hot8.jpg',id:5469640,say:'风虽大，绕过你的世界'}
      ] ,
      guanggao:'/static/ad.bid.jpg',
      rankinglist :[
        {id:512727331,name:'没忘',xh:1},
        {id:27867140,name:'房间',xh:2},
        {id:479408220,name:'凉凉',xh:3},
        {id:33756016,name:'明天,你好',xh:4},
        {id:5337854,name:'春天',xh:5},
        {id:109125,name:'夏天',xh:6},
        {id:28860654,name:'秋天',xh:7},
        {id:5554072,name:'冬天',xh:8},
        {id:349082,name:'南山南',xh:9},
        {id:235144,name:'董小姐',xh:10},
      ],
      bd :[
        {name:'云音乐飙升榜',img:'../static/ranking3.jpg'},
        {name:'云音乐新歌榜',img:'../static/ranking2.jpg'},
        {name:'云音乐原创榜',img:'../static/ranking1.jpg'}
      ]
      }
    },
    methods:{
      change:function(index){
        var banner = document.getElementById('banner')
        setTimeout(function(){
           switch(index)
            {
            case 0:
              banner.style.backgroundImage='url("/static/1.1.jpg")'
              break;
            case 1:
              banner.style.backgroundImage='url("/static/2.1.jpg")'
              break;
            case 2:
              banner.style.backgroundImage='url("/static/3.1.jpg")'
              break;
            case 3:
              banner.style.backgroundImage='url("/static/4.1.jpg")'
              break;
            }
        },305)
      },
      bf:function(index){
        this.$axios.post('https://api.imjad.cn/cloudmusic/?type=song&id='+index+'&br='+128000+'')
          .then(function (response) {
            console.log(response.data.data[0].url)
          })
          .catch(function (error) {
            console.log(你失败了);
          });
      }
    }
	}
</script>

<style>
#banner{
  background: url("/static/1.1.jpg");
  background-repeat: repeat-x;
}
.banner{
  width: 730px;
  margin: 0 auto;
}
.content{
  background-color: #f2f2f2;
  height: 100%;
  min-height: 100%;
}
.content-left{
  background-color: #fff;
  padding: 20px 20px 40px;
  font-size: 12px;
    color: #333;
    width: 729px;
}
.title{
  height: 33px;
    padding: 0 10px 0 34px;
    border-bottom: 2px solid #C10D0C;
    background: url("/static/index.png") no-repeat ;
    background-position: -225px -156px;
}
.title-name{
  float: left;
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
}
.title ul{
  float: left;
  margin: 7px 0 0 20px;
}
.title ul li{
  float: left;
  margin-right: 10px;
}
.title>a{
  color: #333;
}
.title ul li a{
  color: #666;
}
.title span{
  float: right;
  margin-top: 9px;
  cursor: pointer;
}
.left-list{
  width: 100%;
  overflow:hidden;
}
.left-list>ul>li{
  margin:10px 12.5px 0;
  float: left;
  width: calc(25% - 25px);
  height: 204px;
}
.left-list>ul>li>a{
  display: block;
}
.left-list>ul>li>a>img{
  margin: 0 auto;
}
.left-list>ul>li>a>p{
  width: 140px;
  color: #333;
  font-size: 14px;
}
.guanggao{
  margin: 0 0 35px;
}
.new-sing{
  position: relative;
    zoom: 1;
    height: 200px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
    background: #f5f5f5;
    overflow: hidden;
}
.new-sing ul{
  width: 10000px;
  height: 100%;
  position: absolute;
  left: 0;
}
.new-sing ul li{
  width: 150px;
  float: left;
  margin-left: 20px;
  margin-top: 13px;
}
.pre,.next{
  position: absolute;
  font-size: 30px;
    top: 50%;
    margin-top: -30px;
    cursor: pointer;
}
.pre{
  left: -6px;
}
.next{
  right: -8px;
}
.ranking-list{
  overflow: hidden;
  padding-top: 20px;
}
.ranking-list>ul{
  width: 100%;
  float: left;
}
.ranking-list-ul li:nth-child(odd){
  background-color: rgb(232,232,232);
}
.ranking-list-ul li:nth-child(even){
  background-color: rgb(244,244,244);
}
.ranking-list-li{
    width: 100%;
      height: 120px;
    padding: 20px 0 0 20px;
    background-color: rgb(244,244,244);
}
.ranking-left{
    float: left;
    width: 80px;
    height: 80px;
}
.ranking-left a{
  display: block;
}
.ranking-left a img{
  display: block;
  width: 100%;
  height: 100%;
}
.ranking-right{
    float: left;
    width: 116px;
    margin: 6px 0 0 10px;
}
.ranking-right a{
  display: block;
}
.ranking-right-title{
  font-size: 14px;
  color: #333;
  font-weight: bolder;
}
.ranking-list>div{
  width: 33.33%;
  float: left;
  border:1px solid #e5e5e5;
}
.ranking-right-btn{
  font-size: 20px;
  color: #666;
  margin-top: 5px;
}
.list-li{
  height: 32px;
  line-height: 32px;
  position: relative;
}
.list-li-div{
    float: left;
    margin-left: 35px;
    width: 170px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}
.list-li-div>a{
  color: #333;
}
.list-li>span{
  position: absolute;
  font-size: 14px;
  right: 30px;
}
.list-li>span>i{
  margin-right: 10px;
  cursor: pointer;
}
.more{
  width: 100%;
  font-size:14px;
  text-align: right;
  height: 32px;
  line-height: 32px;
  background-color: rgb(232,232,232);
  padding-right: 10px;
}
.more a{
  color: #333;
}
</style>