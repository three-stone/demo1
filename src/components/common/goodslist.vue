<template>
    <ul class="goods-list">
        <li v-for='item in data'>
            <div class="clos" v-for='s in item' :data-id='s.id'>
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
</template>
<script>
	export default {
		 props: ['data'],
	}
</script>
<style>
.price{
    color:#e60012;
}
#goods{
    background: #f5f5f5;
    padding-bottom: 10px;
}
.goods-list{
    padding-left:10px;
    background: #fff;
    padding-bottom: 1px;
}
.goods-list li {
    display: flex;
    width: 100%;
    margin-bottom: 10px;

}
.goods-list li img{
    width: 100%;
}
.clos{
    margin-right: 10px;
    border: 1px solid #ebebeb;
    border-radius: 8px;
    padding-bottom: 10px;
    display: block;
    overflow: hidden;
}
.clos p{
    width: 100%;
    line-height: 20px;
    text-align: center;
}

.clos .price{
    font-size: 0.8rem;
}

.none{
    display: none;
}
#list{
    margin-top: 50px;
    padding-top:10px ;
}
#list .clos p{
    width: auto;
    text-align: left;
    padding: 0 10px;
}
</style>