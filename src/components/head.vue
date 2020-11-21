<template>
  <div id="app">
    <div class="toubu">
      <h1>商城后台管理系统</h1>
      <el-button type="primary" size="small" class="anniou" round>
        单店版
      </el-button>
      <img src="../img/2.jpg" alt="" width="50" height="50" />
      <span class="yanse">Test</span>
      <i class="el-icon-s-tools tubiao1" @click="Click"></i>
      <i class="el-icon-close tibiao2" @click="tuicu">退出</i>
    </div>
    <div class="xiougai" v-show="message">
      <p>旧密码</p>
      <el-input placeholder="请输入密码" v-model="input1" show-password></el-input>
      <p>新密码</p>
      <el-input placeholder="请输入密码" v-model="input2" show-password></el-input>
      <p>确定新密码</p>
      <el-input placeholder="请输入密码" v-model="input3" show-password></el-input>
    </div>
  </div>
</template>

<script>
export default {
  name:"Header",
  data(){
    return {
      message: false,
      input1: '',
      input2: '',
      input3: ''
    };
  },
  methods: {
    tuicu: function() {
      this.$message({
        message: "退出成功",
        type: "success"
      });
      this.$router.push("/");
    }
    ,
    Click: function() {
      this.message = !this.message;
    }
  }
};
</script>

<style scoped>
.toubu {
  width: 97%;
  position: absolute;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  align-items: flex-start;
}
.anniou {
  margin-top: 7px;
  margin-left: 14px;
}
.toubu img {
  border-radius: 50%;
  margin-left: 50%;
}

.el-icon-s-tools:before {
  content: "\E7AC";
  font-size: 45px;
}
.toubu i {
  color: #787878;
  margin-left: 2%;
}
.toubu i:nth-of-type(2) {
  margin-top: 12px;
}
.yanse {
  color: #787878;
  margin-top: 12px;
  margin-left: 2%;
}
.xiougai {
    width: 350px;
    height: 532px;
    margin-top: -2px;
    border: solid 1px #dfdfdf;
    position: fixed;
    background: white;
    right: 0px;
    z-index: 5;
}
.el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 80%;
    margin-left: 10%;
}
.xiougai p{
  margin-left: 10%;
  padding:10px 0px 10px 0px;
}
.toubu{
  background: white;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 99;
}
</style>
