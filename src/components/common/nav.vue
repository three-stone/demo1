<template>
    <div class="nav">
        <ul class="nav-list">
               <li v-for='navlist in navlists' :key='navlist.id' @click='golist(navlist.id)' >
                   <a href="javascript:;" >{{navlist.name}}<span :class="navlist.n"></span></a> 
               </li>
        </ul>
    </div> 
</template>
<script>
	export default {
		 data(){
            return{
            navlists:[
                {id:1,n:'icon1',name:'珠宝首饰'},
                {id:2,n:'icon2',name:'保健礼品'},
                {id:3,n:'icon3',name:'食品饮酒'},
                {id:4,n:'icon4',name:'居家生活'},
                {id:5,n:'icon5',name:'母婴玩具'},
                {id:6,n:'icon6',name:'美容护理'},
                {id:7,n:'icon7',name:'数码家电'},
                {id:8,n:'icon8',name:'服饰配件'}
            ],
            }
         },
         methods:{
            golist(id){
                this.$router.push({ path: 'List', query: { id:id }})
            }
         }
	}
</script>
<style>
.nav,.nav-list{
    width: 100%;
}
.nav{
    padding: 10px 0;
    background: #f5f5f5;
}
.nav-list{
    height: 156px;
    padding: 10px 0;
    background: #fff;
}
.nav-list li{
    width: 25%;
    float: left;
    text-align: center;
    background: #fff;
}
.nav-list li a{
    display: flex;
    flex-flow: column-reverse;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 0.6rem;
}
.nav-list li a span{
    display: inline-block;
    height: 40px;
    width: 40px;
    background: url("../../../static/images/nav-bg.png") no-repeat 4px 6px ;
    background-size: cover;

}
.nav-list li a .icon2{
    background-position:6px -30px ;
}
.nav-list li a .icon3{
    background-position:0px -68px ;
}
.nav-list li a .icon4{
    background-position:4px -106px ;
}
.nav-list li a .icon5{
    background-position:6px -149px ;
}
.nav-list li a .icon6{
    background-position:4px -191px ;
}
.nav-list li a .icon7{
    background-position:0px -230px ;
}
.nav-list li a .icon8{
    background-position:4px -272px ;
}
</style>