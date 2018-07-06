import *as Types from './mutations-types';
const mutations={
  [Types.ADD_CART](state,book){
    //book是添加一本书 如果有这本书累加的是数量 如果没有 数量为1  放到cartList
    let product=state.cartList.find(item=>item.bookId===book.bookId);
    if(product){
      product.bookCount+=1;
      state.cartList=[...state.cartList]//改完还要替换原来的，否则不会刷新
    }else{
       book.bookCount=1;
       //将原有数据改变或者 可以替换
      //用新数组替换老数组
       state.cartList=[...state.cartList,book]
    }
  },
  [Types.CHANGE_CART](state,payload) {
    let book = payload[0].item;
    let n = payload[0].n;
   /* console.log(payload[0])
    console.log(n)*/
    book = state.cartList.find(item=> item.bookId === book.bookId);
    book.bookCount = book.bookCount + n;
    state.cartList = [...state.cartList]//改完还要替换原来的，否则不会刷新

  },
  [Types.REMOVE_CART](state,book){
    state.cartList=state.cartList.filter(item=>item.bookId!==book.bookId);
    state.cartList=[...state.cartList];
  },
  [Types.CLEAR_CART](state){
    state.cartList=[];
    state.cartList=[...state.cartList];
  }
};
export default mutations;
