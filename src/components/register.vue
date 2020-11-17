<template>
  <div id="quan">
    <div class="denglu">
      <div>
        <h1>商城后台管理系统</h1>
        <el-button type="primary" class="primary">单店版</el-button>
      </div>
      <div class="srk">
        <el-input
          placeholder="请输入用户名"
          v-model="input1"
          clearable
          class="name"
          @keyup.enter.native="run()"
        ></el-input>

        <el-input
          placeholder="请输入密码"
          v-model="input2"
          show-password
          class="password"
          @keyup.enter.native="run()"
        ></el-input>
        <br />
        <button class="an" @click="run()" @keyup.enter.native="run()">登录</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input1: "",
      input2: "",
      name: "admin",
      password: "123"
    };
  },
  methods: {
    run: function() {
      if (this.input1 == "" || this.input1 == null) {
        this.$message({
          message: "警告哦，请输入用户名",
          type: "warning"
        });
      } else if (this.input2 == "" || this.input2 == null) {
        this.$message({
          message: "警告哦，请输入密码",
          type: "warning"
        });
      } else if (this.input != this.name && this.input2 != this.password) {
        this.$message.error("错了哦，用户名或密码错误");
      } else {
        this.$message({
          message: "恭喜你，登录成功",
          type: "success"
        });
        this.$router.push({path:'/workbench/bench'});
      }
    }
  }
};
</script>
<style>
#quan {
  width: 100%;
  height: 100%;
  background: #26bd9e;
  display: flex;
  align-items: center;
  justify-content: center;
}
.denglu {
  width: 40%;
  height: 60%;
  background: white;
  border-radius: 5px;
}
.denglu div:nth-of-type(1) {
  margin-top: 5px;
  font-size: 16px;
  display: flex;
  align-items: flex-start;
  font-weight: 100;
  justify-content: center;
  margin-top: 20px;
}
.primary {
  margin-left: 30px;
  margin-top: 3px;
}
.name {
  width: 70%;
}
.password {
  margin-top: 20px;
  width: 70%;
}
.srk {
  margin-top: 50px;
  margin-left: 125px;
}
.an {
  margin-top: 20px;
  width: 70%;
  color: white;
  background: #26bd9e;
  outline: none;
  border: none;
  border-radius: 2px;
  padding: 10px;
}
</style>
