import { ref } from 'vue'


export const imgList = ref([
    { id: 1, src: require('../assets/images/1.jpg') },
    { id: 2, src: require('../assets/images/2.jpg') },
    { id: 3, src: require('../assets/images/3.jpg') },
    { id: 4, src: require('../assets/images/4.jpg') },
    { id: 5, src: require('../assets/images/5.jpg') },
    { id: 6, src: require('../assets/images/6.jpg') },
    { id: 7, src: require('../assets/images/7.jpg') },
    { id: 8, src: require('../assets/images/8.jpg') },
    { id: 9, src: require('../assets/images/9.jpg') },
    { id: 10, src: require('../assets/images/10.jpg') },
])

export const catList = ref([
    { id: 1, name: '小鸡腿', src: require('../assets/images/1.jpg') },
    { id: 2, name: '福宝', src: require('../assets/images/2.jpg') },
    { id: 3, name: '', src: '' },
])

export const dogList = ref([
    { id: 1, name: '小鸡腿', src: require('../assets/images/1.jpg') },
    { id: 2, name: '福宝', src: require('../assets/images/2.jpg') },
    { id: 3, name: '', src: '' },
])