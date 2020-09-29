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
        <el-table-column prop="title" label="商品名称" width="120" align="center"></el-table-column>
        <el-table-column prop="price" label="商品库存" width="120" align="center"></el-table-column>
        <el-table-column label="商品价格" width="100" align="center"></el-table-column>
        <el-table-column prop="introduce" label="商品简介" width="200" align="center"></el-table-column>
        <el-table-column  label="商品尺寸" width="120" align="center"></el-table-column>
        <el-table-column  label="商品颜色" width="120" align="center"></el-table-column>
        <el-table-column label="操作" width="250" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="modify_product(scope.$index,scope.row)">修改属性</el-button>
            <el-button type="danger" size="mini" @click="delete_goods(scope.$index,scope.row)">删除商品</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 修改商品详情弹窗 -->
    <el-alterDetail :editGoodDetail="editGoodDetail" @onHiddenDetail="hiddenDetail"></el-alterDetail>

    <!-- 删除商品 -->
    <el-delGood :delProductInfo="delProductInfo" @onDelGood="deleteGood"></el-delGood>
  </div>
</template>

<script>
import { getGoodInfo } from '../../../api/getGoodList'
import ElAlterDetail from './alterDetail'
import ElDelGood from './delGood'

export default {
  components: {
    ElAlterDetail,
    ElDelGood
  },
  data() {
    return {
      goodSearch: {
        goodName: '',
        goodType: '',
        goodId: '',
      },
      goodList: [],
      editGoodDetail: false,
      delProductInfo: false,
      page: 1
    }
  },
  mounted() {
    this.getGoodlist();
  },
  methods: {
    getGoodlist() {
      this.goodList = [];
      getGoodInfo({
        page: this.page
      })
        .then((data) => {
          const res = data.data.data;
          console.log(res);
        })
        .catch((err) => {
          console.log(err)
        })
    },
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
    modify_product() {
      this.editGoodDetail = true;
    },
    hiddenDetail(flag) {
      this.editGoodDetail = flag;
    },
    // 删除商品按钮
    delete_goods() {    
      this.delProductInfo = true;
    },
    deleteGood(flag) {
      this.delProductInfo = flag
    }
  }
};
</script>

<style>
</style>