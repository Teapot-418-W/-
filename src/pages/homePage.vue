<template>
   <t-swiper class="tdesign-demo-block--swiper" type="card" :height="350" trigger="click" :loop="true" :stopOnHover="true" :interval="3000">
    <t-swiper-item  v-for="item in imgList" :key="item.id" class="swiper-item-container">
      <img class="demo-item" :src="item.src"/>
    </t-swiper-item>
  </t-swiper>
  <HandBook :kind="'cat'"/>
  <!-- <HandBook :kind="'dog'"/> -->
</template>
<script setup>
import { imgList } from './home';
import HandBook from './components/handBook.vue';

</script>
<style scoped lang="less">
.tdesign-demo-block--swiper{
   margin: 50px 0;
   box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.2);
   .swiper-item-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
   .demo-item {
   width: 100%;
    height: 90%;
    object-fit: cover; /* 保持图像的宽高比，确保图像完全可见 */
    display: block; /* 确保图像不会在容器中产生额外的空白行 */
   }
 }
</style>