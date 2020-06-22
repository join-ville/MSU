<template>

  <div class="chat-box">
    <header>
      <section class="goback" @click="goBackThing">
        <svg fill="#fff">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#back"></use>
        </svg>
      </section>
      与{{receiverId}}的聊天记录
    </header>
    <div class="msg-box" ref="msg-box">
      <div
        v-for="(i,index) in list"
        :key="index"
        class="msg"
        :style="i.senderId == userId?'flex-direction:row-reverse':''"
      >
        <div class="user-head">
          <img :src="i.avatar" alt="" height="55" width="55" :title="i.senderId">
        </div>
        <div class="user-msg">
          <span :style="i.senderId == userId?' float: right;':''" :class="i.senderId == userId?'right':'left'">{{i.msg}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                ws: null,
                userId: this.$route.query.userId, // 当前用户ID
                receiverId:this.$route.query.receiverId,//对方ID
                image:this.$route.query.image,
                avatar:'',
                list: [], // 聊天记录的数组
                mainList: [],//接受返回的数据
                contentText: "" // input输入的值
            };
        },
        created:function(){
            this.axios({
                method: 'post',
                url: this.$store.state.baseurl+'/group/getAllGroupMsg',
                data: {
                    username:this.userId,
                    groupName:this.receiverId,
                    Token:this.$store.state.token
                },
                crossDomain: true
            }).then(response => {
                if (response.data.code == 200) {
                    this.mainList = response.data.data;

                    for(var x=this.mainList.length-1; x>-1;x--){
                        for(var y=this.image.length-1; y>-1;y--){
                            if(this.image[y].username==this.mainList[x].sendUserId){
                                this.avatar=this.image[y].image;
                                break;
                            }
                        }
                        this.list=[
                            ...this.list,
                            {   senderId:this.mainList[x].sendUserId,
                                msg:this.mainList[x].msg,
                                avatar:this.avatar,
                            }
                        ]

                    }
                    alert(JSON.stringify(this.list));
                }
            })
                .catch(error => {
                });



        },
        mounted() {
        },
        destroyed() {
            // 离开页面时关闭websocket连接

        },
        methods: {
            // 返回
            goBackThing(){
                this.$route.path == '/singlechat' ? this.$router.push('/dialogue') : window.history.go(-1);
            },

            // 滚动条到底部
            scrollBottm() {
                let el = this.$refs["msg-box"];
                el.scrollTop = el.scrollHeight;
            }
        }
    };
</script>

<style lang="scss" scoped>
  @import "../../style/public";
  .chat-box {
    margin: 0 auto;
    background: #fafafa;
    position: absolute;
    height: 100%;
    width: 100%;
    max-width: 700px;
    header {
      position: fixed;
      width: 100%;
      height: 3rem;
      background: #373b3e;
      max-width: 700px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      color: white;
      font-size: 1rem;
      .goback{
        @include widthHeight(1rem,1rem);
        svg{
          @include widthHeight(100%,100%);
        }

      }
    }

    .msg-box {
      position: absolute;
      height: calc(100% - 6.5rem);
      width: 100%;
      margin-top: 3rem;
      overflow-y: scroll;
      .msg {
        width: 95%;
        min-height: 2.5rem;
        margin: 1rem 0.5rem;
        position: relative;
        display: flex;
        justify-content: flex-start !important;
        .user-head {
          min-width: 2.5rem;
          width: 20%;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          background: #f1f1f1;
          display: flex;
          justify-content: center;
          align-items: center;
          .head {
            width: 1.2rem;
            height: 1.2rem;
          }
          // position: absolute;
        }
        .user-msg {
          width: 80%;
          // position: absolute;
          word-break: break-all;
          position: relative;
          z-index: 5;
          span {
            display: inline-block;
            padding: 0.5rem 0.7rem;
            border-radius: 0.5rem;
            margin-top: 0.2rem;
            font-size: 0.88rem;
          }
          .left {
            background: white;
            animation: toLeft 0.5s ease both 1;
          }
          .right {
            background: #46bf18;
            color: white;
            animation: toright 0.5s ease both 1;
          }
          @keyframes toLeft {
            0% {
              opacity: 0;
              transform: translateX(-10px);
            }
            100% {
              opacity: 1;
              transform: translateX(0px);
            }
          }
          @keyframes toright {
            0% {
              opacity: 0;
              transform: translateX(10px);
            }
            100% {
              opacity: 1;
              transform: translateX(0px);
            }
          }
        }
      }
    }
    .input-box {
      padding: 0 0.5rem;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 3.5rem;
      background: #fafafa;
      box-shadow: 0 0 5px #ccc;
      display: flex;
      justify-content: space-between;
      align-items: center;
      input {
        height: 2.3rem;
        display: inline-block;
        width: 100%;
        padding: 0.5rem;
        border: none;
        border-radius: 0.2rem;
        font-size: 0.88rem;
      }
      .btn {
        height: 2.3rem;
        min-width: 4rem;
        background: #e0e0e0;
        padding: 0.5rem;
        font-size: 0.88rem;
        color: white;
        text-align: center;
        border-radius: 0.2rem;
        margin-left: 0.5rem;
        transition: 0.5s;
      }
      .btn-active {
        background: #409eff;
      }
    }
  }
</style>
