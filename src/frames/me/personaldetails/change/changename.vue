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
    import {mapState, mapActions} from "vuex";
    export default{
        name: "changename",
        data(){
            return{
                // userInfo:{},
                tempName: ''

            }
        },
        created(){
          // this.getUserInfo();

        },
        mounted(){
          // this.userInfo=this.userInfo;
            this.tempName = this.$store.state.nickname
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
                this.$axios
                    .post('http://106.53.58.194:8088/msu_im/user/home/setNickname' , {

                    })
                    .then(successResponse => {
                        if (successResponse.data.code === 200) {
                            this.$message({
                                type: 'success',
                                message: '设置成功！'
                            })
                            this.$router.go(-1)
                        } else {
                            this.$message({
                                type: 'error',
                                message: '设置失败！请重试'
                            })
                        }
                    })
                    .catch(failResponse => {
                        this.$message({
                            type: 'error',
                            message: '服务器未响应'
                        })
                    })
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
