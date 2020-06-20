<template>
  <section class="child_page">
    <head-top crossover="设置昵称"></head-top>
    <section class="changename">
      <ul>
        <li>
          <input type="text" v-model="tempName">
          <button v-on:click="submit(this)" style="background-color: black;color:white">完成</button>
        </li>
      </ul>
    </section>
  </section>
</template>
<script>
    import headTop from 'src/components/header/head'
    export default{
        name: "changename",
        data(){
            return{
                // userInfo:{},
                tempName: '',
                name: ''

            }
        },
        created(){
          // this.getUserInfo();

        },
        mounted(){
          // this.userInfo=this.userInfo;
            this.tempName = this.$store.state.nickname
            this.name = this.$store.state.nickname
        },
        components:{
            headTop,
        },
        computed:{
            // ...mapState([
            //     "userInfo",
            // ]),
        },
        methods:{
            submit(){
                // alert(this.tempName);
                if (this.tempName == this.name) {
                    alert("昵称未改变！")
                }
                else if (this.tempName.length > 20) {
                    alert("请使用20个字符以内的昵称！")
                }
                else {
                    this.axios({
                        method: 'post',
                        url: 'http://106.53.58.194:8888/msu_im/user/home/setNickname',
                        data: {
                            username: this.$store.state.username,
                            nickname: this.tempName,
                            Token:  this.$store.state.token,
                        },
                        crossDomain: true
                    }).then(body => {
                        console.log(body.data)
                        this.info = body

                        var that = this

                        this.nickName = body.data.data.nickname

                        this.$store.state.nickname = this.nickName
                        localStorage.setItem('nickname',this.nickName)  // 本地存储更新nickname

                        // 错误信息
                        if (this.info.data.code !== 200) {
                            console.log(this.info)
                            alert("请求失败")
                        }
                        else{
                            console.log("this.info.data.data.token")
                            this.$router.go(-1)
                        }
                    })
                }


            },
            // ...mapActions([
            //     'getUserInfo',
            // ])
        }
    }
</script>
<style lang="scss" scoped>
  @import "src/style/public";
  .child_page{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 203;
    background-color: #ebebeb;
  }
  .changename{
    padding-top: 3.06933rem;
    ul{
      background:#fff;
      padding:0 0.64rem;
      margin-bottom:1rem;
      li{
        border-bottom:1px solid #f1f1f1;
        padding:0.4266666667rem 0;
        @include sizeColor(0.64rem,#333);
        @include justify;
        align-items:center;
        .push-button{

        }
        .voice-music{
          @include sizeColor(0.512rem,#9c9c9c);
        }
      }
      li:last-child{
        border:0;
      }
    }
  }
</style>
