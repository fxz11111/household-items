<template>
  <div>
    <el-dialog title="修改商品属性"  :visible="editGoodDetail || flag" :before-close="handleClose">
      <h2>内容</h2>
      <span slot="footer" class="dialog-footer">
        <el-button @click="modify_product_cancel">取 消</el-button>
        <el-button type="primary" @click="modify_product_sure">确认修改</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['editGoodDetail'],
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
          this.$emit('onHiddenDetail', false)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    modify_product_cancel() {
      this.$emit('onHiddenDetail', false)
    },
    modify_product_sure() {
      this.$emit('onHiddenDetail', false)
    }
  },
}
</script>

<style>

</style>