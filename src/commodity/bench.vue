<template>
  <div id="app">
    <div class="gzt">
      <i class="el-icon-s-home  lanse"></i>&nbsp;&nbsp;>>&nbsp;&nbsp;工作台
    </div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple1 biaoqian">
          <i class="el-icon-s-goods"></i>
          <span>0</span><br />
          <p>今日销售额</p>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple2 biaoqian">
          <i class="el-icon-s-order"></i>
          <span>0</span><br />
          <p>今日订单数</p>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple3 biaoqian">
          <i class="el-icon-s-claim"></i>
          <span>0</span><br />
          <p>出售商品数</p>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple4 biaoqian">
          <i class="el-icon-s-custom "></i>
          <span>0</span><br />
          <p>总会员数</p>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple daichuli">
          <p>待处理</p>
          <el-row :gutter="20">
            <el-col :span="4">
              <div class="grid-content bg-purple tbjuzhong">
                <ul>
                  <li class="el-icon-suitcase"></li>
                  <li>待发货</li>
                  <li>1059</li>
                </ul>
              </div>
            </el-col>
            <el-col :span="4" :offset="1">
              <div class="grid-content bg-purple tbjuzhong">
                <ul>
                  <li class="el-icon-bank-card"></li>
                  <li>待付款</li>
                  <li>1022</li>
                </ul>
              </div>
            </el-col>
            <el-col :span="4" :offset="1">
              <div class="grid-content bg-purple tbjuzhong">
                <ul>
                  <li class="el-icon-shopping-cart-1"></li>
                  <li>退货/退款</li>
                  <li>13</li>
                </ul>
              </div>
            </el-col>
            <el-col :span="4" :offset="1">
              <div class="grid-content bg-purple tbjuzhong">
                <ul>
                  <li class="el-icon-coin"></li>
                  <li>退货/退款</li>
                  <li>1</li>
                </ul>
              </div>
            </el-col>
            <el-col :span="4" :offset="1">
              <div class="grid-content bg-purple tbjuzhong">
                <ul>
                  <li class="el-icon-search"></li>
                  <li>商品咨询</li>
                  <li>68</li>
                </ul>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="grid-content bg-purple daichuli">
          <p>常用菜单</p>
          <el-row :gutter="20">
            <el-col :span="4">
              <div class="grid-content bg-purple nbj nbj1">
                <ul>
                  <li class="el-icon-s-claim"></li>
                  <li>待发货</li>
                </ul>
              </div>
            </el-col>
            <el-col :span="4" :offset="1">
              <div class="grid-content bg-purple nbj nbj2">
                <ul>
                  <li class="el-icon-picture"></li>
                  <li>待付款</li>
                </ul>
              </div>
            </el-col>
            <el-col :span="4" :offset="1">
              <div class="grid-content bg-purple nbj nbj3">
                <ul>
                  <li class="el-icon-s-goods"></li>
                  <li>退货/退款</li>
                </ul>
              </div>
            </el-col>
            <el-col :span="4" :offset="1">
              <div class="grid-content bg-purple nbj nbj4">
                <ul>
                  <li class="el-icon-coin"></li>
                  <li>退货/退款</li>
                </ul>
              </div>
            </el-col>
            <el-col :span="4" :offset="1">
              <div class="grid-content bg-purple nbj  nbj5">
                <ul>
                  <li class="el-icon-document"></li>
                  <li>商品咨询</li>
                </ul>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple rexiao">
          <div class="biankaun1">
            <p>热销商品</p>
            <div class="shijian">
              <el-button-group>
                <el-button type="primary" size="mini">月</el-button>
                <el-button type="primary" size="mini">年</el-button>
                <el-button type="primary" size="mini">总</el-button>
              </el-button-group>
            </div>
          </div>
          <template>
            <el-table :data="tableData" style="width: 100%" height="328px">
              <el-table-column prop="date" label="商品名称" width="360">
              </el-table-column>
              <el-table-column prop="name" label="分类" width="120">
              </el-table-column>
              <el-table-column prop="address" label="销量"> </el-table-column>
            </el-table>
          </template>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <img src="../img/9.png" alt="" width="1166" />
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple bianju2">
            <el-button type="primary">生成索引</el-button>
            <p>生成索引系统初始时必须生成索引。生成后可加快商品的搜索速度，减小访问数据库的压力。
              索引只需要生成一次即可。</p>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple bianju3">
          <div class="dibu1">
            <!-- <i class="el-icon-s-platform"></i> -->
            <img src="../img/10.png" alt="">
          </div>
          <div class="dibu2">
            <p><span>当前系统版本:</span> jspgou 单店版 5.0版</p>
            <p><span>最近登录时间:</span> 2018-07-29 15:18:30</p>
            <p><span>内存:</span> 已用 508MB&nbsp;&nbsp;&nbsp;&nbsp;<span>剩余 78MB</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>最大3531MB</span></p>
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
      tableData: [
        {
          date: "恋爱女王节妈咪版系列复古的灵感挑战你的高腰牛仔裤",
          name: "女装",
          address: "3"
        },
        {
          date: "【低价疯抢】Apple iPhone 6 32G",
          name: "三星",
          address: "1"
        },
        {
          date: "Apple iPad Air 2 平板电脑",
          name: "平板电脑",
          address: "1"
        }
      ]
    };
  }
};
</script>
<style scoped>
#app {
  width: 100%;
  margin-left: 200px;
  background: #f0f4f6;
}
.lanse {
  color: #2da3fb;
}
.gzt {
  color: #666666;
  margin-top: 20px;
  margin-bottom: 20px;
}
.biaoqian {
  padding: 15px;
}
.biaoqian i {
  font-size: 35px;
  color: white;
}
.biaoqian span {
  font-size: 30px;
  color: white;
  float: right;
}
.biaoqian p {
  color: white;
  margin-top: 5px;
  margin-left: 166px;
}
.daichuli p:nth-of-type(1) {
  padding: 15px;
  border-bottom: solid 1px #dfdfdf;
  margin-bottom: 30px;
}
.tbjuzhong ul li {
  text-align: center;
}
.tbjuzhong ul li:nth-of-type(1) {
  margin: 0px -1px 0px 26px;
  color: #c0d9ec;
  font-size: 26px;
}
.tbjuzhong ul li:nth-of-type(2) {
  font-size: 13px;
  color: #999;
  margin: 5px 0px 6px 0px;
}
.tbjuzhong ul li:nth-of-type(3) {
  font-size: 19px;
  font-weight: 400;
}
.nbj ul li:nth-of-type(1) {
  margin: 0px -1px 0px 12px;
  color: white;
  font-size: 26px;
  border-radius: 10px;
  padding: 15px;
}
.nbj1 ul li:nth-of-type(1) {
  background: #ffbe60;
}
.nbj2 ul li:nth-of-type(1) {
  background: #47d7e8;
}
.nbj3 ul li:nth-of-type(1) {
  background: #55de9f;
}
.nbj4 ul li:nth-of-type(1) {
  background: #fb99cc;
}
.nbj5 ul li:nth-of-type(1) {
  background: #87c0ea;
}

.nbj ul li:nth-of-type(2) {
  margin-top: 5px;
  color: #999999;
}
.nbj ul li {
  text-align: center;
}

.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: white;
  margin-bottom: 20px;
}
.bg-purple1 {
  background: #17d57e;
}
.bg-purple2 {
  background: #fec92b;
}
.bg-purple3 {
  background: #2da3fb;
}
.bg-purple4 {
  background: #c172d8;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.rexiao p {
  display: inline-block;
  padding: 15px;
}
.shijian {
  display: inline-block;
  padding: 15px;
  margin-left: 318px;
}
.biankaun1 {
  border-bottom: solid 1px #dfdfdf;
}
.bianju2{
  padding: 15px;
}
.bianju2 p{
  margin-top: 10px;
  font-size: 14px;  
  color: #666666;
}
.bianju3{
  padding: 15px;
}
.bianju3 i {
    font-size: 50px;
    border-radius: 5px;
    color: #aab2c2;
    background: #d8dce5;
    padding: 17px;
}
.dibu1{
  display: inline-block;
  width: 100px;
  height: 86px;
}
.dibu2{
    display: inline-block;
    width: 393px;
    height: 86px;
}
.dibu2 p{
  margin-top: 9px;
  font-size: 15px;
}
.dibu2 span:nth-of-type(1){
  color: #666666;
}
.dibu2 p:nth-of-type(3) span:nth-of-type(2){
  color: #1ab394;
}
.dibu2 p:nth-of-type(3) span:nth-of-type(3){
  color: #f8ac59;
}
</style>