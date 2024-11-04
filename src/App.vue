<template>
  <t-head-menu v-model="menu1Value" theme="dark" @change="changeHandler">
    <template #logo>
      <img height="28" src="./assets/images/logo.png" alt="logo" />
    </template>
    <t-menu-item value="1" :class="{ active: currentMenuItem === 1 }"> 首页 </t-menu-item>
    <t-menu-item value="2" :class="{ active: currentMenuItem === 2 }"> 菜单2 </t-menu-item>
    <t-menu-item value="3" :class="{ active: currentMenuItem === 3 }"> 菜单3 </t-menu-item>
    <t-menu-item value="4" :class="{ active: currentMenuItem === 4 }"> 菜单4 </t-menu-item>
    <t-menu-item value="5" :class="{ active: currentMenuItem === 5 }"> 菜单5 </t-menu-item>
    <template #operations>
      <t-button variant="text" shape="square">
        <template #icon><t-icon name="search" /></template>
      </t-button>
      <t-button variant="text" shape="square">
        <template #icon><t-icon name="mail" /></template>
      </t-button>
      <t-button variant="text" shape="square">
        <template #icon><t-icon name="user" /></template>
      </t-button>
      <t-button variant="text" shape="square">
        <template #icon><t-icon name="ellipsis" /></template>
      </t-button>
    </template>
  </t-head-menu>
  <RouterView />
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
let currentMenuItem = ref(1);
const menu1Value = ref('');

const changeHandler = (id) => {
  let name = '';
  let item = '';
  switch (id) {
    case '1':
      name = 'home';
      item = id;
      break;
    case '2':
      name = 'second';
      item = id;
      break;
    default:
      console.log('未知的id');
      return;
  }
  currentMenuItem.value = item;
  router.push({ name: name });
};
</script>

<style scoped lang="less">
.active {
  color: #fff;
  background-color: #0052D9;
  border-color: transparent;
  --ripple-color: #383838;
}
</style>