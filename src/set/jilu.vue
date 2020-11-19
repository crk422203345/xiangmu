<template>
  <div id="app">
    <div class="tou1">
      <i class="el-icon-s-home"></i
      >&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;商品&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;api接口调用记录
    </div>
    <p class="tou2">
      api接口调用记录列表
    </p>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-light">
          <!-- <div class="toubu5">
            <el-button class="el-icon-plus tianjia">添加FTP管理</el-button>
          </div> -->
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
                <el-table-column
                  prop="id"
                  label="ID"
                  width="100"
                  class="juzhong"
                >
                </el-table-column>
                <el-table-column
                  prop="name1"
                  label="API接口信息"
                  width="150"
                  class="juzhong"
                >
                </el-table-column>
                <el-table-column
                  prop="name2"
                  label="调用的账户"
                  width="180"
                  class="juzhong"
                >
                </el-table-column>
                <el-table-column
                  prop="name3"
                  label="调用的IP"
                  width="180"
                  class="juzhong"
                >
                </el-table-column>
                <el-table-column
                  prop="name4"
                  label="签名数据"
                  width="190"
                  class="juzhong"
                >
                </el-table-column>
                <el-table-column
                  prop="name5"
                  label="调用时间"
                  width="180"
                  class="juzhong"
                >
                </el-table-column>
                <el-table-column
                  prop="chaozuo"
                  label="操作"
                  show-overflow-tooltip
                  width="100"
                >
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
      tableData: [
        {
          id: "1",
          name1: "",
          name2:"8811537465527445",
          name3: "115.152.78.30",
          name4:"32A5A40F4B1A7240237FF97462DDB909",
          name5:"2017-11-13 13:43:07"
        },
        {
            id: "1",
          name1: "",
          name2:"8811537465527445",
          name3: "115.152.78.30",
          name4:"32A5A40F4B1A7240237FF97462DDB909",
          name5:"2017-11-13 13:43:07"
        },
        {
            id: "1",
          name1: "",
          name2:"8811537465527445",
          name3: "115.152.78.30",
          name4:"32A5A40F4B1A7240237FF97462DDB909",
          name5:"2017-11-13 13:43:07"
        },
        {
            id: "1",
          name1: "",
          name2:"8811537465527445",
          name3: "115.152.78.30",
          name4:"32A5A40F4B1A7240237FF97462DDB909",
          name5:"2017-11-13 13:43:07"
        },
        {
            id: "1",
          name1: "",
          name2:"8811537465527445",
          name3: "115.152.78.30",
          name4:"32A5A40F4B1A7240237FF97462DDB909",
          name5:"2017-11-13 13:43:07"
        },
        {
            id: "1",
          name1: "",
          name2:"8811537465527445",
          name3: "115.152.78.30",
          name4:"32A5A40F4B1A7240237FF97462DDB909",
          name5:"2017-11-13 13:43:07"
        },
        {
            id: "1",
          name1: "",
          name2:"8811537465527445",
          name3: "115.152.78.30",
          name4:"32A5A40F4B1A7240237FF97462DDB909",
          name5:"2017-11-13 13:43:07"
        }
      ],
      multipleSelection: []
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
}
.bianju2 {
  margin-right: 10px;
}
.changdu {
  margin-left: 5px;
  width: 130px;
}
.toubu5 span {
  margin-left: 8px;
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
  margin-left: 300px;
}
</style>
