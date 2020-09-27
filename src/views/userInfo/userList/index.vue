<template>
  <div class="userlist-container">
    <el-card class="filter-container">
      <div>
        <i class="el-icon-search"></i>
        <span>筛选搜索</span>
        <el-button style="float: right" type="primary" size="small">查询结果</el-button>
        <el-button style="float: right;margin-right: 15px" size="small" @click="reset_user_search('userSearch')">重置</el-button>
      </div>
      <div style="margin-top: 30px">
        <el-form :inline="true">
          <el-form-item label="输入搜索：" v-model="userSearch" ref="userSearch">
            <el-input v-model="userSearch.userName" style="width: 203px" placeholder="用户名称"></el-input>
          </el-form-item>
          <el-form-item label="用户uuid：" style="margin-left: 10px">
            <el-input v-model="userSearch.userId" style="width: 203px" placeholder="用户uuid"></el-input>
          </el-form-item>
          <el-form-item label="手机号码：" style="margin-left: 10px">
            <el-input v-model="userSearch.phoneNum" style="width: 203px" placeholder="手机号"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card class="operate-container" >
      <i class="el-icon-tickets"></i>
      <span>用户列表</span>
    </el-card>
    <div class="table-container">
      <el-table :data="list" border>
        <el-table-column type="selection" width="60" align="center"></el-table-column>
        <el-table-column prop="id" label="序号" width="60" align="center"></el-table-column>
        <el-table-column prop="userName" label="用户名" width="100" align="center"></el-table-column>
        <el-table-column prop="pad" label="密码" width="100" align="center"></el-table-column>
        <el-table-column prop="uuid" label="用户uuid" width="100" align="center"></el-table-column>
        <el-table-column prop="sex" label="性别" width="60" align="center"></el-table-column>
        <el-table-column prop="phone" label="手机号" width="120" align="center"></el-table-column>
        <el-table-column prop="bir" label="生日" width="100" align="center"></el-table-column>
        <el-table-column prop="add" label="收货地址" width="150" align="center"></el-table-column>
        <el-table-column label="全部订单" width="150" align="center">
          <el-button type="primary" size="mini">查看全部订单</el-button>
        </el-table-column>
        <el-table-column prop="youhui" label="优惠券列表" width="100" align="center"></el-table-column>
        <el-table-column prop="jifen" label="积分" width="100" align="center"></el-table-column>
        <el-table-column prop="time" label="创建时间" width="100" align="center"></el-table-column>
        <el-table-column label="操作" width="160" align="center">
          <el-button type="primary" size="mini" @click="edit_user_info = true">编辑</el-button>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination-container">
      <!-- <el-pagination background layout="prev, pager, next"></el-pagination> -->
    </div>

    <el-dialog title="用户基本信息"  :visible.sync="edit_user_info" :before-close="handleClose">
      <h2>内容</h2>
      <span slot="footer" class="dialog-footer">
        <el-button @click="edit_userInfo">取 消</el-button>
        <el-button type="primary" @click="edit_userInfo">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userSearch: {
        userName: '',
        userId: '',
        phoneNum: ''
      },
      list: [
        {
          id: 1,
          userName: '张三',
          pad: 121331,
          uuid: '231',
          sex: '女',
          phone: '1827118271',
          bir: '2020.09.09',
          add: '江苏省南京市雨花台区铁心桥街道软件谷科创城D2南',
          order: '床，沙发，橱柜三件套',
          youhui: '满一千减三、满五百减五十',
          jifen: 11111,
          time: '2020.09.12'
        },
        {
          id: 2,
          userName: '张三',
          pad: 121331,
          uuid: '231',
          sex: '女',
          phone: '1827118271',
          bir: '2020.09.09',
          add: '江苏省南京市雨花台区铁心桥街道软件谷科创城D2南',
          order: '床，沙发，橱柜三件套',
          jifen: 11111,
          youhui: '满一千减三、满五百减五十',
          time: '2020.09.12'
        },
        {
          id: 3,
          userName: '张三',
          pad: 121331,
          uuid: '231',
          sex: '女',
          phone: '1827118271',
          bir: '2020.09.09',
          add: '江苏省南京市雨花台区铁心桥街道软件谷科创城D2南',
          order: '床，沙发，橱柜三件套',
          jifen: 11111,
          youhui: '满一千减三、满五百减五十',
          time: '2020.09.12'
        }
      ],
      edit_user_info: false
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    reset_user_search(userSearch) {
      this.userSearch.userName = '',
      this.userSearch.userId = '',
      this.userSearch.phoneNum = ''
    },
    edit_userInfo() {
      this.edit_user_info = false
    }
  }
}
</script>

<style>
</style>
