<template>
<div id="waper">
	<headTop :messgae='msg'></headTop>
	<div id="main">
	   <div id="banner">
	   		<Swipers :listImg='dataimg'></Swipers>
	   </div>
            <NavList></NavList> 
            <h3 class="theme">
                精选推荐
                <a href="javascript:;" class="iconfont icon-youjiantou crol"></a>
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
                                <p class="red"><span class="price">{{s.price}}</span> &nbsp;+  &nbsp;{{s.jifen}}积分</p>
                    		</div>
                    	</div>
                    </li>
                </ul>
            </div>
 
   </div>
  <Footer></Footer>
</div>

</template>
<script>
import headTop from'../../common/header'
import Swipers from'../../common/swiper'
import NavList from'../../common/nav'
import Footer from'../../common/footer'
	export default {
        beforeCreate(){
            this.axios.get('/user/1234555')
                  .then((response)=> {
                    this.data=response.data;
                    this.dataimg=response.img;
                  }).catch((error)=>{
                    alert('error')
                  });

        },			
	  data () {
	    return {
	    	dataimg:[],
	    	msg:'积分换',
	    	data:[]
	    	
	    }
	  },
	 methods:{
        godetail (id) {
            this.$router.push({ path: 'Detail', query: { id:id }})
        }
     },
	components:{
        headTop,
        Swipers,
        NavList,
        Footer
    }
    }
</script>
<style scoped>
	@import '../../../../static/css/integral.css';
</style>
