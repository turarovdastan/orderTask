<template>
   <div class="main">
       <h1>my first project on webpack</h1>
       <router-link to="/">to main</router-link>
        <router-link to="/foo">to foo</router-link>
        <router-link to="/bar">to bar</router-link>
        <div>
       <router-view></router-view>
       </div>
   </div>
</template>

<style>
h1{
    color: red;
}
</style>