<template>
<div id="waper">
	 <Swipers :listImg='dataimg'></Swipers>
          <div id="article">
         <div class="row">
             <p class="goodsname">{{names}}</p>
             <p class="price">{{prices}}</p>
         </div>
         <div class="row1">
             <p class="p1">
                 <em class="tag">买赠</em>
                 <span>可领取<i>{{lipings}}</i>元礼品</span>
             </p>
             <p class="p2">
                 <em class="tag1">积分</em>
                 <span>购买获得<i>{{jifens}}</i>积分</span>
             </p>
         </div>
        <group class='smq'> 
          <cell :title="1" is-link></cell>
          <cell :title="2" :value="demo4" is-link @click.native="showPopup=true"></cell>
        </group>
        <div v-transfer-dom>
          <popup v-model="showPopup" class="checker-popup">
            <div style="padding:10px 10px 40px 10px; height:300px;z-index:99;">
              <panel  :list="listss" ></panel>
              <div>
                <p style="padding: 5px 5px 5px 2px;color:#888;">规格</p>
                <checker
                 v-model="demo4"
                default-item-class="demo5-item"
                 selected-item-class="demo5-item-selected"
                 disabled-item-class="demo4-item-disabled">
                   <checker-item v-for='k in kinds' :value="k" :key='k.id'>{{k}}</checker-item>
                 </checker>  
              </div>
                  <group class='nm'>
                    <x-number title="title" v-model="value" :min='0' button-style="colro:#333;"></x-number>
                  </group>
              <button class="btn" @click="onItemClick">确&nbsp;&nbsp;&nbsp;&nbsp;定</button>   
            </div>
          </popup>
        </div>
         <h3 class="theme">
            图文详情
         </h3>
           <div v-for="src in list" style="background-color:yellow;text-align:center;">
             <span style="font-size:20px;">Loading</span>
                <x-img :src="src" :webp-src="`${src}?type=webp`" @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
            </div>
     </div>
     <div id="footer">
        <p class="p4"><img src="../../../../static/images/b5.png" alt=""></p>
        <a class="p5" href="javascript:;"@click='addcart'>加入购物车</a>
        <a class="p6" href="javascript:;">立即购买</a>
    </div>
</div>

</template>
<script>
import Swipers from'../../common/swiper'
import { XImg,Cell,Group,Checker,CheckerItem,TransferDom,Popup,Panel,XNumber } from 'vux'
	export default {
	data () {
	    return {
	    	dataimg:[
	    	
	    	],
            names:'',
            prices:'',
            jifens:'',
            lipings:'',
            demo4:'',
            showPopup:false,
            value:0,
            list: [
           
            ],
            kinds:[],
            listss: []
	    	
	    }
	},
    beforeCreate(){
      this.axios.post('/detail/123455',{
          id: this.$route.query.id
       }).then(function(response) {
            this.data=response.data;
            this.msg=response.head;
            this.names=response.names;
            this.prices=response.prices;
            this.jifens=response.jifens;
            this.lipings=response.lipings;
            this.demo4=response.demo4;
            this.kinds=response.kinds;
            this.listss=response.listss;
            this.list=response.list;
          }).catch(function(error){
            alert('error')
          });

    },
    methods: {
     onItemClick (value, disabled) {
      console.log(value, disabled)
      if (!this.disabled) {
        this.showPopup = false
      }
     },
     success (src, ele) {
          console.log('success load', src)
          const span = ele.parentNode.querySelector('span')
          ele.parentNode.removeChild(span)
     },
     error (src, ele, msg) {
          console.log('error load', msg, src)
          const span = ele.parentNode.querySelector('span')
          span.innerText = 'load error'
     },
     addcart(){
       console.log(this.demo4); 
     }
    },
    directives: {
      TransferDom
    },
	components:{
        Swipers,
        XImg,
        Cell,
        Group,
        Checker,
        CheckerItem,
        Popup,
        Panel,
        XNumber
    }
    }
</script>
<style scoped>
@import '../../../../static/css/goods-detail.css';
i{
    font-style: normal;
}
#waper{
    margin-top: 0;
}
.ximg-demo {
  width: 100%;
  height: auto;
}
.ximg-error {
  background-color: yellow;
}
.ximg-error::after {
  content: '加载失败';
  color: red;
}
.demo4-item {
  background-color: #ddd;
  color: #222;
  font-size: 14px;
  padding: 5px 10px;
  margin-right: 10px;
  line-height: 18px;
  border-radius: 15px;
}
.demo4-item-selected {
  background-color: #FF3B3B;
  color: #fff;
}
.demo4-item-disabled {
  color: #999;
}
.demo5-item {
  padding: 0 10px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-right: 6px;
  margin-bottom: 6px;
}
.demo5-item-selected {
background: #ffffff url(../../../../static/images/active.png) no-repeat right bottom; 
  border-color: #ff4a00;
}
.vux-popup-dialog{
    background: #fff;
}
.nm svg{
    color:#333!import;
}
.vux-no-group-title{
    margin-top:0px;
}
.smq .vux-no-group-title{
    margin-top: 0px;
}
</style>