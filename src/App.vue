<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import storage from './storage'
export default  {
  name:  'App',
  components:{

  },
  data(){
    return {
      res:{}
    }
  },
  mounted(){
    // storage.setItem('a',{'abc':1},'user')
    // storage.clear('a','user')


    // 1.本地加载请求静态json文件的形式
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //     this.res =res
    // })

    // 2.通过easy-mock平台实现数据mock
    // 3.本地集成mockjs实现数据mock
    this.axios.get('/user/login').then((res)=>{
        this.res =res
    })
  }
}
</script>