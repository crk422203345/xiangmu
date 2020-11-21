<template>
  <div id="app">
    <div class="tou1">
      <i class="el-icon-s-home"></i
      >&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;商品&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;API接口账户管理
    </div>
    <p class="tou2">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="公众号设置" name="first" class="beijing">
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple-light">
                <div class="toubu">
                  <p>
                    <span>App Key</span>
                    <el-input
                      v-model="input1"
                      placeholder="wxd3c98c697cc40add"
                      class="changdu"
                    ></el-input>
                  </p>
                  <p>
                    <span>App Secret</span>
                    <el-input
                      v-model="input2"
                      placeholder="v54wscXDoENwRsiI44ELCkhN25awUd1fBybFrlrUF01"
                      class="changdu"
                    ></el-input>
                  </p>
                  <p>
                    <span>App Token</span>
                    <el-input
                      v-model="input3"
                      placeholder="livenot12"
                      class="changdu"
                    ></el-input>
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
                    <img src="../img/18.png" alt="" />
                  </p>
                </div>
                <div class="anniou">
                  <el-button  class="anniou1">修改</el-button>
                  <el-button  class="anniou2">重置</el-button>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="公众号设置" name="second">
          <div class="toubu5">
            <el-button class="el-icon-plus yanse">添加自定义菜单</el-button>
          </div>
          <div>
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection" width="55"> </el-table-column>
              <el-table-column label="ID" width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column prop="name" label="菜单名称" width="800">
              </el-table-column>
              <el-table-column
                prop="address"
                label="操作"
                show-overflow-tooltip
                width="200"
              >
                <img src="../img/14.png" alt="" />
                <img src="../img/12.png" alt="" class="juli" />
                <img src="../img/13.png" alt="" />
              </el-table-column>
            </el-table>
            <div style="margin-top: 20px" class="bkjl">
              <el-button>同步到微信菜单</el-button>
              <el-button>批量删除</el-button>
              <span
                >每页显示<el-input
                  v-model="input4"
                  placeholder="请输入内容"
                  class="changdu1"
                ></el-input
                >条,输入后按回车</span
              >
              <div class="block">
                <el-pagination layout="prev, pager, next" :total="50">
                </el-pagination>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="自定义回复" name="third">
          <div class="toubu5">
            <el-button class="el-icon-plus yanse">添加自定义回复</el-button>
          </div>
          <div>
            <el-table
              ref="multipleTable"
              :data="tableData1"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection" width="55"> </el-table-column>
              <el-table-column label="ID" width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column prop="name" label="菜单名称" width="400">
              </el-table-column>
              <el-table-column prop="hello" label="关键字" width="400">
              </el-table-column>
              <el-table-column
                prop="address"
                label="操作"
                show-overflow-tooltip
                width="200"
              >
                <img src="../img/14.png" alt="" />
                <img src="../img/12.png" alt="" class="juli" />
                <img src="../img/13.png" alt="" />
              </el-table-column>
            </el-table>
            <div style="margin-top: 20px" class="bkjl">
              <el-button>同步到微信菜单</el-button>
              <el-button>批量删除</el-button>
              <span
                >每页显示<el-input
                  v-model="input4"
                  placeholder="请输入内容"
                  class="changdu1"
                ></el-input
                >条,输入后按回车</span
              >
              <div class="block">
                <el-pagination layout="prev, pager, next" :total="50">
                </el-pagination>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="默认回复  " name="fourth">
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple-light">
                <div class="neirong">
                  <div class="mingcheng">
                    <ul>
                      <li>消息类型</li>
                      <li>*标题</li>
                      <li>内容</li>
                    </ul>
                  </div>
                  <div class="shurukaung">
                    <ul>
                      <li>
                        <el-select v-model="value" placeholder="请选择">
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          >
                          </el-option>
                        </el-select>
                      </li>
                      <li>
                        <el-input
                          class="changdu"
                          v-model="input9"
                          placeholder="请输入内容"
                        ></el-input>
                      </li>
                      <li>
                        <el-input
                          type="textarea"
                          :rows="2"
                          placeholder="请输入内容"
                          v-model="textarea"
                        >
                        </el-input>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="anniou">
                  <el-button class="yanse">提价</el-button>
                  <el-button>重置</el-button>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      textarea: "",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input8: "",
      input9: "",
      input10: "",
      activeName: "second",
      textarea: '',
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
      value: "",
      tableData: [
        {
          date: "1",
          name: "欢迎您",
          hello: "hello"
        },
        {
          date: "1",
          name: "欢迎您",
          hello: "hello"
        },
        {
          date: "1",
          name: "欢迎您",
          hello: "hello"
        },
        {
          date: "1",
          name: "欢迎您",
          hello: "hello"
        },
        {
          date: "1",
          name: "欢迎您",
          hello: "hello"
        },
        {
          date: "1",
          name: "欢迎您",
          hello: "hello"
        },
        {
          date: "1",
          name: "欢迎您",
          hello: "hello"
        }
      ],
      multipleSelection: [],
      tableData1: [
        {
          date: "1",
          name: "欢迎您",
          hello: "hello",
          hello: "hello"
        },
        {
          date: "1",
          name: "欢迎您",
          hello: "hello"
        },
        {
          date: "1",
          name: "欢迎您",
          hello: "hello"
        },
        {
          date: "1",
          name: "欢迎您",
          hello: "hello"
        },
        {
          date: "1",
          name: "欢迎您",
          hello: "hello"
        },
        {
          date: "1",
          name: "欢迎您",
          hello: "hello"
        },
        {
          date: "1",
          name: "欢迎您",
          hello: "hello"
        }
      ],
      multipleSelection: []
    };
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style scoped>
.bkjl span {
  margin-left: 20px;
  margin-right: 263px;
}
.changdu1 {
  width: 200px;
}
.block {
  display: inline-block;
}
.juli {
  margin-left: 10px;
  margin-right: 10px;
}
.toubu5 {
  padding: 20px;
}
.yanse {
  color: white;
  background: #1ab394;
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
  /* background: #eceff1; */
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
.toubu p:nth-of-type(1) span {
  margin: 0px 35px 0px 20px;
}
.toubu p:nth-of-type(2) span {
  margin-right: 35px;
}
.toubu p:nth-of-type(3) span {
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
.toubu {
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
.neirong {
  display: flex;
  align-items: flex-start;
}
.mingcheng {
  display: inline-block;
  width: 200px;
  margin-left: 50px;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  color: #666666;
}
.mingcheng ul li {
  display: flex;
  justify-content: flex-end;
  padding: 20px 20px 19px 1px;
}

.shurukaung {
  display: inline-block;
  width: 600px;
  margin-top: 20px;
}
.shurukaung ul li {
  padding: 10px;
}
.changdu {
  width: 300px;
}
.yanse {
  color: white;
  background: #1ab394;
  border: none;
}
.anniou {
  margin-top: 20px;
  text-align: center;
}
</style>
