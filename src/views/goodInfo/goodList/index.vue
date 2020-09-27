<template>
  <div class="goodlist-container">
    <el-card class="goodlist-filter-container">
      <div>
        <i class="el-icon-search"></i>
        <span>筛选搜查</span>
        <el-button style="float: right" type="primary" size="small">查询结果</el-button>
        <el-button style="float: right; margin-right: 15px" size="small" @click="reset_good_search('goodSearch')">重置</el-button>
      </div>
      <div style="margin-top: 30px">
        <el-form :inline="true" size="small" v-model="goodSearch" ref="goodSearch">
          <el-form-item label="输入搜索：" prop="goodName">
            <el-input v-model="goodSearch.goodName" style="width: 203px" placeholder="商品类别"></el-input>
          </el-form-item>
          <el-form-item label="商品名称：" prop="goodType" style="margin-left: 10px">
            <el-input v-model="goodSearch.goodType" style="width: 203px" placeholder="商品名称"></el-input>
          </el-form-item>
          <el-form-item label="商品序号：" prop="goodId" style="margin-left: 10px">
            <el-input v-model="goodSearch.goodId" style="width: 203px" placeholder="商品序号"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card class="operate-container" >
      <i class="el-icon-tickets"></i>
      <span>商品列表</span>
      <div style="float: right">
        <el-button type="primary" size="mini" @click="add_good">添加</el-button>
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
        <el-table-column label="操作" width="250" align="center">
          <el-button size="mini" @click="modify_product = true">修改属性</el-button>
          <el-button type="danger" size="mini" @click="delete_goods = true">删除商品</el-button>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog title="修改商品属性"  :visible.sync="modify_product" :before-close="handleClose">
      <h2>内容</h2>
      <span slot="footer" class="dialog-footer">
        <el-button @click="modify_product_attributes">取 消</el-button>
        <el-button type="primary" @click="modify_product_attributes">确认修改</el-button>
      </span>
    </el-dialog>

    <el-dialog title="删除商品" :visible.sync="delete_goods" :before-close="handleClose">
      <span>确定要删除该商品吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delete_goods_event">取消</el-button>
        <el-button type="primary" @click="delete_goods_event">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodSearch: {
        goodName: '',
        goodType: '',
        goodId: '',
      },
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
      ],
      modify_product: false,
      delete_goods: false
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
      .catch(_ => {});
    },
    // 重置按钮
    reset_good_search(goodSearch) {
      console.log(goodSearch);
      this.goodSearch.goodName = '',
      this.goodSearch.goodType = '',
      this.goodSearch.goodId = ''
    },
    add_good() {
      this.$router.push({path: '/goodInfo/addGood'})
    },
    // 修改属性按钮
    modify_product_attributes() {
      this.modify_product = false;
    },
    // 删除商品按钮
    delete_goods_event() {    
      this.delete_goods = false
    }
  },
};
</script>

<style>
</style>