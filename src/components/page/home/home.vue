<template>
<div id="waper">
	<headTop :messgae='msg'></headTop>
	<div id="main">
	   <div id="banner">
	   		<Swipers :listImg='dataimg'></Swipers>
	   </div>
	      <div id="goods">
            <div class="activity">
                <div class="activity-left">
                 <router-link to="./temple/integral.html"> <img src="../../../../static/images/jifen.jpg" alt=""></router-link>
                </div>
                <div class="activity-right">
                    <div class="r-top">
                          <router-link to="./temple/integral.html"> <img src="../../../../static/images/shop.jpg" alt=""></router-link>
                    </div>
                    <div class="r-bottom">
   						<router-link to="./temple/integral.html"> <img src="../../../../static/images/mianfei.jpg" alt=""></router-link>
                    </div>

                </div>
            </div>
            <h3 class="theme">
                人气热卖
                <a href="javascript:;" class="iconfont icon-youjiantou crol"></a>
            </h3>
            <ul class="goods-list">
                <li v-for='item in data'>
                	<div class="clos" v-for='s in item' :data-id='s.id' @click='godetail(s.id)'>
                		<div class="pic">
                			   <img :src="s.imgurl" alt="">
                		</div>
                		<div class="goods-detail">
                			<p class="goodsname">{{s.name}}</p>
                            <p class="price">{{s.price}}</p>
                            <p class="gift">
                                <span><em class="liwu"></em>{{s.liwu}} </span>
                                <span><em class="jifen"></em>{{s.jifen}}</span>
                            </p>
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
import Footer from'../../common/footer'
	export default {
        beforeCreate(){
            this.axios.get('/user/12345')
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
	    	msg:'首页',
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
        Footer
    }
    }
</script>
<style scoped>
	@import '../../../../static/css/index.css';
</style>
