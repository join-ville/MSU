<template>
  <section>
    <head-top crossover="true" search="true">
      <section slot="searchpart">
        <section class="searchpart" >
          <div class="searchpart_svg">
            <svg fill="#fff">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search"></use>
            </svg>
          </div>
          <div class="searchpart_input">
            <input type="text" :placeholder="reminder" v-model="username"/>
          </div>
        </section>
      </section>
    </head-top>
    <section v-if = "password_wrong_show"class="error">
      <div style="color: red">
        {{error_img}}
      </div>
    </section>
      <section class="search">
      <div class="login_botton" @click="find">
        搜索
      </div>
    </section>
  </section>
</template>

<script>
  import headTop from 'src/components/header/head'
  import {searchList} from 'src/service/getData.js'
  export default{
    data(){
      return{
        reminder:"搜索用户名", //
        searchlist:[],		//搜索字段数据
        username:'',
        password_wrong_show: false,
        error_img: '',
      }
    },
    created(){

    },
    mounted(){
      searchList().then(res => {
        this.searchlist=res;
      })
    },
    components:{
      headTop,
    },
    computed:{

    },
    methods:{
      find(){
        if(this.username){
          this.axios({
            method: 'post',
            url:this.$store.state.baseurl+'friend/find',
            data: {
              username: this.username,
              Token:localStorage.getItem('token'),
            },
            crossDomain: true
          }).then(body => {
            console.log(body.data)
            this.info = body
            // 错误信息
            if (this.info.data.code !== 200) {
              console.log(this.info)
              var that = this
              this.password_wrong_show = true
              this.error_img = 'request fail!'
              setTimeout(function () {
                that.password_wrong_show = false
              }, 2000)
            }
            /*else if(typeof this.info.data.data[0].username === 'undefined'){
              console.log( this.info.data.data[0].username)
              var that = this
              this.password_wrong_show = true
              this.error_img = '未查询到相关用户'
              setTimeout(function () {
                that.password_wrong_show = false
              }, 2000)

            }*/
            else{
                if(!body.data.data.username) {
                    this.$message.error('无结果')
                }
                else {
                    console.log(this.info.data.data.username)
                    this.$router.push({
                        //path后面跟跳转的路由地址
                        path: '/searchResult',
                        //name后面跟跳转的路由名字（必须有亲测，不使用命名路由会传参失败）
                        name: 'searchResult',
                        params: {
                            //imgsListsUrl2是自己定义的名字，this.imgsListsUrl是要被传递的值
                            username: this.info.data.data.username,
                        }
                    })
                }



            }
          })
        }
        else {
          var that = this
          this.password_wrong_show = true
          this.error_img = '请填写要搜索的用户名'
          setTimeout(function () {
            that.password_wrong_show = false
          }, 2000)
        }
      },
      changeValue(title){
        this.reminder = "搜索"+title
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "src/style/public";
  .searchpart{
    @include widthHeight(12rem,1.2rem);
    border-bottom:1px solid #45c01a;
    @include justify(flex-start);
    align-items:center;
    .searchpart_svg{
      @include widthHeight(.8rem,.8rem);
      margin-right:0.4693333333rem;
      svg{
        @include widthHeight(100%,100%);

      }
    }
    .searchpart_input{
      input{
        display:block;
        width:10rem;
        line-height:1rem;
        background:none;
        @include sizeColor(0.615rem,#fff);
      }
    }
  }
  .login_botton{
    width: 100px;
    margin: 0 auto;
    text-align:center;
    background:#1aad19;
    border-radius:5px;
    line-height:1.6rem;
    @include sizeColor(.7rem,#fff);
  }
  .search{
    padding-top:4.5rem;
    h1{
      width:100%;
      text-align:center;
      @include sizeColor(0.6rem,#b1b1b1);
      padding-bottom:2.1333333333rem;
    }
    ul{
      width:12.8rem;
      margin:0 auto;
      box-sizing:border-box;
      li{
        float:left;
        width:33.33%;
        border-right:1px solid #dadada;
        text-align:center;
        @include sizeColor(0.6rem,#45c01a);
        margin-bottom:2.24rem;
      }
      li:nth-of-type(3n+3){
        border-right:0;
      }
    }
  }
  .error{
    padding-top:2.5rem;
    h1{
      width:100%;
      text-align:center;
      @include sizeColor(0.6rem,#b1b1b1);
      padding-bottom:0rem;
    }
    ul{
      width:12.8rem;
      box-sizing:border-box;
      li{
        float:left;
        width:33.33%;
        border-right:1px solid #dadada;
        text-align:center;
        @include sizeColor(0.6rem,#45c01a);
        margin-bottom:0rem;
      }
      li:nth-of-type(3n+3){
        border-right:0;
      }
    }
  }
</style>
