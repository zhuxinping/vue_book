let getters={
  count:(state)=>state.cartList.reduce((prev,next)=>prev+next.bookCount,0),
  allPrice:(state)=>state.cartList.reduce((prev,next)=>prev+next.bookPrice*next.bookCount,0)
};
export default getters;
