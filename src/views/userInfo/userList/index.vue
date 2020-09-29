<template>
  <div class="userlist-container">
    <el-card class="filter-container">
      <div>
        <i class="el-icon-search"></i>
        <span>筛选搜索</span>
        <el-button style="float: right" type="primary" size="small" @click="search_user_result"
          >查询结果</el-button
        >
        <el-button
          style="float: right; margin-right: 15px"
          size="small"
          @click="reset_user_search('userSearch')"
          >重置</el-button
        >
      </div>
      <div style="margin-top: 30px">
        <el-form :inline="true">
          <el-form-item
            label="输入搜索："
            prop="userName"
            v-model="userSearch"
            ref="userSearch"
          >
            <el-input
              v-model="userSearch.userName"
              style="width: 203px"
              placeholder="用户名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="用户uuid：" style="margin-left: 10px" prop="userId">
            <el-input
              v-model="userSearch.userId"
              style="width: 203px"
              placeholder="用户uuid"
            ></el-input>
          </el-form-item>
          <el-form-item label="邮箱地址：" style="margin-left: 10px" prop="emailAddress">
            <el-input
              v-model="userSearch.emailAddress"
              style="width: 203px"
              placeholder="邮箱地址"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card class="operate-container">
      <i class="el-icon-tickets"></i>
      <span>用户列表</span>
    </el-card>
    <div class="table-container">
      <el-table :data="list" border>
        <el-table-column
          type="selection"
          width="60"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="id"
          label="序号"
          width="60"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="username"
          label="用户名"
          width="100"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="password"
          label="密码"
          width="100"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="uuid"
          label="用户uuid"
          width="100"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="gender"
          label="性别"
          width="60"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="email"
          label="邮箱地址"
          width="120"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="datebirth"
          label="生日"
          width="100"
          align="center"
        ></el-table-column>
        <el-table-column label="全部订单" width="150" align="center">
          <el-button type="primary" size="mini">查看全部订单</el-button>
        </el-table-column>
        <el-table-column
          prop="youhui"
          label="优惠券列表"
          width="100"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="integral"
          label="积分"
          width="100"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="userdate"
          label="创建时间"
          width="100"
          align="center"
        ></el-table-column>
        <el-table-column label="操作" width="160" align="center">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              @click="haddleUserDetail(scope.$index, scope.row)"
              >编辑</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <!-- 编辑用户基本信息 -->
      <el-detail
        :editUserInfo="editUserInfo"
        @onHidden="handleHidden"
        :userItem = "userItem"
      ></el-detail>
    </div>
  </div>
</template>

<script>
import ElDetail from "./detail";
import { getUserInfo } from "../../../api/getUserList";

export default {
  name: "userList",
  components: {
    ElDetail,
  },
  data() {
    return {
      userSearch: {
        userName: '',
        userId: '',
        emailAddress: '',
      },
      list: null,
      editUserInfo: false,
      page: 2,
      userItem: {},
    };
  },
  mounted() {
    this.getUserList()
  },
  methods: {
    reset_user_search(userSearch) {
      this.userSearch.userName = '',
      this.userSearch.userId = '',
      this.userSearch.emailAddress = '';
    },
    haddleUserDetail(index,row) {
      // console.log(index,row)
      this.editUserInfo = true;
      this.userItem = row;
      console.log(this.userItem);
    },
    handleHidden(flag) {
      this.editUserInfo = flag;
    },
    getUserList() {
      this.list = null;
      getUserInfo({
        page: this.page,
      })
        .then((data) => {
          // console.log(data.data);
          const res = data.data;
          console.log(res.data);
          this.list = res.data
        })
        .catch(() => {
          this.$message({
            message: "获取用户列表失败",
          });
        });
    },
    search_user_result() {
      const searchName = this.userSearch.userName;
      const searchId = this.userSearch.userId;
      const searchEmail = this.userSearch.emailAddress;
      console.log(searchName,searchId,searchEmail);
      
    }
  }
};
</script>

<style>
</style>
