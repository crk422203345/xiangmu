<template>
  <div id="app">
    <div class="tou1">
      <i class="el-icon-s-home"></i
      >&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;商品&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;基本设置
    </div>
    <p class="tou2">
      基本设置
    </p>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-light">
          <div class="toubu">
            <ul>
              <li>
                <span>*网站名称</span>
                <el-input
                  v-model="input1"
                  placeholder="请输入内容"
                  class="chandu"
                ></el-input>
              </li>
              <li>
                <span>*网站域名</span>
                <el-input
                  v-model="input2"
                  placeholder="请输入内容"
                  class="chandu"
                ></el-input>
              </li>
              <li>
                <span>根域名</span>
                <el-input
                  v-model="input3"
                  placeholder="请输入内容"
                  class="chandu"
                ></el-input>
                <span>如域名为www.youzhifang.net，则填写youzhifang.net</span>
              </li>
              <li>
                <span>使用相对路径</span>
                <el-radio v-model="radio1" label="1">是</el-radio>
                <el-radio v-model="radio1" label="2">否</el-radio>
                <span>有多个站点或开启远程附件时，不能使用相对路径</span>
              </li>
              <li>
                <span>*访问后缀</span>
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    class="chandu"
                  >
                  </el-option>
                </el-select>
              </li>
              <li>
                <span>*前台本地化</span>
                <el-input
                  v-model="input4"
                  placeholder="请输入内容"
                  class="chandu"
                ></el-input>
              </li>
              <li>
                <span>激活用户标题</span>
                <el-input
                  v-model="input5"
                  placeholder="请输入内容"
                  class="chandu"
                ></el-input>
              </li>
              <li>
                <span>使用相对路径</span>
                <el-radio v-model="radio2" label="1">是</el-radio>
                <el-radio v-model="radio2" label="2">否</el-radio>
              </li>
              <li>
                <span>使用相对路径</span>
                <el-radio v-model="radio3" label="1">是</el-radio>
                <el-radio v-model="radio3" label="2">否</el-radio>
              </li>
            </ul>
          </div>
          <div class="anniou">
            <el-button plain class="anniou1">修改</el-button>
            <el-button plain class="anniou2">重置</el-button>
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
      textarea2: "",
      radio1: "1",
      radio2: "1",
      radio3: "1",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
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
  margin: 0px 20px 0px 70px;
}
.toubu ul li:nth-of-type(3) span:nth-of-type(1) {
  margin: 0px 20px 0px 93px;
}
.toubu ul li:nth-of-type(4) span:nth-of-type(1) {
  margin: 0px 20px 0px 44px;
}
.toubu ul li:nth-of-type(5) span:nth-of-type(1) {
  margin: 0px 20px 0px 70px;
}
.toubu ul li:nth-of-type(6) span:nth-of-type(1) {
  margin: 0px 20px 0px 54px;
}
.toubu ul li:nth-of-type(7) span:nth-of-type(1) {
  margin: 0px 20px 0px 45px;
}
.toubu ul li:nth-of-type(8) span:nth-of-type(1) {
  margin: 0px 20px 0px 45px;
}
.toubu ul li:nth-of-type(9) span:nth-of-type(1) {
  margin: 0px 20px 0px 45px;
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
