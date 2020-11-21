<template>
<div id="app">
<div class="tou1">
    <i class="el-icon-s-home"></i
    >&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;商品&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;邮箱设置
</div>
<p class="tou2">
    邮箱设置
</p>
<el-row>
    <el-col :span="24">
    <div class="grid-content bg-purple-light">
        <div class="toubu">
        <ul>
            <li>
            <span>*邮件服务器</span>
            <el-input
                v-model="input1"
                placeholder="请输入内容"
                class="chandu"
            ></el-input>
            <span>如：smtp.126.com</span>
            </li>
            <li>
            <span>*邮件编码</span>
            <el-input
                v-model="input2"
                placeholder="请输入内容"
                class="chandu"
            ></el-input>
            <span>一般使用UTF-8</span>
            </li>
            <li>
            <span>*邮件用户名</span>
            <el-input
                v-model="input3"
                placeholder="请输入内容"
                class="chandu"
            ></el-input>
            <span>如：example@126.com</span>
            </li>
            <li>
            <span>*发件人</span>
            <el-input
                v-model="input4"
                placeholder="请输入内容"
                class="chandu"
            ></el-input>
            <span>如：百年老店</span>
            </li>
            <li>
            <span>*邮件密码</span>
            <el-input
                v-model="input5"
                placeholder="请输入内容"
                class="chandu"
            ></el-input>
            </li>
            <li>
            <span>找回密码标题</span>
            <el-input
                v-model="input5"
                placeholder="请输入内容"
                class="chandu"
            ></el-input>
            <span>支持的标签: uid username resetKey resetPwd</span>
            </li>
            <li>
            <span>找回密码内容</span>
            <p><img src="../img/19.png" alt="" /></p>
            <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="textarea1"
                class="chandu3"
            >
            </el-input>
            </li>
            <li>
            <span>激活用户标题</span>
            <el-input
                v-model="input7"
                placeholder="请输入内容"
                class="chandu"
            ></el-input>
            <span>支持的标签: uid username resetKey resetPwd</span>
            </li>
            <li>
            <span>激活用户内容</span>
            <p><img src="../img/19.png" alt="" /></p>
            <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="textarea2"
                class="chandu3"
            >
            </el-input>
            </li>
        </ul>
        </div>
        <div class="anniou">
        <el-button class="anniou1">修改</el-button>
        <el-button class="anniou2">重置</el-button>
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
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    input7: "",
    textarea1: "",
    textarea2: ""
};
}
};
</script>
<style scoped>
.chandu3 {
margin-left: 175px;
width: 812px;
height: 200px;
border-top: none;
}
.toubu ul li span:nth-of-type(1) {
color: #666666;
}
.toubu ul li {
padding: 10px;
}
.toubu ul li:nth-of-type(1) span:nth-of-type(1) {
margin: 0px 20px 0px 70px;
}
.toubu ul li:nth-of-type(2) span:nth-of-type(1) {
margin: 0px 20px 0px 86px;
}
.toubu ul li:nth-of-type(3) span:nth-of-type(1) {
margin: 0px 20px 0px 70px;
}
.toubu ul li:nth-of-type(4) span:nth-of-type(1) {
margin: 0px 20px 0px 102px;
}
.toubu ul li:nth-of-type(5) span:nth-of-type(1) {
margin: 0px 20px 0px 86px;
}
.toubu ul li:nth-of-type(6) span:nth-of-type(1) {
margin: 0px 20px 0px 61px;
}
.toubu ul li:nth-of-type(7) span:nth-of-type(1) {
margin: 0px 20px 0px 59px;
}
.toubu ul li:nth-of-type(8) span:nth-of-type(1) {
margin: 0px 20px 0px 59px;
}
.toubu ul li:nth-of-type(9) span:nth-of-type(1) {
margin: 0px 20px 0px 59px;
}
.toubu ul li:nth-of-type(7) p {
display: inline-block;
width: 800px;
background: #f5f5f5;
padding: 5px;
border-radius: 5px 5px 0px 0px;
border: solid 1px #cccccc;
border-bottom: none;
}
.toubu ul li:nth-of-type(9) p {
display: inline-block;
width: 800px;
background: #f5f5f5;
padding: 5px;
border-radius: 5px 5px 0px 0px;
border: solid 1px #cccccc;
border-bottom: none;
}
.toubu ul li span:nth-of-type(2) {
color: #999999;
margin-left: 20px;
}
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
.anniou {
margin-top: 20px;
display: flex;
justify-content: center;
}
.anniou1 {
background: #1ab394;
color: white;
}
.chandu {
width: 300px;
}
.el-textarea__inner {
height: 300px;
}
</style>
