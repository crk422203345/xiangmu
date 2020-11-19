<template>
  <div id="app">
    <div class="tou1">
      <i class="el-icon-s-home"></i
      >&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;商品&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;打印快递单
    </div>
    <p class="tou2">
      订单列表
    </p>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-light">
          <div class="toubu5">
            <div class="xiaola">
              <el-select v-model="value6" placeholder="选择快递单模板">
                <el-option
                  v-for="item in options5"
                  :key="item.value6"
                  :label="item.label4"
                  :value="item.value6"
                >
                </el-option>
              </el-select>

              <el-select v-model="value3" placeholder="全部订单">
                <el-option
                  v-for="item in options1"
                  :key="item.value3"
                  :label="item.label1"
                  :value="item.value3"
                >
                </el-option>
              </el-select>
            </div>
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
                  prop="name1"
                  label="订单编号"
                  width="200"
                  class="juzhong"
                >
                </el-table-column>

                <el-table-column
                  prop="name2"
                  label="订单编号"
                  width="235"
                  class="juzhong"
                >
                </el-table-column>
                <el-table-column
                  prop="name3"
                  label="物流编号"
                  width="200"
                  class="juzhong"
                >
                </el-table-column>
                <el-table-column
                  prop="name4"
                  label="是否已打印快递面单"
                  width="200"
                  class="juzhong"
                >
                </el-table-column>
                <el-table-column
                  prop="chaozuo"
                  label="操作"
                  show-overflow-tooltip
                  width="145"
                >
                <el-button type="text" @click="open">
                    <img src="../img/13.png" alt="" class="tupian12"/>
                </el-button>
                <router-link to="/workbench/select">
                  <img src="../img/15.png" alt="" />
                </router-link>
                </el-table-column>
              </el-table>
              <div style="margin-top: 20px" class="yanse5">
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
                <div class="bianju5">
                  <el-button :plain="true" @click="open3">打印订单运单</el-button>
                  <el-button>标记为已打印</el-button>
                  <el-button>标记为未打印</el-button>
                  <el-button>批量删除</el-button>
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
          id: "2",
          name1: "1492674091791",
          name2: "861492587823613",
          name3: "未打印",
          name4: "admin"
        },
        {
          id: "2",
          name1: "1492674091791",
          name2: "861492587823613",
          name3: "未打印",
          name4: "admin"
        },
        {
          id: "2",
          name1: "1492674091791",
          name2: "861492587823613",
          name3: "未打印",
          name4: "admin"
        },
        {
          id: "2",
          name1: "1492674091791",
          name2: "861492587823613",
          name3: "未打印",
          name4: "admin"
        },
        {
          id: "2",
          name1: "1492674091791",
          name2: "861492587823613",
          name3: "未打印",
          name4: "admin"
        },
        {
          id: "2",
          name1: "1492674091791",
          name2: "861492587823613",
          name3: "未打印",
          name4: "admin"
        },
        {
          id: "2",
          name1: "1492674091791",
          name2: "861492587823613",
          name3: "未打印",
          name4: "admin"
        }
      ],
      multipleSelection: [],

      options5: [
        {
          value6: "选项1",
          label4: "选择快递单模板"
        },
        {
          value6: "选项2",
          label4: "测试"
        },
        {
          value6: "选项3",
          label4: "圆通快递"
        },
        {
          value6: "选项4",
          label4: "顺丰快递"
        },
        {
          value6: "选项5",
          label4: "测试物流"
        }
      ],
      value6: "",

      options1: [
        {
          value3: "选项1",
          label1: "全部订单"
        },
        {
          value3: "选项2",
          label1: "已打印"
        },
        {
          value3: "选项3",
          label1: "未打印"
        }
      ],
      value3: ""
    };
  },
  methods: {
    open3() {
      this.$message({
        showClose: true,
        message: "请选择需要打印的快递的快递运单模板",
        type: "warning"
      });
    },
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
  width: 200px;
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
  margin-left: 10px;
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
  margin-left: 340px;
}
.block1 {
  display: inline-block;
  margin-left: 40px;
}
.bianju3 {
  margin-left: 35px;
}
.el-select {
  display: inline-block;
  position: relative;
  width: 150px;
  margin-right: 15px;
}
.xiaola {
  padding-bottom: 15px;
}
.bianju5{
    padding:15px 15px 0 0;
}
</style>
