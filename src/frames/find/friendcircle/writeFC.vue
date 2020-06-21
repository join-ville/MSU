<template>
  <section class="child_page">
    <head-top crossover="写动态"></head-top>
    <section class="changename">
      <ul>
        <li>
          <textarea v-model="pyq"></textarea>
          <button v-on:click="submit()" style="background-color: black;color:white">完成</button>
        </li>
      </ul>
    </section>
  </section>
</template>
<script>
    import headTop from 'src/components/header/head'
    export default{
        name: "writeFC",
        data(){
            return{
                pyq: '',
            }
        },
        created(){

        },
        mounted(){

        },
        components:{
            headTop,
        },
        computed:{

        },
        methods:{
            submit(){
                if (this.pyq.length > 150) {
                    this.$message.error("限制150字符以内！")
                }
                else {
                    this.axios({
                        method: 'post',
                        url: 'http://106.53.58.194:8888/msu_im/moment/publish',
                        data: {
                            username: this.$store.state.username,
                            text: this.pyq,
                            //
                            Token:  this.$store.state.token,
                        },
                        crossDomain: true
                    }).then(body => {
                        console.log(body.data)
                        this.info = body

                        var that = this

                        // this.$store.state.sign = this.tempText
                        // localStorage.setItem('sign',this.tempText)  // 本地存储更新signature

                        // 错误信息
                        if (this.info.data.code !== 200) {
                            console.log(this.info)
                            this.$message.error("请求失败")
                        }
                        else{
                            console.log("this.info.data.data.token")
                            this.$message.success("发送成功！")
                            this.$router.go(-1)
                        }
                    })
                }
            },
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
