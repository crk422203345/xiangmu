<template>
  <div id="app">
    <div class="tou1">
      <i class="el-icon-s-home"></i
      >&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;商品&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;API接口账户管理
    </div>
    <p class="tou2">
      <span>公众号设置</span>
      <span>自定义菜单</span>
      <span>自定义回复</span>
      <span>默认回复</span>
    </p>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-light">
          <div class="toubu">
            <p>
              <span>App Key</span>
              <el-input v-model="input1" placeholder="wxd3c98c697cc40add" class="changdu"></el-input>
            </p>
            <p>
              <span>App Secret</span>
              <el-input v-model="input2" placeholder="v54wscXDoENwRsiI44ELCkhN25awUd1fBybFrlrUF01" class="changdu"></el-input>
            </p>
            <p>
              <span>App Token</span>
              <el-input v-model="input3" placeholder="livenot12" class="changdu"></el-input>
            </p>
            <p>
              <span>活动说明</span>
              <el-input
                type="textarea"
                :rows="2"
                placeholder="你好！欢迎来到单店商城后台管理系统！"
                v-model="textarea"
                class="changdu"
              >
              </el-input>
            </p>
            <p>
                <span>微信二维码</span>
                <img src="../img/18.png" alt="">
            </p>
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
      textarea: '',
      input1:'',
      input2:'',
      input3:''
    }
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
.toubu p{
  color: rgb(102, 102, 102);
    padding: 15px;
}
.changdu{
    width: 300px;
}
.toubu p:nth-of-type(1) span{
  margin: 0 0 0 0;
}
</style>
