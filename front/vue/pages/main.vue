<template>
<div>
    <div class="title-container">
          <div class="title">
                Каталог
          </div>
    </div>

    <div class="main-products">
        <div class="products">
            <Card v-for="i of DATA" :key="i.id" :card="i"/>
        </div>
    </div>

</div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
    mounted(){
        this.$store.dispatch('fetchProducts')
    },
    components:{
        Card
    },
    data:()=>({
        urls:'',
        rt:1
    }),
    methods:{
        render(id=1){
        return this.rt = id
    },
    },
    computed:{           
        DATA(){
            return  this.$store.getters.allProducts.filter(i=>i.category === this.rt)
        },
    },
}
</script>

<style scoped>
.modal{
  position: absolute;
  width: 160px;
top: 40px;
/* white */
display: flex;
flex-direction: column;
padding: 10px 0;
background: #FFFFFF;
box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
border-radius: 8px;
}
.m-link{
  cursor: pointer;
 font-family: PT Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
padding:5px 10px ;
/* grey-light */
color: #959DAD;
}
.m-link:hover{
  color: #1F1F1F;
  background: #F8F8F8;
}

.title-container{
  display: flex;
  align-items: center;
  justify-content: space-between;
    width: 100%;
    margin-top: 66px;
}
.active{
  font-family: PT Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 21px;
/* grey */
color: #59606D;
}
.des{
  font-family: PT Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 21px;
/* identical to box height */
display: flex;
align-items: flex-end;
/* black */
color: #1F1F1F;
}
.title{
  font-family: PT Sans;
font-style: normal;
font-weight: bold;
font-size: 32px;
line-height: 41px;
/* black */
color: #1F1F1F;
}
.main-products{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 20px;
    margin: 20px 0 0 0;
}
.link{
    cursor: pointer;
    font-family: PT Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 21px;
/* grey-light */
color: #959DAD;
}
.nav{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.active-link{
text-decoration-line: underline;
/* black */
color: #1F1F1F;
}
.products{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;
    grid-gap: 10px;
}
.link:hover{
    color: #59606D;
}
@media screen and (max-width:1125px) {
  .products{
      grid-template-columns: 1fr 1fr 1fr;
  }
}
@media screen and (max-width:1000px) {
  .products{
      grid-template-columns: 1fr 1fr ;
  }
}
@media screen and (max-width:715px) {
  .products{
      grid-template-columns: 1fr  ;
  }
}
@media screen and (max-width:585px) {
  .nav{
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
  .main-products{
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }
}
</style>