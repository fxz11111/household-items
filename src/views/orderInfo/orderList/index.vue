<template>
  <div class="orderlist-container">
    <el-card class="orderlist-filter-container">
      <div>
        <i class="el-icon-search"></i>
        <span>筛选搜查</span>
        <el-button style="float: right" type="primary" size="small">查询结果</el-button>
        <el-button style="float: right; margin-right: 15px" size="small" @click="resetForm('orderSearch')">重置</el-button>
      </div>
      <div style="margin-top: 30px">
        <el-form :inline="true" size="small" v-model="orderSearch" ref="orderSearch">
          <el-form-item label="输入搜索：" prop="orderId">
            <el-input v-model="orderSearch.orderId" style="width: 203px" placeholder="订单编号"></el-input>
          </el-form-item>
          <el-form-item label="用户ID：" style="margin-left: 10px" prop="userId">
            <el-input v-model="orderSearch.userId" style="width: 203px" placeholder="用户ID"></el-input>
          </el-form-item>
          <el-form-item label="下单时间：" style="margin-left: 10px" prop="orderTime">
            <el-input v-model="orderSearch.orderTime" style="width: 203px" placeholder="下单时间"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card class="operate-container">
      <i class="el-icon-tickets"></i>
      <span>商品列表</span>
    </el-card>
    <div class="goodList-table-container">
      <el-table :data="orderList" border>
        <el-table-column type="selection" width="60" align="center"></el-table-column>
        <el-table-column prop="id" label="序号" width="100" align="center"></el-table-column>
        <el-table-column prop="orderId" label="订单编号" width="120" align="center"></el-table-column>
        <el-table-column prop="time" label="创建时间" width="120" align="center"></el-table-column>
        <el-table-column prop="userId" label="用户ID" width="120" align="center"></el-table-column>
        <el-table-column prop="num" label="商品数量" width="120" align="center"></el-table-column>
        <el-table-column prop="price" label="订单金额" width="120" align="center"></el-table-column>
        <el-table-column prop="zhuangtai" label="订单状态" width="100" align="center"></el-table-column>
        <el-table-column prop="yundan" label="运单编号" width="200" align="center"></el-table-column>
        <el-table-column label="操作" width="250" align="center">
          <el-button size="mini">修改订单</el-button>
          <el-button type="danger" size="mini">删除订单</el-button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderSearch: {
        orderId: '',
        userId: '',
        orderTime: ''
      },
      orderList: [
        {
          id: 1,
          orderId: '127328374',
          time: '2020-09-18',
          userId: '38292',
          num: 22,
          price: 222311,
          zhuangtai: '已发货',
          yundan: '27879181'
        }
      ]
    };
  },
  methods: {
    resetForm(orderSearch) {
      this.orderSearch.orderId = '';
      this.orderSearch.userId = '';
      this.orderSearch.orderTime = '';
    }
  },
};
</script>

<style>
</style>