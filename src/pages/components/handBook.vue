<template>
    <div class="head">
    <span class="title"> — {{props.kind == 'cat'? '喵星人':'汪星人'}}图鉴 — </span>
     <CatIcon v-if="props.kind == 'cat'"/>
    <DogeIcon v-else/>
    </div>
     <div class="book">
        <li v-for="item in animalList" :key="item.id">
            <img :src="item.src" alt="">
            <p>姓名：{{item.name}}</p>
        </li>
     </div>
</template>
<script setup>
import { catList,dogList } from '../home';
import { defineProps,computed } from 'vue';
import {CatIcon,DogeIcon} from 'tdesign-icons-vue-next'

const props = defineProps({
    kind: {
        type: String,
        default:()=>{'cat'}
    }
})

const animalList = computed(() => {
    if (props.kind == 'cat') {
        return catList
    } else {
        return dogList
    }
})

console.log(catList.value.length);
// console.log(dogList);


</script>
<style secoped lang="less">
.head {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    .title {
   display: flex;
   justify-content: center; 
   align-items: center; 
   width: 100%; 
   height: 50px;
   font-size: 30px;
   font-weight: 700;
   text-align: center;
   line-height: 50px;
   color: #2b2b2b;
   margin-bottom: 5px;
 }
}

 .book {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    border: 5px solid green;
    border-radius: 15px;
    margin: 0px 200px;
    padding: 20px;
    li{
        list-style: none;
        width: 30%;
        height: 300px;
        border: 1px solid red;
        img {
            width: 100%;
            height: 200px;
            border: 1px solid green;
        }
    }
 }
</style>