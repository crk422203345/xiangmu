<template>
  <div id="app">
    <div class="tou1">
      <i class="el-icon-s-home"></i
      >&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;商品&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;订单管理
    </div>
    <p class="tou2">
      订单列表
    </p>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-light">
          <div class="toubu5">
            <div class="xiaola">
              <el-select v-model="value6" placeholder="订单状态">
                <el-option
                  v-for="item in options5"
                  :key="item.value6"
                  :label="item.label4"
                  :value="item.value6"
                >
                </el-option>
              </el-select>

              <el-select v-model="value3" placeholder="支付状态">
                <el-option
                  v-for="item in options1"
                  :key="item.value3"
                  :label="item.label1"
                  :value="item.value3"
                >
                </el-option>
              </el-select>

              <el-select v-model="value4" placeholder="配送状态">
                <el-option
                  v-for="item in options2"
                  :key="item.value4"
                  :label="item.label2"
                  :value="item.value4"
                >
                </el-option>
              </el-select>

              <el-select v-model="value5" placeholder="配送方式">
                <el-option
                  v-for="item in options4"
                  :key="item.value5"
                  :label="item.label3"
                  :value="item.value5"
                >
                </el-option>
              </el-select>
            </div>
            <span class="bianju3">
              订单编号:<el-input
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
                <el-table-column type="selection" width="50"></el-table-column>
                <el-table-column prop="id" label="ID" width="50" class="id">
                </el-table-column>
                <el-table-column
                  prop="name1"
                  label="订单编号"
                  width="100"
                  class="juzhong"
                >
                </el-table-column>

                <el-table-column
                  prop="name2"
                  label="买家用户名"
                  width="100"
                  class="juzhong"
                >
                </el-table-column>
                <el-table-column
                  prop="name3"
                  label="订单金额（元）"
                  width="100"
                  class="juzhong"
                >
                </el-table-column>
                <el-table-column
                  prop="name4"
                  label="下单日期"
                  width="100"
                  class="juzhong"
                >
                </el-table-column>
                <el-table-column
                  prop="name5"
                  label="订单状态"
                  width="100"
                  class="juzhong"
                >
                </el-table-column>
                <el-table-column
                  prop="name6"
                  label="支付状态"
                  width="100"
                  class="juzhong"
                >
                </el-table-column>
                <el-table-column
                  prop="name7"
                  label="支付方式"
                  width="100"
                  class="juzhong"
                >
                </el-table-column>
                <el-table-column
                  prop="name8"
                  label="配送状态"
                  width="100"
                  class="juzhong"
                >
                </el-table-column>
                <el-table-column
                  prop="name9"
                  label="配送方式"
                  width="100"
                  class="juzhong"
                >
                </el-table-column>
                
                <el-table-column
                  prop="chaozuo"
                  label="操作"
                  show-overflow-tooltip
                  width="145"
                >
                  <img src="../img/12.png" alt="">
                  <img src="../img/13.png" alt="" class="tupian12"/>
                  <img src="../img/14.png" alt=""  />
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
          id: "1688",
          name1: "1533019644791",
          name2: "test1",
          name3: "6398(含运费0)",
          name4: "2018-07-31 14:47:24",
          name5: "未确认",
          name6: "未支付",
          name7: "网上支付",
          name8: "未发货",
          name9: "普通快递"
        },
        {
          id: "1688",
          name1: "1533019644791",
          name2: "test1",
          name3: "6398(含运费0)",
          name4: "2018-07-31 14:47:24",
          name5: "未确认",
          name6: "未支付",
          name7: "网上支付",
          name8: "未发货",
          name9: "普通快递"
        },
        {
          id: "1688",
          name1: "1533019644791",
          name2: "test1",
          name3: "6398(含运费0)",
          name4: "2018-07-31 14:47:24",
          name5: "未确认",
          name6: "未支付",
          name7: "网上支付",
          name8: "未发货",
          name9: "普通快递"
        },
        {
          id: "1688",
          name1: "1533019644791",
          name2: "test1",
          name3: "6398(含运费0)",
          name4: "2018-07-31 14:47:24",
          name5: "未确认",
          name6: "未支付",
          name7: "网上支付",
          name8: "未发货",
          name9: "普通快递"
        },
        {
          id: "1688",
          name1: "1533019644791",
          name2: "test1",
          name3: "6398(含运费0)",
          name4: "2018-07-31 14:47:24",
          name5: "未确认",
          name6: "未支付",
          name7: "网上支付",
          name8: "未发货",
          name9: "普通快递"
        },
        {
          id: "1688",
          name1: "1533019644791",
          name2: "test1",
          name3: "6398(含运费0)",
          name4: "2018-07-31 14:47:24",
          name5: "未确认",
          name6: "未支付",
          name7: "网上支付",
          name8: "未发货",
          name9: "普通快递"
        },
        {
          id: "1688",
          name1: "1533019644791",
          name2: "test1",
          name3: "6398(含运费0)",
          name4: "2018-07-31 14:47:24",
          name5: "未确认",
          name6: "未支付",
          name7: "网上支付",
          name8: "未发货",
          name9: "普通快递"
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
      value2: "",
      options5: [
        {
          value6: "选项1",
          label4: "订单状态"
        },
        {
          value6: "选项2",
          label4: "未确认"
        },
        {
          value6: "选项3",
          label4: "已确认"
        },
        {
          value6: "选项4",
          label4: "已取消"
        },
        {
          value6: "选项5",
          label4: "已完成"
        }
      ],
      value6: "",

      options1: [
        {
          value3: "选项1",
          label1: "支付状态"
        },
        {
          value3: "选项2",
          label1: "未支付"
        },
        {
          value3: "选项3",
          label1: "已支付"
        },
        {
          value3: "选项4",
          label1: "已退款"
        }
      ],
      value3: "",

      options2: [
        {
          value4: "选项1",
          label2: "配送状态"
        },
        {
          value4: "选项2",
          label2: "未发货"
        },
        {
          value4: "选项3",
          label2: "已发货"
        },
        {
          value4: "选项4",
          label2: "已退货"
        }
      ],
      value4: "",
      options4: [
        {
          value5: "选项1",
          label3: "配送方式"
        },
        {
          value5: "选项2",
          label3: "普通快递"
        },
        {
          value5: "选项3",
          label3: "顺丰快递"
        }
      ],
      value5: ""
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
  margin-left: 10px;
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
  margin-left: 220px;
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
.xiaola{
  padding-bottom: 15px;
}
</style>
