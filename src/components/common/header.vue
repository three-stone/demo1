<template>
	<header>
		<h6>{{messgae}}</h6>
	</header>
</template>
<script>
	export default {
		 props: ['messgae'],
	}
</script>
<style>
header{
    position: fixed;
    top: 0;
    width: 100%;
    height:50px;

    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    border-bottom:1px solid #e9e9e9;
    background: #fff;
    z-index: 1000;
}
header h6{
    color:#333;
    font-size:0.8rem;
}
header .icon-sousuo{
    color:#666;
    position: absolute;
    right: 20px;
    font-size: 1.6rem;
    top:12px;
}
</style>