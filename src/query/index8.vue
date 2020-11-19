<template>
<div id="app">
<div class="tou1">
    <i class="el-icon-s-home"></i
    >&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;商品&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;商品管理&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;修改商品
</div>
<p class="tou2">
    修改商品
</p>
<el-row>
    <el-col :span="24">
    <div class="grid-content bg-purple-light">
        <div class="neirong">
            <div class="mingcheng">
                <ul>
                    <li>ID</li>
                    <li>订单编号</li>
                    <li>订单编号</li>
                    <li>物流编号</li>
                    <li>是否已打印快递面单</li>
                </ul>
            </div>
            <div class="shurukaung">
                <ul>
                    <li><el-input class="changdu" v-model="input1" placeholder="请输入内容"></el-input></li>
                    <li><el-input class="changdu" v-model="input2" placeholder="请输入内容"></el-input></li>
                    <li><el-input class="changdu" v-model="input3" placeholder="请输入内容"></el-input></li>
                    <li><el-input class="changdu" v-model="input4" placeholder="请输入内容"></el-input></li>
                    <li><el-input class="changdu" v-model="input5" placeholder="请输入内容"></el-input></li>
                </ul>
            </div>
        </div>
        <div class="anniou">
            <el-button class="yanse">修改</el-button>
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
        input10: ''
        }
    }
}
</script>
<style scoped>
.neirong{
    display: flex;
    align-items:center; 
    
}
.mingcheng{
    display: inline-block;
    width: 200px;
    margin-left: 50px;
    display: flex;
    justify-content:flex-end;
    margin-top: 20px;
    color: #666666;
}
.mingcheng ul li{
    display: flex;
    justify-content:flex-end;
    padding: 20px 20px 19px 1px;
}

.shurukaung{
    display: inline-block;
    width: 600px;
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
