<template>
  <div id="app">
    <div class="tou1">
      <i class="el-icon-s-home"></i
      >&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;商品&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;规格管理
    </div>
    <p class="tou2">
      规格管理
    </p>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-light">
          <div class="toubu5">
            <el-button class="el-icon-plus tianjia">添加规格</el-button>
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
                <el-table-column prop="id" label="ID" width="150" class="id">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="类型名称"
                  width="180"
                  class="juzhong"
                >
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="商品分类模板前缀"
                  show-overflow-tooltip
                  width="180"
                >
                </el-table-column>
                <el-table-column
                  prop="jinxuan"
                  label="商品内容模板前缀"
                  show-overflow-tooltip
                  width="180"
                >
                </el-table-column>
                <el-table-column
                  prop="shuxing"
                  label="属性列表"
                  show-overflow-tooltip
                  width="180"
                >
                </el-table-column>
                <el-table-column
                  prop="chaozuo"
                  label="操作"
                  show-overflow-tooltip
                  width="180"
                >
                  <img src="../img/12.png" alt="" class="tupian12" />
                  <img src="../img/13.png" alt="" />
                </el-table-column>
              </el-table>
              <div style="margin-top: 20px" class="yanse5">
                <el-button>保存排序</el-button>
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
          id: "27",
          name: "生活电器",
          address: "分类",
          jinxuan: "商品",
          shuxing: "[分类字段][商品字段]"
        },
        {
          id: "27",
          name: "生活电器",
          address: "分类",
          jinxuan: "商品",
          shuxing: "[分类字段][商品字段]"
        },
        {
          id: "27",
          name: "生活电器",
          address: "分类",
          jinxuan: "商品",
          shuxing: "[分类字段][商品字段]"
        },
        {
          id: "27",
          name: "生活电器",
          address: "分类",
          jinxuan: "商品",
          shuxing: "[分类字段][商品字段]"
        },
        {
          id: "27",
          name: "生活电器",
          address: "分类",
          jinxuan: "商品",
          shuxing: "[分类字段][商品字段]"
        },
        {
          id: "27",
          name: "生活电器",
          address: "分类",
          jinxuan: "商品",
          shuxing: "[分类字段][商品字段]"
        },
        {
          id: "27",
          name: "生活电器",
          address: "分类",
          jinxuan: "商品",
          shuxing: "[分类字段][商品字段]"
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
  margin-left: 190px;
}
</style>
