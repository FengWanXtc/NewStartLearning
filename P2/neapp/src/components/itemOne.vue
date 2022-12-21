<template>
    <h2>Z510 V2.0 REL</h2>
<div class="itemOne">
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
    height:  5.125rem;
    margin: 0.25rem;
    border: 1px solid blue;
    background: rgba(12,130,255,.85);
}
h2{
    color: #F9F0F0;
}
</style>