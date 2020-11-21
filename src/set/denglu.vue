<template>
  <div id="app">
    <div class="tou1">
      <i class="el-icon-s-home"></i
      >&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;商品&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;第三方登录设置
    </div>
    <p class="tou2">
      第三方登录设置
    </p>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-light">
          <div class="toubu">
            <ul>
              <li>
                <p>
                  <span>QQ登陆</span>
                  <el-radio v-model="radio1" label="1">是</el-radio>
                  <el-radio v-model="radio1" label="2">否</el-radio>
                  <span>(为了安全起见，填写完成提交后，密钥不可见)</span>
                </p>
                <p>
                  <span>App Key</span>
                  <el-input
                    v-model="input1"
                    placeholder="请输入内容"
                    class="changdu"
                  ></el-input>

                  <span>App Secret</span>
                  <el-input
                    v-model="input2"
                    placeholder="请输入内容"
                    class="changdu"
                  ></el-input>
                </p>
              </li>
              <li>
                  <p>
                  <span>新浪微博登陆</span>
                  <el-radio v-model="radio2" label="3">是</el-radio>
                  <el-radio v-model="radio2" label="4">否</el-radio>
                  <span>(为了安全起见，填写完成提交后，密钥不可见)</span>
                </p>
                <p>
                  <span>App Key</span>
                  <el-input
                    v-model="input3"
                    placeholder="请输入内容"
                    class="changdu"
                  ></el-input>

                  <span>App Secret</span>
                  <el-input
                    v-model="input4"
                    placeholder="请输入内容"
                    class="changdu"
                  ></el-input>
                </p>
              </li>
              <li>
                  <p>
                  <span>微信登录</span>
                  <el-radio v-model="radio3" label="5">是</el-radio>
                  <el-radio v-model="radio3" label="6">否</el-radio>
                  <span>(为了安全起见，填写完成提交后，密钥不可见)</span>
                </p>
                <p>
                  <span>App Key</span>
                  <el-input
                    v-model="input5"
                    placeholder="请输入内容"
                    class="changdu"
                  ></el-input>

                  <span>App Secret</span>
                  <el-input
                    v-model="input6"
                    placeholder="请输入内容"
                    class="changdu"
                  ></el-input>
                </p>
              </li>
            </ul>
          </div>
          <div class="anniou">
            <el-button  class="anniou1">修改</el-button>
            <el-button  class="anniou2">重置</el-button>
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
      radio2: "3",
      radio3: "5",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: ""
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
}
.toubu ul li:nth-of-type(1) p:nth-of-type(1) span {
  margin: 0px 35px 0px 70px;
}
.toubu ul li:nth-of-type(1) p:nth-of-type(2) span:nth-of-type(1) {
  margin: 0px 34px 0px 63px;
}
.toubu ul li:nth-of-type(1) p:nth-of-type(2) span:nth-of-type(2) {
  margin: 0px 34px 0px 125px;
}
.toubu ul li:nth-of-type(1) p:nth-of-type(3) span {
  margin-right: 35px;
}






.toubu ul li:nth-of-type(2) p:nth-of-type(1) span {
  margin: 0px 35px 0px 31px;
}
.toubu ul li:nth-of-type(2) p:nth-of-type(2) span:nth-of-type(1) {
  margin: 0px 34px 0px 63px;
}
.toubu ul li:nth-of-type(2) p:nth-of-type(2) span:nth-of-type(2) {
  margin: 0px 34px 0px 125px;
}
.toubu ul li:nth-of-type(2) p:nth-of-type(3) span {
  margin-right: 35px;
}








.toubu ul li:nth-of-type(3) p:nth-of-type(1) span {
  margin: 0px 35px 0px 70px;
}
.toubu ul li:nth-of-type(3) p:nth-of-type(2) span:nth-of-type(1) {
  margin: 0px 34px 0px 63px;
}
.toubu ul li:nth-of-type(3) p:nth-of-type(2) span:nth-of-type(2) {
  margin: 0px 34px 0px 125px;
}
.toubu ul li:nth-of-type(3) p:nth-of-type(3) span {
  margin-right: 35px;
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
.changdu {
  width: 300px;
}
</style>
