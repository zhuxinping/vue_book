<template>
    <div>
      <MHeader>购物车</MHeader>
      <ul class="content">
        <li v-for="(item,index) in cartList" :key="index">
          <img :src="item.bookCover" alt="">
          <h3 class="booktitle">{{item.bookName}}</h3>
         <div class="bookaction">
           <button @click="addBook({item,n:-1})">-</button>
           {{item.bookCount}}
           <button @click="addBook({item,n:1})">+</button>
           <p>小计:{{item.bookPrice*item.bookCount}}</p>
           <button @click="deleteCart(item)">删除</button>
         </div>
        </li>
      </ul>
      <ul class="sum">
        <li>共{{count}}本</li>
        <li>总价{{allPrice}}元</li>
      </ul>
      <button class="nothing" @click="clearAll">清空购物车</button>
    </div>
</template>
<script>
  import MHeader from '../base/MHeader.vue';
  //语法糖
  import {mapState,mapGetters,mapMutations} from 'vuex';
 /* mapState(['cartList'])*//*cartList(){return this.$store.state.cartList
          }*/
  import *as Types from '../store/mutations-types';
    export default {
        data() {
            return {}
        },
        methods: {
          ...mapMutations([Types.CHANGE_CART,Types.REMOVE_CART,Types.CLEAR_CART]),
          addBook(...args){
            this[Types.CHANGE_CART]({...args})
            //this.$store.commit(Types.CHANGE_CART,{...args})
          },
          deleteCart(item){
            this[Types.REMOVE_CART](item)
          },
          clearAll(){
            this[Types.CLEAR_CART]()
          }
        },
        computed: {
          ...mapGetters(['count','allPrice']),
          /*cartList(){
            return this.$store.state.cartList
          }*///跟下面的等价
          ...mapState(['cartList'])//对象展开映射状态出来
         // ...mapState({cart:'cartList'})//对象展开映射状态出来
        },
        components: {MHeader}
    }
</script>
<style scoped>
  img{
    width: 60%;
  }
  .booktitle{
    text-align: center;
  }
  .bookaction{
    display: flex;
    justify-content: space-around;
    margin: 5px 0;
  }
  .sum{
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 50px;
    background: orangered;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .sum li{
    padding: 5px 0;
    color:#fff;
    font-size: 14px;
  }
  .content{
    padding-bottom: 60px;
  }
  .content li{
    text-align: center;
  }
button{
  width: 60px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  outline: none;
  background: #007aff;
  border: none;
  color:#fff;
  font-size: 14px;
  border-radius: 5px;
}
  .nothing{
    position: fixed;
    width: 60px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    outline: none;
    background: #007aff;
    border: none;
    color:#fff;
    font-size: 14px;
    border-radius: 5px;
    right: 20px;
    bottom: 60px;
  }
</style>
