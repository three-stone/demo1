<template>
<div id="waper">
	<headTop :messgae='msg'></headTop>
	<div id="main">
	<div class="nothing"  v-if='nothing'>
        <img src="../../../../static/images/nothing.png" alt="">
        一件商品都没有呢~
    </div>
	 <swipeout v-else>
	 	 <swipeout-item :threshold=".5" underlay-color="#ccc" v-for="(item,index) in datalist" :key='item.id'>
	        <div slot="right-menu">
	          <swipeout-button  background-color="#3cc51f">收藏</swipeout-button>
	          <swipeout-button @click.native="onButtonClick(index)" background-color="#e60012">删除</swipeout-button>
	        </div>
	        <div slot="content" class="demo-content vux-1px-tb " style='padding-left: 10px;
    border-bottom: 1px solid #e9e9e9;'>
	     		<span class="text">
	     			<em :class="{'chose add-bg':item.active,'chose':!item.active}"  @click='chose(index)'></em> 
	     			<input type="checkbox" class="none">
	     		</span>
	     		<div class="shopping-list-right">
	     			<div class="goods-pic">
	     				<img src="../../../../static/images/list31.jpg">
	     			</div>
	     			<div class="goods-details">
	     				<p class="goodsname">{{item.goodsname}}</p>
	     				<p class="style">{{item.style}}</p>
	     				<p class="price">{{item.price}}</p>
	     			</div>
	     			<p class="goods-nums">x <span>{{item.num}}</span></p>
	     		</div>
	        </div>
        </swipeout-item>
     </swipeout>
     <div class="recommend">
	      <h3 class="theme">
	                精选推荐
	        </h3>
	        <div class="bg">
	            <ul class="goods-list">
	                <li v-for='item in data'>
	                	<div class="clos" v-for='s in item' :data-id='s.id' @click='godetail(s.id)'>
	                		<div class="pic">
	                			   <img :src="s.imgurl" alt="">
	                		</div>
	                		<div class="goods-detail">
	                			<p class="goodsname">{{s.name}}</p>
	                            <p class="red"><span class="price">{{s.price}}</span></p>
	                		</div>
	                	</div>
	                </li>
	            </ul>
	        </div>
	 </div>       
   </div>
  <Footer></Footer>
</div>

</template>
<script>
import headTop from'../../common/header'
import Footer from'../../common/footer'
import {Swipeout, SwipeoutItem, SwipeoutButton,Checklist } from 'vux'
	export default {
	  beforeCreate(){
        this.axios.get('/user/1234555')
              .then(function(response) {
                this.data=response.data;
                this.dataimg=response.img;
                this.datalist=response.list;
              }).catch(function(error){
                alert('error')
              });

      },		
	  data () {
	    return {
	    	dataimg:[],
	    	msg:'购物车',
	    	nothing:false,
	    	datalist:[],
	    	data:[]
	    }
	  },
	  methods:{
	  	    onButtonClick (index) {
	  	    this.axios.get('/dell/1234555')
              .then(function(response) {
              		if(response=='ok'){
              			this.datalist.splice(index,1);				
						if(this.datalist.length==0){
							this.nothing=true;
						}
              		}
              }).catch(function(error){
                alert('error')
              });

            },
            change (val, label) {
		      console.log('change', val, label)
		    },
		    chose(index){
		    	this.datalist[index].active=!this.datalist[index].active
		    },
		     godetail (id) {
            	this.$router.push({ path: 'Detail', query: { id:id }})
       		 }
	  },
	  components:{
        headTop,
        Footer,
        Swipeout,
	    SwipeoutItem,
	    SwipeoutButton,
	    Checklist
      }
    }
</script>
<style scoped>
	@import '../../../../static/css/integral.css';
.text {
	    width: 10%;
	    /* display: inline-block; */
	    margin-right: 10px;
	    padding: 0;
	    line-height: 140px;
	    position: relative;
	}
	.shopping-list-right {
    width: 90%;
    float: right;
    padding: 10px 0;
}
	.shopping-list-right .goods-pic {
    width: 37%;
    height: 120px;
        float: left;
}
.chose {
    position: absolute;
    left: 0;
    top: -0px;
    display: inline-block;
    height: 20px;
    width: 20px;
    border: 1px solid #ccc;
    border-radius: 50%;
}
.none {
    display: none;
}

.goods-details {
    padding: 10px 0;
    margin-left: 10px;
    width: 49%;
    float: left;
}
.goodsname {
    height: 26px;
    width: 100%;
    font-size: 0.7rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.style {
    height: 54px;
    color: #666;
    font-size: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.price {
    color: #e60012;
}
.goods-nums {
    float: right;
    color: #666;
    line-height: 120px;
    width: 10%;
}
.add-bg {
    border: none;
    background: url(../../../../static/images/chose-bg.png) no-repeat 0 0;
    background-size: cover;
}
.recommend {
    padding: 10px 0;
    background: #f5f5f5;
}
.nothing img {
    width: 80px;
    margin: 0 auto;
    display: block;

}
.nothing {
    text-align: center;
    padding: 20px 0;
    line-height: 40px;
    color: #666666;
}
</style>