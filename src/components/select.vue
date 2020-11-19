<template>
<div id="app">
<div class="tou1">
    <i class="el-icon-s-home"></i
    >&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;商品&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;打印快递单&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;查看发货信信息
</div>
<p class="tou2">
    查看发货信信息
</p>
<el-row>
    <el-col :span="24">
    <div class="grid-content bg-purple-light">
        <div class="neirong">
            <div class="mingcheng">
                <ul>
                    <li>订单编号</li>
                    <li>收货人姓名</li>
                    <li>收货人固定电话</li>
                    <li>收货人地址</li>
                    <li>物流单号</li>
                    <li>操作员</li>
                    <li>支付状态</li>
                    <li>收货人手机号</li>
                    <li>收货人邮编</li>
                    <li>金额</li>
                    <li>备注</li>
                </ul>
            </div>
            <div class="shurukaung">
                <ul>
                    <li>1492674091791</li>
                    <li>admin</li>
                    <li>18673056904</li>
                    <li>北京市-通州区-中仓街道-6号</li>
                    <li>861492587823613</li>
                    <li>admin</li>
                    <li>已支付</li>
                    <li>1356481521</li>
                    <li>111111</li>
                    <li>0</li>
                    <li>易碎物品小心运送</li>
                </ul>
            </div>
        </div>
        <!-- <div class="anniou">
            <el-button class="yanse">修改</el-button>
            <el-button >重置</el-button>
        </div>   -->
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
    /* border: solid 1px; */
}
.mingcheng ul li{
    display: flex;
    justify-content:flex-end;
    padding: 10px;
}

.shurukaung{
    display: inline-block;
    width: 600px;
    /* border: solid 1px; */
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
