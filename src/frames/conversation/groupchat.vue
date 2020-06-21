<template>

  <div class="chat-box">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0;visibility:hidden">
      <defs>

        <symbol viewBox="0 0 1024 1024" id="me">
          <path d="M957.824835 821.484633c-0.305969-1.723248-3.442402-17.366529-19.25146-35.833113-20.001543-23.362081-50.655703-40.8555-91.112114-51.993165-0.587378-0.161682-1.188058-0.288572-1.790786-0.379647-1.650593-0.248663-163.254178-25.28385-220.326011-92.034113-2.527566-19.522636-0.701988-35.291784 1.068332-50.574862 0.072655-0.626263 0.145309-1.251503 0.216941-1.87265 9.697873-13.420661 40.801265-60.795645 33.688263-107.362216 6.393617-6.949272 17.23657-18.886139 25.795503-29.091572 16.386202-19.539009 24.845874-68.289316 20.924565-95.625918-1.553379-10.830673-5.03569-18.475793-10.616802-23.260773-1.484817-1.576915-3.347235-3.047406-5.54939-4.182252 3.569292-30.333866 8.676613-88.126106 1.88186-128.891556-0.249687-1.499144-0.720408-2.952238-1.396813-4.312212-1.930979-3.8814-48.14758-95.228875-123.903961-110.519116-0.595564-0.119727-1.197268-0.204661-1.803066-0.25378l-57.809637-4.66423c-1.305739-0.106424-2.622734-0.042979-3.914146 0.186242-1.172709 0.207731-29.002544 5.179976-53.891398 12.71151-0.575098 0.173962-1.13894 0.381693-1.689479 0.621147-3.680832 1.604544-90.439802 40.014342-116.210745 101.18554-0.611937 1.453095-0.9967 2.992147-1.139963 4.561899-0.38374 4.196579-7.867178 87.719854-1.856277 141.643997-5.666046 1.119497-11.311627 3.77293-16.85283 7.9296-2.926656 2.194992-4.973268 5.363148-5.770424 8.933463-0.331551 1.483794-7.80271 36.791951 18.690688 79.614246 0.938372 1.574868 7.179516 11.856026 16.288988 22.172999 10.175757 11.523451 20.377096 19.125593 30.465872 22.728654 1.236154 19.537985 7.807826 56.57553 36.570917 99.440803 1.208525 27.927049-1.034563 57.239656-4.982478 64.559365-9.533121 7.714705-73.933873 56.733119-198.838627 81.570807-0.225127 0.045025-0.448208 0.094144-0.671289 0.149403-3.615341 0.88823-89.076758 22.51683-135.879714 87.850837-1.867534 2.606361-2.871397 5.732561-2.871397 8.93858l0 101.936647c0 8.477069 6.872524 15.349593 15.349593 15.349593l862.07305 0c8.477069 0 15.349593-6.872524 15.349593-15.349593L958.060195 824.165696C958.060195 823.267233 957.981401 822.369793 957.824835 821.484633zM927.361009 912.021649 95.987145 912.021649 95.987145 830.508147c39.567157-51.413973 110.22952-70.702272 115.117854-71.983451 143.731542-28.66383 211.175607-87.11815 213.979466-89.594551 0.545422-0.481977 1.055029-1.001817 1.52575-1.555425 5.227048-6.14086 11.391445-17.937534 12.669554-54.962799 0.645706-18.694781-0.270153-35.297924-0.310062-35.995819-0.159636-2.835581-1.103124-5.569856-2.724041-7.90197-36.796044-52.897767-33.863249-95.277994-33.726126-96.972589 0.550539-4.579295-1.000793-9.060353-4.204765-12.382005-3.217275-3.334955-7.780197-4.928243-12.397355-4.52813-0.152473 0.013303-0.304945 0.019443-0.465604 0.019443-9.656941 0-25.885554-18.795065-33.877575-32.343639-0.064468-0.109494-0.12996-0.218988-0.197498-0.327458-13.406335-21.61939-15.530718-39.839357-15.465227-49.545416 3.562129 6.953366 11.589966 9.607822 18.949584 6.736425 7.529487-2.938935 11.20111-11.770068 8.766664-19.47761-10.17985-32.237215-5.281283-120.123868-2.284019-154.531516 21.065781-46.078455 90.473571-78.858022 98.514711-82.528622 19.339464-5.77861 41.082674-10.028401 47.53155-11.236925l54.842049 4.423753c55.184857 11.755742 93.943602 79.576383 100.614535 91.978854 7.821129 51.801806-4.865821 136.258337-4.996804 137.117914-1.006933 6.605442 2.37407 13.103436 8.361435 16.068977 3.361561 1.663896 7.110955 2.000564 10.573823 1.127683 0.738827 6.235005 0.88516 16.449647-1.111311 30.193673-2.998287 20.642133-8.731872 35.118845-13.083993 40.308031-12.163017 14.502295-29.906124 33.475416-30.083156 33.665751-3.592828 3.838422-4.971222 9.248641-3.65218 14.338566 10.748808 41.497113-28.667923 92.313475-29.05371 92.804662-1.785669 2.25946-2.90005 4.975315-3.215228 7.838525-0.212848 1.935072-0.440022 3.891633-0.669242 5.875824-2.02717 17.512862-4.326539 37.361933-0.321318 62.911842 0.409322 2.611477 1.485841 5.072529 3.1262 7.145747 60.479443 76.464509 225.829352 103.861486 241.439888 106.295931 40.882106 11.402701 62.537312 28.209482 73.52148 40.3418 9.484002 10.474562 12.777001 19.306718 13.677511 22.242584L927.359986 912.021649z" p-id="18757" fill="#979797"></path>
        </symbol>
        <symbol viewBox="0 0 1024 1024" id="melight">
          <path d="M853.517187 762.672156c0 0-186.91097-18.107403-238.321874-105.935728-5.354961-27.669176-6.127558-48.231491-4.02978-67.306942 0 0 35.626405-74.254168 39.45357-117.713982 0 0 12.800537-13.599739 25.972535-29.305443 17.845437-21.278629 29.30749-89.318258 15.010879-98.849332 0 0-7.232728-10.326183-16.400528-0.843204 0 0 14.33345-93.878111 4.802376-151.064554 0 0-21.162995-75.43404-61.353346-94.233198 0 0-64.264653-27.848255-106.977453-23.613814-24.548092 2.433422-70.857814 13.831007-96.297206 21.529339 0 0-73.887824 30.417777-86.160335 100.480482 0 0-7.471159 119.510908 6.825452 164.782997 0 0-9.720386-16.978696-28.782533-2.682086 0 0-7.074116 31.674397 17.624403 71.504544 0 0 18.255783 36.663014 46.104037 45.232181 0 0 8.032954 46.77021 47.127344 109.964484 0 0-0.070608 67.50751-13.066597 82.774215 0 0-50.127677 73.603345-216.893842 101.927437-35.495422 6.028297-80.653925 17.73185-122.287137 73.924663l0 106.696044 891.608737 0L957.475887 841.914942C957.478957 841.914942 948.036911 788.692786 853.517187 762.672156z" p-id="18917" fill="#fff"></path>
        </symbol>
      </defs>
    </svg>
    <header>
      <section class="goback" @click="goBackThing">
        <svg fill="#fff">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#back"></use>
        </svg>
      </section>
      {{receiverId}}聊天室
      <section class="members" @click="findMembers">
        <svg>
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#melight"></use>
        </svg>
      </section>
    </header>
    <div class="msg-box" ref="msg-box">
      <div class="crd" @click="chatRecord()">查看更多记录</div>
      <div
        v-for="(i,index) in list"
        :key="index"
        class="msg"
        :style="i.senderId == userId?'flex-direction:row-reverse':''"
      >
        <div class="user-head">
          <img :src="i.avatar" height="30" width="30" :title="i.username">
        </div>
        <div class="user-msg">
          <span :style="i.senderId == userId?' float: right;':''" :class="i.senderId == userId?'right':'left'">{{i.msg}}</span>
        </div>
      </div>
    </div>
    <div class="input-box">
      <input type="text" ref="sendMsg" v-model="contentText" @keyup.enter="sendText()" />

      <section class="emoji">
        <svg>
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#smile"></use>
        </svg>
      </section>
      <section class="photo">
        <svg fill="#10aeff">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#photo"></use>
        </svg>
      </section>
      <div class="btn" :class="{['btn-active']:contentText}" @click="sendText()">发送</div>


    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                ws: null,
                userId: this.$route.query.userId, // 当前用户ID
                receiverId:this.$route.query.receiverId,//群聊ID
                avatar: '', // 当前用户头像
                list: [], // 聊天记录的数组
                mainList: [],//接受返回的数据
                contentText: "", // input输入的值
            };
        },
        created:function(){
            this.axios({
                method: 'post',
                url: this.$store.state.baseurl+'user/getUnreadMsgList',
                data: {
                    sendName:this.userId,
                    acceptName:this.receiverId,
                },
                crossDomain: true
            }).then(response => {
                if (response.data.code == 200) {
                    this.mainList = response.data.data;
                    for(var x=this.mainList.length-1; x>-1;x--){
                        this.list=[
                            ...this.list,
                            {   senderId:this.mainList[x].sendUserId,
                                msg:this.mainList[x].msg,
                            }
                        ]
                    }
                    alert('test' + JSON.stringify(this.list));
                }
            })
                .catch(error => {
                });



        },
        mounted() {
            this.initWebSocket();
        },
        destroyed() {
            // 离开页面时关闭websocket连接
            this.ws.onclose(undefined);
        },
        methods: {
            // 返回
            goBackThing(){
                window.history.go(-1);
            },
            findMembers(){
                this.$router.push('/groupmembers');
            },
            // 发送聊天信息
            sendText() {
                let _this = this;
                _this.$refs["sendMsg"].focus();
                if (!_this.contentText) {
                    alert("return!");
                    return;
                }
                let chatMsg = {
                    senderId:_this.userId,
                    msg: _this.contentText,
                    receiverId:_this.receiverId,
                    msgId:''
                };


                _this.list = [
                    ..._this.list,
                    {   senderId:chatMsg.senderId,
                        msg:chatMsg.msg,
                    }
                ];

                let params = {
                    action:'2',
                    chatMsg:chatMsg,
                    extand:''
                };
                console.log("发送: "+JSON.stringify(params.chatMsg));
                _this.ws.send(JSON.stringify(params)); //调用WebSocket send()发送信息的方法
                _this.contentText = "";
                setTimeout(() => {
                    _this.scrollBottm();
                }, 500);
            },
            // 聊天记录
            chatRecord(){
                this.$router.push({ path: '/chatRecord', query: { userId:this.userId,receiverId:this.receiverId}});
            },
            // 进入页面创建websocket连接
            initWebSocket() {
                let _this = this;

                // 判断页面有没有存在websocket连接
                if (window.WebSocket) {

                    /*var serverHot =  window.location.hostname;
                    alert(serverHot);
                    let sip = '房间号'
                    // 填写本地IP地址 此处的 :9101端口号 要与后端配置的一致！*/
                    var url = 'ws://' + '106.53.58.194:9999/ws';//+ '/groupChat/' + sip + '/' + this.userId; // `ws://127.0.0.1/9101/groupChat/10086/聊天室`
                    let ws = new WebSocket(url);
                    _this.ws = ws;
                    ws.onopen = function() {
                        console.log("服务器连接成功: " + url);
                    };
                    ws.onclose = function() {
                        console.log("服务器连接关闭: " + url);
                    };
                    ws.onerror = function() {
                        console.log("服务器连接出错: " + url);
                    };
                    ws.onmessage = function(e) {
                        //接收服务器返回的数据
                        const data = JSON.parse(e.data);
                        const obj = JSON.parse(data);
                        console.log("接受: "+data);
                        _this.list = [
                            ..._this.list,
                            {   senderId:obj.chatMsg.senderId,
                                msg:obj.chatMsg.msg,
                            }
                        ];

                    };

                }
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
      background: #409eff;
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
      .members{

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
      .crd {
        padding: 0.5rem;
        font-size: 0.7rem;
        color: #409eff;
        text-align: center;
      }
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
            background: #53a8ff;
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
        height: 1.8rem;
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
      svg {
        @include widthHeight(1.7rem,1.7rem);
      }
    }
  }
</style>
