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
                  <el-button plain class="anniou1">修改</el-button>
                  <el-button plain class="anniou2">重置</el-button>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="公众号设置" name="second">
          <div class="toubu5"></div>
          <div>
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection" width="55"> </el-table-column>
              <el-table-column label="日期" width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="120">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址"
                show-overflow-tooltip
              >
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="自定义回复" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="默认回复  " name="fourth">定时任务补偿</el-tab-pane>
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
      activeName: "second",
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
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
  }
</script>
<style scoped>
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
</style>

// data() {
//     return {
      // textarea: "",
      // input1: "",
      // input2: "",
      // input3: "",
      // activeName: "second"
//     };
//   },
//   methods: {
    // handleClick(tab, event) {
    //   console.log(tab, event);
    // }
//   }