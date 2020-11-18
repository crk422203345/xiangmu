<template>
<div id="app">
    <div class="tou1">
    <i class="el-icon-s-home"></i
    >&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;商品&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;发布商品
    </div>
    <div>
    <div class="toubu5">
        <p>您当前选择的商品类别是:<span>数码 > 手机 > 三星</span></p>
    </div>
    <div class="meirong">
        <div class="nr">
        <ul>
            <li>数码</li>
            <li>服装</li>
            <li>鞋包配饰</li>
            <li>日用百货</li>
            <li>家居建材</li>
            <li>珠宝手表</li>
        </ul>
        </div>
        <div class="nr">
        <ul>
            <li>女装</li>
            <li>男装</li>
            <li>童装</li>
            <li>内衣</li>
            <li>裤子</li>
        </ul>
        </div>
        <div class="nr">
        <ul>
            <li>联想</li>
        </ul>
        </div>
    </div>
    <div class="anniou">
        <div>
        <el-button class="ad">发布商品</el-button>
        </div>
    </div>
    </div>
</div>
</template>
<script>
export default {
data() {
    return {};
}
};
</script>
<style scoped>
#app {
margin-left: 200px;
width: 100%;
}
.tou1 {
background: #f0f4f6;
color: #999999;
padding-top: 15px;
padding-bottom: 15px;
}
.tou1 i {
color: #56a8fd;
}
.meirong {
display: flex;
align-items: flex-start;
}
.toubu5 p {
color: #f8ac59;
border: solid 1px #f8ac59;
background: #fff4f0;
padding: 5px;
margin: 10px;
}
.toubu5 p span {
color: #1ab394;
}
.nr {
display: inline-block;
width: 300px;
height: 200px;
border: solid 1px #dfdfdf;
margin: 10px 5px 0px 10px;
padding: 10px;
}
.nr ul li {
margin: 5px;
}
.anniou {
margin-top: 40px;
text-align: center;
}
.ad {
background: #009688;
color: white;
}
</style>
