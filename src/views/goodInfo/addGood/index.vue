<template>
  <div style="margin-top: 50px">
    <el-form label-width="120px" style="width: 600px" size="small">
      <el-form-item label="商品类别：">
        <el-select v-model="value" placeholder="请选择商品类别">
          <el-option v-for="item in product_options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品名称：">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="商品剩余库存：">
        <el-input></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      product_options: [
        {value: '选项一', label: '沙发'},
        {value: '选项二', label: '床'},
        {value: '选项三', label: '橱柜'},
        {value: '选项四', label: '储物柜'},
        {value: '选项五', label: '布艺'},
        {value: '选项六', label: '浴室'},
        {value: '选项七', label: '灯具'},
        {value: '选项八', label: '桌椅'},
      ]
    }
  },
};
</script>

<style>
</style>