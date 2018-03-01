<template>
<div id="waper">
    <headTop :messgae='msg'></headTop>
    <div id="main">
       <div id="banner">
            <Swipers :listImg='dataimg'></Swipers>
       </div>
        <NavList></NavList>
                    <div class="goods">
                <div class="goods1">
                    <div class="goods1pic">
                        <img src="../../../../static/images/jiaju.jpg" alt="">
                        <div class="bgcover"></div>
                        <div class="goods1more">
                            <p>一直都很想入手的小家居</p>
                            <a href="jiaju.html">查看全部</a>
                        </div>
                    </div>
                     <div class="swiper-container swip">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="str in data " :data-id="str.id" @click='godetail(str.id)'>
                                    <img :src="str.imgurl" alt="">
                                    <p class="goodsname">{{str.name}}</p>
                                    <p class="price">{{str.price}}</p>
                                </div>
                                <div class="swiper-slide">
                                      <router-link class='more' to="./temple/integral.html">查看更多</router-link>
                                </div>
                            </div>
                        </div>
                </div>
                <div class="goods2">
                    <div class="goods1pic">
                        <img src="../../../../static/images/food.jpg" alt="">
                        <div class="bgcover"></div>
                        <div class="goods1more">
                            <p>好吃的好吃的好吃的</p>
                            <a href="jiaju.html">查看全部</a>
                        </div>
                    </div>
                     <div class="swiper-container swipe">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="str in data1 " :data-id="str.id" @click='godetail(str.id)'>
                                    <img :src="str.imgurl" alt="">
                                    <p class="goodsname">{{str.name}}</p>
                                    <p class="price">{{str.price}}</p>
                                </div>
                                <div class="swiper-slide">
                                      <router-link class='more' to="./temple/integral.html">查看更多</router-link>
                                </div>
                            </div>
                        </div>
                </div>
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
        this.axios.get('/user/12345557')
              .then(function(response) {
                this.data=response.data;
                this.dataimg=response.img;
              }).catch(function(error){
                alert('error')
              });

    },              
      data () {
        return {
            dataimg:[],
            msg:'实体店',
            data:[],
            data1:[]
            
        }
      },
        mounted() {
            console.log('mounted', this)
            const swiper = new Swiper('.swip', {
                pagination: '.swiper-pagination',
                slidesPerView: 2.2,
                paginationClickable: true,
                spaceBetween: 10,
                freeMode: true
            });
             const swiper1 = new Swiper('.swipe', {
                pagination: '.swiper-pagination',
                slidesPerView: 2.2,
                paginationClickable: true,
                spaceBetween: 10,
                freeMode: true
            });
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
    @import '../../../../static/css/shop.css';
</style>