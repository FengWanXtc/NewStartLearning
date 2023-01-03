<template>
  <div>
    <header>
      <h1>大数据可视化页面</h1>
    </header>
    <!--大容器-->
    <section class="container">
      <!--左容器-->
      <section class="itemLeft">
        <itemOne/>
        <itemOne/>
        <itemOne/>
      </section>
      
      <!--中容器-->
      <section class="itemCenter"></section>
      <!--右容器-->
      <section class="itemRight"></section>
    </section>

  </div>
</template>


<script>
import itemOne from "@/components/itemOne.vue";

export default {
  components:{
    itemOne
  }
}
</script>

<style lang="less">
header {
  height: 1rem;
  width: 100%;
  background-color: rgba(0, 0, 255, .2);
  background: url("~@/assets/nav.png") top center no-repeat;
}

h1 {
  font-size: 0.375rem;
  color: #fff;
  text-align: center;
  line-height: 1rem;
}

//大容器样式
.container {
  min-width: 15rem; //1200px
  max-width: 32rem; //2048px
  //min-height: 1080px;    //根据显示器分辨率来设置容器的宽高比
  // max-height: 1500px;   
  height: 15rem;
  margin: 0 auto;
  border: 1px solid red;
  padding: .125rem .125rem 0;
  background-color: rgba(255, 255, 255, 0);
  display: flex;
  .itemLeft,.itemRight{
    flex:3;
  }
  .itemCenter{
    flex:5;
  }
}
</style>