<template>
  <div id="app">
    <div class="tou1">
      <i class="el-icon-s-home"></i
      >&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;商品&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;商品咨询
    </div>
    <p class="tou2">
      订单列表
    </p>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-light">
          <div class="toubu5">
            <span class="bianju3">
              咨询人:<el-input
                v-model="input6"
                placeholder=""
                class="changdu"
              ></el-input>
            </span>
            <span class="bianju3">
              咨询商品:<el-input
                v-model="input7"
                placeholder=""
                class="changdu"
              ></el-input>
            </span>
            <template>
              <div class="block1">
                <span class="demonstration">咨询时间:</span>
                <el-date-picker
                  v-model="value1"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                >
                </el-date-picker>
              </div>
            </template>
            <el-button class="tianjia">查询</el-button>
          </div>
          <div class="neirong">
            <template>
              <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange"
              >
                <el-table-column type="selection" width="100"></el-table-column>
                <el-table-column prop="id" label="ID" width="100" class="id">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="咨询时间"
                  width="203"
                  class="juzhong"
                >
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="咨询商品"
                  show-overflow-tooltip
                  width="460"
                >
                </el-table-column>
                <el-table-column
                  prop="jinxuan"
                  label="咨询人"
                  show-overflow-tooltip
                  width="165"
                >
                </el-table-column>
                <el-table-column
                  prop="chaozuo"
                  label="操作"
                  show-overflow-tooltip
                  width="160"
                >
                <router-link to="/workbench/reply">
                  <img src="../img/14.png" alt="" class="tupian12" />
                </router-link>
                  <el-button type="text" @click="open">
                    <img src="../img/13.png" alt=""/>
                  </el-button>
                </el-table-column>
              </el-table>
              <div style="margin-top: 20px" class="yanse5">
                <el-button>批量删除</el-button>
                <span
                  >每页显示<el-input
                    v-model="input5"
                    placeholder="请输入内容"
                    class="changdu"
                  ></el-input
                  >条,输入后按回车</span
                >
                <div class="block">
                  <el-pagination layout="prev, pager, next" :total="1000">
                  </el-pagination>
                </div>
              </div>
            </template>
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
      tableData: [
        {
          id: "27",
          name: "2018-07-27 18:31:39",
          address: "奥克斯（AUX）1.5匹 变频 冷暖电辅 二级能效 壁挂式空调",
          jinxuan: "test1"
        },
        {
          id: "27",
          name: "2018-07-27 18:31:39",
          address: "奥克斯（AUX）1.5匹 变频 冷暖电辅 二级能效 壁挂式空调",
          jinxuan: "test1"
        },
        {
          id: "27",
          name: "2018-07-27 18:31:39",
          address: "奥克斯（AUX）1.5匹 变频 冷暖电辅 二级能效 壁挂式空调",
          jinxuan: "test1"
        },
        {
          id: "27",
          name: "2018-07-27 18:31:39",
          address: "奥克斯（AUX）1.5匹 变频 冷暖电辅 二级能效 壁挂式空调",
          jinxuan: "test1"
        },
        {
          id: "27",
          name: "2018-07-27 18:31:39",
          address: "奥克斯（AUX）1.5匹 变频 冷暖电辅 二级能效 壁挂式空调",
          jinxuan: "test1"
        },
        {
          id: "27",
          name: "2018-07-27 18:31:39",
          address: "奥克斯（AUX）1.5匹 变频 冷暖电辅 二级能效 壁挂式空调",
          jinxuan: "test1"
        },
        {
          id: "27",
          name: "2018-07-27 18:31:39",
          address: "奥克斯（AUX）1.5匹 变频 冷暖电辅 二级能效 壁挂式空调",
          jinxuan: "test1"
        }
      ],
      multipleSelection: [],
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value1: "",
      value2: ""
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    handleClick() {
      alert("button click");
    },
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
    open() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
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
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-button--primary {
  background-color: white;
  color: #999999;
  border-color: #9999a6;
}
.toubu5 {
  padding: 15px;
  border: solid 1px #dfdfdf;
  border-left: none;
  color: #5f5f5f;
}
.bianju2 {
  margin-right: 10px;
}
.changdu {
  margin-left: 5px;
  width: 130px;
}

.chaxun {
  margin-left: 10px;
  background: #1ab394;
  color: white;
}
.tupian12 {
  margin-right: 10px;
}
.yanse5 {
  padding: 15px;
}
.yanse5 span {
  color: #999999;
  margin-left: 35px;
  font-size: 14px;
}
.yanse5 div {
  display: inline-block;
}
.tianjia {
  color: white;
  background: #1ab394;
  margin-left: 34px;
}
.yangse {
  color: #1ab394;
}
.changdu1 {
  width: 120px;
}
.neirong {
  border-right: solid 1px #dfdfdf;
  border-bottom: solid 1px #dfdfdf;
}
.juzhong {
  text-align: center;
}
.block {
  margin-left: 315px;
}
.block1 {
  display: inline-block;
  margin-left: 140px;
}
.bianju3 {
  margin-left: 35px;
}
</style>
