export default {
    state: () => ({
        productsInBasket:[]
      }),
      mutations: {
        addToBasket(state,newProd){
            return state.productsInBasket = [...state.productsInBasket,newProd]
         },
         removeInBasket(state,id){
             return state.productsInBasket = state.productsInBasket.filter(i=>i.id !== id)
         },
         clearBasket(state){
             return state.productsInBasket = []
         }
      },
      actions:{
        fetchProduct({commit},product){
            commit('addToBasket',product)
        },
        removeProduct({commit},id){
            commit('removeInBasket',id)
        },
        clearBasket({commit}){
            commit('clearBasket')
        }
      },
      getters:{
            inBasket(state){
                return state.productsInBasket 
            },
            count:s=>s.productsInBasket.length
        }
}