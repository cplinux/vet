<template>
  <div>
    <el-card class="box-card">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/welcome' }">t1</el-breadcrumb-item>
        <el-breadcrumb-item>t2</el-breadcrumb-item>
        <el-breadcrumb-item>t3</el-breadcrumb-item>
      </el-breadcrumb>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-input placeholder="请搜索输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="8"><el-button type="primary">Button</el-button></el-col>
      </el-row>
      <el-table border style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>

      <el-pagination :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>