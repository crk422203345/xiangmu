<template>
  <div id="app">
    <div class="tou1">
      <i class="el-icon-s-home"></i
      >&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;商品&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;分类管理
    </div>
    <p class="tou2">
      分类列表
    </p>

    <el-row>
      <el-col :span="5" class="bianju1">
        <div class="tubiao1"><i class="el-icon-loading"></i>刷新</div>
        <div class="grid-content bg-purple">
          <el-tree
            :data="data"
            :props="defaultProps"
            accordion
            @node-click="handleNodeClick"
          >
          </el-tree>
        </div>
      </el-col>
      <el-col :span="19">
        <div class="grid-content bg-purple-light">
          <div class="toubu5">
            <span>商品名称：<span class="yangse">所有分类</span></span>
            <el-button class="el-icon-plus tianjia">添加分类</el-button>
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
                <el-table-column type="selection" width="55"> </el-table-column>
                <el-table-column prop="id" label="ID" width="150">
                  
                </el-table-column>
                <el-table-column prop="name" label="分类名称" width="150">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="访问路径"
                  show-overflow-tooltip
                  width="150"
                >
                </el-table-column>
                <el-table-column
                  prop="pingpan"
                  label="商品类型"
                  show-overflow-tooltip
                  width="150"
                >
                </el-table-column>
                <el-table-column
                  prop="jiage"
                  label="排序"
                  show-overflow-tooltip
                  width="150"
                >
                <el-input v-model="input4" placeholder="" class="changdu1"></el-input>
                </el-table-column>
                <el-table-column
                  prop="chaozuo"
                  label="操作"
                  show-overflow-tooltip
                >
                  <img src="../img/12.png" alt="" class="tupian12" />
                  <img src="../img/13.png" alt="" />
                </el-table-column>
              </el-table>
              <div style="margin-top: 20px" class="yanse5">
                <el-button>保存排序</el-button>
                <el-button>批量删除</el-button>
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
      tableData: [
        {
          id: "1",
          name: "数码",
          address: "shuma",
          pingpan: "数码",
          jiage: "3100",
          kuchuen: "5"
        },
        {
          id: "1",
          name: "数码",
          address: "shuma",
          pingpan: "数码",
          jiage: "3100",
          kuchuen: "5"
        },
        {
          id: "1",
          name: "数码",
          address: "shuma",
          pingpan: "数码",
          jiage: "3100",
          kuchuen: "5"
        },
        {
          id: "1",
          name: "数码",
          address: "shuma",
          pingpan: "数码",
          jiage: "3100",
          kuchuen: "5"
        },
        {
          id: "1",
          name: "数码",
          address: "shuma",
          pingpan: "数码",
          jiage: "3100",
          kuchuen: "5"
        },
        {
          id: "1",
          name: "数码",
          address: "shuma",
          pingpan: "数码",
          jiage: "3100",
          kuchuen: "5"
        },
        {
          id: "1",
          name: "数码",
          address: "shuma",
          pingpan: "数码",
          jiage: "3100",
          kuchuen: "5"
        }
      ],
      multipleSelection: [],
      data: [
        {
          label: "所有分类",
          children: [
            {
              label: "数码",
              children: [
                {
                  label: "手机"
                },
                {
                  label: "笔记本"
                },
                {
                  label: "电脑整机"
                },
                {
                  label: "办公"
                }
              ]
            },
            {
              label: "服装",
              children: [
                {
                  label: "女装",
                  children: [
                    {
                      label: "浪漫裙装"
                    }
                  ]
                }
              ]
            },
            {
              label: "鞋包配饰"
            },
            {
              label: "日用百货"
            },
            {
              label: "家居建材"
            },
            {
              label: "珠宝首饰"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
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
.tubiao1 {
  background: white;
  padding: 20px 0px 0px 25px;
  font-size: 18px;
  color: #999999;
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
.bianju1{
    border: solid 1px #dfdfdf;
    height: 666px;
    background: white;
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
  margin-left: 20px;
  font-size: 14px;
}
.yanse5 div {
  display: inline-block;
  margin-left: 20px;
}
.tianjia {
  color: white;
  background: #1ab394;
  margin-left: 607px;
}
.yangse {
  color: #1ab394;
}
.changdu1{
    width: 120px;
}
.neirong{
    border-right: solid 1px #dfdfdf;
    border-bottom: solid 1px #dfdfdf;
}
</style>
