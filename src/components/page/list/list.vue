<template>
<div id="waper">
	<headTop :messgae='msg'><slot class="iconfont icon-fanhui"></slot></headTop>
	<div id="main">
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

</template>
<script>
import headTop from'../../common/header'
	export default {
        beforeCreate(){
            this.axios.post('/user/123455',{
            	id: this.$route.query.id
            }).then(function(response) {
                    this.data=response.data;
                    this.msg=response.head;
                  }).catch(function(error){
                    alert('error')
                  });

        },			
	  data () {
	    return {
	    	msg:'',
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
    }
    }
</script>
<style scoped>
	@import '../../../../static/css/index.css';
	#waper{
		margin-bottom:0;
	}
</style>