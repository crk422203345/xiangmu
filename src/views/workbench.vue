<template>
  <div>
    <Header></Header>
    <el-container style="margin-top: 91px;">
      <el-aside width="200px" style="background-color: #545c64">
        <el-menu
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          unique-opened
          router
        >
          <el-submenu index="1">
            <template slot="title">
              首页
            </template>
            <el-menu-item-group>
              <el-menu-item index="/workbench/bench" >
                工作台
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              商品
            </template>
            <el-menu-item-group>
              <el-menu-item index="/workbench/shangpin">商品管理</el-menu-item>
              <el-menu-item index="1-2">发布商品</el-menu-item>
              <el-menu-item index="/workbench/fenlei">分类管理</el-menu-item>
              <el-menu-item index="/workbench/pinpai">品牌管理</el-menu-item>
              <el-menu-item index="/workbench/guige">规格管理</el-menu-item>
              <el-menu-item index="/workbench/leixing">类型管理</el-menu-item>
              <el-menu-item index="/workbench/zixuen">商品咨询</el-menu-item>
              <el-menu-item index="/workbench/pingjia">商品评价</el-menu-item>
              <el-menu-item index="/workbench/rexiao">热销商品</el-menu-item>
              <el-menu-item index="/workbench/kucuen">库存预警</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              订单
            </template>
            <el-menu-item-group>
              <el-menu-item index="/workbench/dingdan">订单管理</el-menu-item>
              <el-menu-item index="/workbench/dayin">打印快递单</el-menu-item>
              <el-menu-item index="/workbench/fahuo">发货信息管理</el-menu-item>
              <el-menu-item index="/workbench/tuihuo">退货/退款订单</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              运营
            </template>
            <el-menu-item-group>
              <el-menu-item index="/workbench/guanliyuan">管理员</el-menu-item>
              <el-menu-item index="/workbench/juese">角色管理</el-menu-item>
              <el-menu-item index="/workbench/guanggao1">广告版位</el-menu-item>
              <el-menu-item index="/workbench/guanggao2">广告管理</el-menu-item>
              <el-menu-item index="/workbench/youhuijuan">优惠劵</el-menu-item>
              <el-menu-item index="/workbench/kefu">在线客服</el-menu-item>
              <el-menu-item index="/workbench/haibao">首页海报</el-menu-item>
              <el-menu-item index="/workbench/caozuo">操作系统日志</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              用户
            </template>
            <el-menu-item-group>
              <el-menu-item index="/workbench/yonghu1">用户管理</el-menu-item>
              <el-menu-item index="/workbench/dengji">用户等级</el-menu-item>
              <el-menu-item index="/workbench/zidian">数据字典</el-menu-item>
              <el-menu-item index="/workbench/zidianleixing">字典类型</el-menu-item>
              <el-menu-item index="/workbench/zhanneixin">站内信</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              界面
            </template>
            <el-menu-item-group>
              <el-menu-item index="/workbench/lanmu">栏目</el-menu-item>
              <el-menu-item index="/workbench/wenzhang">文章</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              设置
            </template>
            <el-menu-item-group>
              <el-menu-item index="/workbench/quanju">全局设置</el-menu-item>
              <el-menu-item index="/workbench/jichu">基本设置</el-menu-item>
              <el-menu-item index="/workbench/youxiang">邮箱设置</el-menu-item>
              <el-menu-item index="/workbench/dandian">单点登录设置</el-menu-item>
              <el-menu-item index="/workbench/denglu">第三方登录设置</el-menu-item>
              <el-menu-item index="/workbench/zhifu">支付插件</el-menu-item>
              <el-menu-item index="/workbench/gonzhonghao">公众号设置</el-menu-item>
              <el-menu-item index="/workbench/peisong">配送方式</el-menu-item>
              <el-menu-item index="/workbench/zhanghu">API接口账户管理</el-menu-item>
              <el-menu-item index="/workbench/jiekou">API接口信息</el-menu-item>
              <el-menu-item index="/workbench/jilu">API接口调用记录</el-menu-item>
              <el-menu-item index="/workbench/ftp">FTP管理</el-menu-item>
              <el-menu-item index="/workbench/wuliou">物流公司</el-menu-item>
              <el-menu-item index="/workbench/quyu">区域管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </el-container>
  </div>
</template>

<script>
import Header from "../components/head.vue";
export default {
  name: "workbench",
  components: {
    Header
  }
};
</script>
<style scoped>
.el-header {
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
  position: fixed;
  top: 91px;
  left: 0px;
  height: 535px;
}
element.style {
  height: 500px;
  border: 1px solid rgb(238, 238, 238);
  position: absolute;
  top: 90px;
}
.el-main {
  display: block;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -ms-flex-preferred-size: auto;
  flex-basis: auto;
  overflow: auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 20px;
  width: 1162px;
}
.el-submenu__title {
  font-size: 14px;
  color: #303133;
  padding: 0 20px;
  cursor: pointer;
  -webkit-transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 200px;
}
.el-menu-item-group__title {
  padding: 7px 0 7px 20px;
  line-height: normal;
  font-size: 12px;
  color: #909399;
  width: 200px;
  display: none;
}

element.style {
  width: 200px;
  background-color: rgb(84, 92, 100);
  position: fixed;
  left: 0px;
}
.el-submenu {
  list-style: none;
  margin: 0;
  padding-left: 0;
  width: 200px;
}
</style>
