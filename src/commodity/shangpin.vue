<template>
  <div id="app">
    <div class="tou1">
      <i class="el-icon-s-home"></i
      >&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;商品&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;商品管理
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
            <el-dropdown class="bianju2">
              <el-button type="primary">
                在售<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>在售</el-dropdown-item>
                <el-dropdown-item>下架</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-button>推荐</el-button>
            <el-button>特价</el-button>
            <el-button>热卖</el-button>
            <el-button>新品</el-button>

            <span>商品名称:</span
            ><el-input
              v-model="input1"
              placeholder="请输入内容"
              class="changdu"
            ></el-input>
            <span>品牌：</span
            ><el-input
              v-model="input2"
              placeholder="请输入内容"
              class="changdu"
            ></el-input>
            <el-button type="primary" class="chaxun">查询</el-button>
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
                <el-table-column label="图片" width="70">
                  <img src="../img/11.png" alt="" />
                  <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
                </el-table-column>
                <el-table-column prop="name" label="商品名称" width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="分类"
                  show-overflow-tooltip
                  width="110"
                >
                </el-table-column>
                <el-table-column
                  prop="pingpan"
                  label="品牌"
                  show-overflow-tooltip
                  width="110"
                >
                </el-table-column>
                <el-table-column
                  prop="jiage"
                  label="价格"
                  show-overflow-tooltip
                  width="110"
                >
                </el-table-column>
                <el-table-column
                  prop="kuchuen"
                  label="库存"
                  show-overflow-tooltip
                  width="110"
                >
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
                <el-button>批量删除</el-button>
                <span
                  >每页显示<el-input
                    v-model="input3"
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
      tableData: [
        {
          date: "2016-05-03",
          name: "【低价疯抢】Apple iPhone 6 32G",
          address: "三星",
          pingpan: "品牌",
          jiage: "3100",
          kuchuen: "5"
        },
        {
          date: "2016-05-02",
          name: "【低价疯抢】Apple iPhone 6 32G",
          address: "三星",
          pingpan: "品牌",
          jiage: "3100",
          kuchuen: "5"
        },
        {
          date: "2016-05-04",
          name: "【低价疯抢】Apple iPhone 6 32G",
          address: "三星",
          pingpan: "品牌",
          jiage: "3100",
          kuchuen: "5"
        },
        {
          date: "2016-05-01",
          name: "【低价疯抢】Apple iPhone 6 32G",
          address: "三星",
          pingpan: "品牌",
          jiage: "3100",
          kuchuen: "5"
        },
        {
          date: "2016-05-08",
          name: "【低价疯抢】Apple iPhone 6 32G",
          address: "三星",
          pingpan: "品牌",
          jiage: "3100",
          kuchuen: "5"
        },
        {
          date: "2016-05-06",
          name: "【低价疯抢】Apple iPhone 6 32G",
          address: "三星",
          pingpan: "品牌",
          jiage: "3100",
          kuchuen: "5"
        },
        {
          date: "2016-05-07",
          name: "【低价疯抢】Apple iPhone 6 32G",
          address: "三星",
          pingpan: "品牌",
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
.bianju1 {
  border: solid 1px #dfdfdf;
  height: 820px;
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
  margin-left: 30px;
  font-size: 14px;
}
.yanse5 div {
  display: inline-block;
}
.neirong {
  border-right: solid 1px #dfdfdf;
  border-bottom: solid 1px #dfdfdf;
}
.el-pagination {
    white-space: nowrap;
    padding: 2px 5px;
    color: #303133;
    font-weight: 700;
    margin-left: 65px;
}
</style>
