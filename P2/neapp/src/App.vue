<!--这里文件用于设置样式以及背景-->

<template>
  <router-view/>
</template>


<style lang="less">
body{
  background: url("~@/assets/background.jpg") top center no-repeat;  // ~ 相对路径 @ 当前目录，
  background-size: cover ;
  background-attachment: fixed;
}
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>


