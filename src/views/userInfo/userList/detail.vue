<template>
  <div>
    <el-dialog title="用户基本信息" :visible="editUserInfo || flag" :before-close="handleClose">
      <div>
        <div>
          <span>用户名称：</span>
          <span>{{userItem.username}}</span>
        </div>
        <div class="password_container">
          <p>用户密码：</p>
          <input type="text" :value="userItem.password" @input="changePsd">
        </div>
        <div>
          <span>用户uuid：</span>
          <span>{{userItem.uuid}}</span>
        </div>
        <div class="top">
          <span>用户性别：</span>
          <span>{{userItem.gender}}</span>
        </div>
        <div class="top">
          <span>用户邮箱地址：</span>
          <span>{{userItem.email}}</span>
        </div>
        <div class="top">
          <span>用户积分：</span>
          <span>{{userItem.integral}}</span>
        </div>
        <div class="top">
          <span>用户创建时间：</span>
          <span>{{userItem.userdate}}</span>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="haddleCancel">取 消</el-button>
        <el-button type="primary" @click="haddleSure">确定修改</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["editUserInfo","userItem"],
  data() {
    return {
      flag: false,
    };
  },
  methods: {
    handleClose() {
      this.$confirm("确认关闭？")
        .then(() => {
          this.flag = false;
          this.$emit("onHidden", false);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    haddleCancel() {
      this.$emit("onHidden", false);
    },
    haddleSure() {
      this.$emit("onHidden", false);
    },
    changePsd() {
      console.log('=======');
    }
  },
};
</script>

<style>
.password_container{
  display: flex;
}
.password_container>input{
  height: 20px;
  margin-top: 12px;
  border: none;
  outline: none;
}
.top{
  margin-top: 15px;
}
</style>