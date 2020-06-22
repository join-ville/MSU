<template>
  <section class="child_page">
    <head-top crossover="设置头像"></head-top>
    <section class="changename">
      <div>
        <img :src="avatar" alt="" v-if="!avatarUrl" width="300px">
        <img width="300px" id="img1" :src="avatarUrl">
      </div>
      <ul>
        <li>
          <input type="file" id="file1" class=uploadbtn accept="image/*" @change="imgChange($event)">
          <button v-on:click="submit">提交</button>
        </li>
      </ul>
    </section>
  </section>
</template>
<script>
    import headTop from 'src/components/header/head'
    export default{
        name: "changeAvatar",
        data(){
            return{
                avatar: this.$store.state.head,
                avatarUrl: ''
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
            imgChange(e){
                var _this = this
                var file = e.target.files[0];
                var filesize = file.size;
                var filename = file.name;
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function (e) {
                    var imgcode = e.target.result;
                    _this.avatarUrl = imgcode;
                    console.log(_this.avatarUrl);
                }
            },
            submit(){
                this.axios({
                    method: 'post',
                    url: this.$store.state.baseurl+'user/home/setAvatar',
                    data: {
                        username: this.$store.state.username,
                        image: this.avatarUrl,
                        Token: this.$store.state.token
                    },
                    crossDomain: true
                }).then(response => {
                    if (response.data.code !== 200) {
                        this.$message.error("请求失败")
                    }
                    else{
                        this.$store.state.head = this.avatarUrl
                        localStorage.setItem('head',this.avatarUrl) //  本地存储更新userHeader

                        this.$message.success("修改成功！")
                        this.$router.go(-1)
                    }
                })
            }
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
