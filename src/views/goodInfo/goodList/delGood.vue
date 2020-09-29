<template>
  <div>
    <el-dialog title="删除商品" :visible="delProductInfo || flag" :before-close="handleClose">
      <span>确定要删除该商品吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delete_goods_cancel">取消</el-button>
        <el-button type="primary" @click="delete_goods_sure">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['delProductInfo'],
  data() {
    return {
      flag: false
    }
  },
  methods: {
    handleClose() {
      this.$confirm("确认关闭？")
        .then(() => {
          this.flag = false;
          this.$emit('onDelGood', false)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    delete_goods_cancel() {
      this.$emit('onDelGood', false)
    },
    delete_goods_sure() {
      this.$emit('onDelGood', false)
    }
  }
}
</script>

<style>

</style>