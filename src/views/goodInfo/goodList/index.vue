<template>
  <div class="goodlist-container">
    <el-card class="goodlist-filter-container">
      <div>
        <i class="el-icon-search"></i>
        <span>筛选搜查</span>
        <el-button style="float: right" type="primary" size="small">查询结果</el-button>
        <el-button style="float: right; margin-right: 15px" size="small">重置</el-button>
      </div>
      <div style="margin-top: 30px">
        <el-form :inline="true" size="small">
          <el-form-item label="输入搜索：">
            <el-input v-model="goodName" style="width: 203px" placeholder="商品类别"></el-input>
          </el-form-item>
          <el-form-item label="商品名称：" style="margin-left: 10px">
            <el-input v-model="goodType" style="width: 203px" placeholder="商品名称"></el-input>
          </el-form-item>
          <el-form-item label="商品序号：" style="margin-left: 10px">
            <el-input v-model="goodId" style="width: 203px" placeholder="商品序号"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card class="operate-container" >
      <i class="el-icon-tickets"></i>
      <span>商品列表</span>
      <div style="float: right">
        <el-button type="primary" size="mini">添加</el-button>
      </div>
    </el-card>
    <div class="goodList-table-container">
      <el-table :data="goodList" border>
        <el-table-column type="selection" width="60" align="center"></el-table-column>
        <el-table-column prop="id" label="序号" width="60" align="center"></el-table-column>
        <el-table-column prop="type_one" label="商品类别" width="120" align="center"></el-table-column>
        <el-table-column prop="name" label="商品名称" width="120" align="center"></el-table-column>
        <el-table-column prop="price" label="商品库存" width="120" align="center"></el-table-column>
        <el-table-column prop="price" label="商品价格" width="100" align="center"></el-table-column>
        <el-table-column prop="introduction" label="商品简介" width="200" align="center"></el-table-column>
        <el-table-column prop="size" label="商品尺寸" width="120" align="center"></el-table-column>
        <el-table-column prop="color" label="商品颜色" width="120" align="center"></el-table-column>
        <el-table-column label="操作" width="150" align="center">
          <el-button size="mini">修改</el-button>
          <el-button type="danger" size="mini">删除</el-button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodName: '',
      goodType: '',
      goodId: '',
      goodList: [
        {
          id: 1,
          type_one: '沙发',
          name: '真皮沙发',
          price: '3000',
          introduction: '正品手感好',
          size: '12*20',
          color: '黑色'
        }
      ]
    }
  }
};
</script>

<style>
</style>