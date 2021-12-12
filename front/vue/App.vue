<template>
   <div class="main">
        <HeaderTMP/>
        <div class="container">
       <router-view></router-view>
       </div>
   </div>
</template>

<script>
import HeaderTMP from './components/header.vue'
export default {
    components:{
        HeaderTMP
    }
}
</script>

<style scoped>
.main{
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin: 30px 0 0 0 ;
}
.container{
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
}
</style>
