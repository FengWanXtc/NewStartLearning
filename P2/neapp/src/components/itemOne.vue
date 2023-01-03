<template>
    <div class="itemOne">
    <h2>Z510 V2.0 REL</h2>
    <!--插槽-->
    <slot></slot>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.itemOne{
    height:  4rem;
    margin: 0.25rem;
    border: 1px solid blue;
    background: rgba(12,130,255,.85);
}
h2{
    height: 0.3rem;
  color: #fff;
  line-height: 0.6rem;
  font-size: 0.25rem;
  text-align: center;
}
</style>