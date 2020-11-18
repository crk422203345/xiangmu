<template>
<div id="app">
<div class="tou1">
    <i class="el-icon-s-home"></i
    >&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;商品&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;单点登录设置
</div>
<p class="tou2">
    单点登录设置
</p>
<el-row>
    <el-col :span="24">
    <div class="grid-content bg-purple-light">
        <div class="toubu">
        <ul>
            <li>
            <p>
                <span>是否开启单点认证</span>
                <el-radio v-model="radio1" label="1">是</el-radio>
                <el-radio v-model="radio1" label="2">否</el-radio>
            </p>
            <p>
                <span>认证地址</span
                ><el-input
                v-model="input1"
                placeholder="请输入内容"
                class="changdu"
                ></el-input>
                <el-button type="danger">删除</el-button>
            </p>
            <p>
                <el-input
                v-model="input1"
                placeholder="请输入内容"
                class="changdu"
                ></el-input>
                <el-button type="danger">删除</el-button>
            </p>
            <p>
                <el-input
                v-model="input1"
                placeholder="请输入内容"
                class="changdu"
                ></el-input>
                <el-button type="danger">删除</el-button>
            </p>
            <p>
                <el-button type="warning">添加</el-button>
            </p>
            </li>
        </ul>
        </div>
        <div class="anniou">
        <el-button plain class="anniou1">修改</el-button>
        <el-button plain class="anniou2">重置</el-button>
        </div>
    </div>
    </el-col>
</el-row>
</div>
</template>
<script>
export default {
data() {
return {
    radio1: "1",
    input1: "",
    input2: "",
    input3: ""
};
}
};
</script>
<style scoped>
#app {
margin-left: 200px;
width: 100%;
background: #f0f4f6;
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
.tou2 {
background: #eceff1;
padding: 15px;
font-size: 14px;
}
.el-row {
margin-bottom: 20px;
}

.bg-purple {
background: white;
padding: 15px;
}
.bg-purple-light {
background: white;
}
.grid-content {
min-height: 36px;
}
.tou2 span {
margin-right: 20px;
}
.tou2 span:not(:nth-of-type(1)) {
color: #999;
}
.toubu p {
color: rgb(102, 102, 102);
padding: 15px;
}
.changdu {
width: 300px;
margin-right: 20px;
}
.toubu ul li:nth-of-type(1) p:nth-of-type(1) span {
margin: 0px 35px 0px 70px;
}
.toubu ul li:nth-of-type(1) p:nth-of-type(2) span:nth-of-type(1) {
margin: 0px 34px 0px 134px;
}
.toubu ul li:nth-of-type(1) p:nth-of-type(2) span:nth-of-type(2) {
margin: 0px 34px 0px 125px;
}
.toubu ul li:nth-of-type(1) p:nth-of-type(3) span {
margin-right: 35px;
}
.toubu ul li:nth-of-type(1) p{
    margin-left: 20px;
}
.toubu ul li:nth-of-type(1) p:nth-of-type(3){
    margin-left: 251px;
    
}
.toubu ul li:nth-of-type(1) p:nth-of-type(4){
    margin-left: 251px;
}
.toubu ul li:nth-of-type(1) p:nth-of-type(5){
    margin-left: 251px;
}
.toubu p:nth-of-type(4) {
display: flex;
align-items: flex-start;
}
.toubu p:nth-of-type(4) span {
margin: 0px 35px 0px 18px;
}
.toubu p:nth-of-type(5) {
display: flex;
align-items: flex-start;
}
.toubu p:nth-of-type(5) span {
margin: 0px 20px 0px 18px;
}
.toubu ul li {
border-bottom: dotted 1px #999;
}
.anniou {
margin-top: 20px;
display: flex;
justify-content: center;
}
.anniou1 {
background: #1ab394;
color: white;
}
</style>
