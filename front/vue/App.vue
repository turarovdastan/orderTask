<template>
   <div class="main">
        <HeaderTMP/>
        <div>
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
