<template>
  <section class="child_page">
    <head-top crossover="设置性别"></head-top>
    <section class="changename">
      <ul>
        <li>
          <div>
            <input type="radio" name="radios" value="0" v-model="param">
            <label>男</label>
          </div>
        </li>
        <li>
          <div>
            <input type="radio" name="radios" value="1" v-model="param">
            <label>女</label>
          </div>
        </li>
      </ul>
    </section>
  </section>
</template>
<script>
    import headTop from 'src/components/header/head'
    export default{
        name: "changesex",
        data(){
            return{
              param: '',
              temp: 0
            }
        },
        created(){

        },
        mounted(){
            this.param = this.$store.state.gender
        },
        watch:{
            'param'(){
                // console.log(this.param)
                if (this.temp !== 0) {
                    this.axios({
                        method: 'post',
                        url: 'http://106.53.58.194:8888/msu_im/user/home/setGender',
                        data: {
                            username: this.$store.state.username,
                            gender: this.param,
                            Token:  this.$store.state.token,
                        },
                        crossDomain: true
                    }).then(body => {
                        console.log(body.data)
                        this.info = body

                        var that = this

                        this.$store.state.gender = this.param
                        localStorage.setItem('gender',this.param)  // 本地存储更新gender

                        // 错误信息
                        if (this.info.data.code !== 200) {
                            console.log(this.info)
                            alert("请求失败")
                        }
                        else{
                            alert("修改成功")
                        }

                        this.$router.go(-1)
                    })
                }
                else this.temp = 1

            }
        },
        components:{
            headTop,
        },
        computed:{

        },
        methods:{

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
