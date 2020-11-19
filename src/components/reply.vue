<template>
<div id="app">
<div class="tou1">
    <i class="el-icon-s-home"></i
    >&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;商品&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;商品管理&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;商品咨询回复
</div>
<p class="tou2">
    商品咨询回复
</p>
<el-row>
    <el-col :span="24">
    <div class="grid-content bg-purple-light">
        <div class="neirong">
            <div class="mingcheng">
                <ul>
                    <li>商品名称:</li>
                    <li>咨询内容:</li>
                    <li>回复咨询:</li>
                </ul>
            </div>
            <div class="shurukaung">
                <ul>
                    <li>奥克斯（AUX）1.5匹 变频 冷暖电辅 二级能效 壁挂式空调</li>
                    <li>
                        <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="textarea1">
                        </el-input>
                    </li>
                    <li>
                        <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="textarea2">
                        </el-input>
                    </li>
                </ul>
            </div>
        </div>
        <div class="anniou">
            <el-button class="yanse">回复</el-button>
            <el-button >重置</el-button>
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
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
        input8: '',
        input9: '',
        input10: '',
        textarea1:'',
        textarea2:''
        }
    }
}
</script>
<style scoped>
.neirong{
    display: flex;
    align-items:flex-start; 
}
.mingcheng{
    display: inline-block;
    width: 150px;
    margin-left: 50px;
    margin-top: 20px;
    color: #666666;
    display: flex;
    justify-content:flex-end;
}
.mingcheng ul li{
   padding: 10px;
}
.mingcheng ul li:nth-of-type(2){
   margin-top: 10px;
}
.mingcheng ul li:nth-of-type(3){
   margin-top: 180px;
}

.shurukaung{
    display: inline-block;
    width: 900px;
    margin-top: 20px;
}
.shurukaung ul li{
    padding: 10px;
}
.changdu{
    width: 300px;
}
.yanse{
    color: white;
    background: #1ab394;
    border: none;
}
.anniou{
    margin-top: 20px;
    text-align: center;
}
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
</style>
