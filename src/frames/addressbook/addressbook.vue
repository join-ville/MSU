<template>
  <section>
    <head-top logo-part="true"
              search-part="true"
              add="true"></head-top>
    <!-- 联系人列表 -->
    <section class="contacts"
             ref="contactList">
      <div class="contacts_top">
        <ul>
          <router-link to=""
                       tag="li"
                       class="contacts_li" v-if="!newRequest">
            <div class="contacts_img">
              <svg>
                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                     xlink:href="#newfriend"></use>
              </svg>
            </div>
            <div class="contacts_text">
              新的朋友
            </div>
          </router-link>
          <section v-if="newRequest" class="contacts_li">
            <div class="contacts_img">
              <svg>
                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                     xlink:href="#newfriend"></use>
              </svg>
            </div>
            <div class="contacts_text" @click="gotDetail">
              新申请: {{this.RequestName}}
            </div>
            <div class="acc_botton" @click="acceptRequest">
              接受
            </div>
            <div class="refuse_botton" @click="refuseRequest">
              拒绝
            </div>
          </section>
          <router-link :to="{path:'/grouplist'}"
                       tag="li"
                       class="contacts_li">
            <div class="contacts_img">
              <svg>
                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                     xlink:href="#groupchat"></use>
              </svg>
            </div>
            <div class="contacts_text" >
              群聊
            </div>
          </router-link>
          <router-link to=""
                       tag="li"
                       class="contacts_li">
            <div class="contacts_img">
              <svg>
                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                     xlink:href="#label"></use>
              </svg>
            </div>
            <div class="contacts_text">
              标签
            </div>
          </router-link>
          <router-link to=""
                       tag="li"
                       class="contacts_li">
            <div class="contacts_img">
              <svg>
                <use xmlns:xlink="http://www.w3.org/1999/xlink"
                     xlink:href="#accounts"></use>
              </svg>
            </div>
            <div class="contacts_text">
              公众号
            </div>
          </router-link>
        </ul>
      </div>
      <div class="contacts_bottom"
           ref="addlistfather">
        <ul class="contacts_bottom_ul"
            ref="addlist">
          <li v-for="(value, key, index) in manageaddress"
              :key="index"
              class="addlistLi">
            <h1>{{key}}</h1> <!--the first letter -->
            <ul>
              <router-link :to="{name: '/addressbook/details', params: {username: item.username,
                                                                                      nickname: item.nickname,
                                                                                      faceImage: item.faceImage,
                                                                                      sign: item.userSignature,
                                                                                      gender: item.gender
                                                                                      }}"
                           style="cursor: pointer"
                           tag="li"
                           v-for="(item, indexLink) in value"
                           :key="indexLink"
                           @click.native='detailMessage(item)'>
                <div class="personlist_img">
                  <img :src="item.faceImage"
                       alt="">
                </div>
                <div class="personlist_name ellipsis">
                  {{item.username}}
                </div>
              </router-link>
              <!--                            <table>-->
              <!--                              <tr v-for="(item, indexLink) in value"-->
              <!--                                  :key="indexLink">-->
              <!--                                <div class="personlist_img">-->
              <!--                                  <img :src="item.newImg">-->
              <!--                                </div>-->
              <!--                                <div class="personlist_name ellipsis">-->
              <!--                                  <router-link :to="{path: '/addressbook/details', query: {username: item.username}}">-->
              <!--                                    {{item.username}}-->
              <!--                                  </router-link>-->
              <!--                                </div>-->
              <!--                              </tr>-->
              <!--                            </table>-->
            </ul>
          </li>
        </ul>
        <section class="guide_wipe">
          <section class="list_guide">
            <dl>
              <dd v-for="(value, index) in sortlist"
                  :key="index"
                  @touchstart="startThing(value)"
                  @touchend="endThing">{{value}}</dd>
            </dl>
            <p>#</p>
          </section>
        </section>
        <section class="big-letter"
                 v-if="letter">
          <div class="letter-bg"></div>
          <div class="letter">
            {{atpresent}}
          </div>
        </section>
        <section class="peoplenum">{{peoplenum}}位联系人</section>
      </div>

    </section>

    <foot-guide></foot-guide>
    <transition name="router-show">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
    import headTop from 'src/components/header/head'
    import footGuide from 'src/components/footer/foot'
    import { animate } from 'src/config/mUtils.js'
    import { mapMutations } from 'vuex'
    export default {
        inject: ['reload'],
        data() {
            return {
                contactList: {},		//所有通讯录列表
                peoplenum: 0,		//通讯录人数
                letter: false,		//字母放大
                newRequest:false,
                RequestName:'join11',
            }
        },
        created() {
            //console.log('created'+this.$store.state.username)
            //this.$store.dispatch('changeUsername',localStorage.getItem('username'))
            //console.log('created'+this.$store.state.username)
            this.axios({
                method: 'post',
                url: this.$store.state.baseurl+'/friend/viewMyFriends',
                data: {
                    // username:'ruwo',
                    // Token:'123456'
                    username: localStorage.getItem('username'),
                    Token: localStorage.getItem('token'),
                },
                crossDomain: true
            })
                .then(response => {
                    if (response.data.code == 200)
                        this.contactList = response.data.data
                    console.log(this.contactList)
                })
                .catch(error => {
                })
        },
        beforeMount() {


        },
        mounted() {
            //console.log('1111'+this.$store.state.username)
            //this.$store.dispatch('changeUsername',localStorage.getItem('username'))
            //console.log('1111'+this.$store.state.username)
            this.viewRequest()
            // contactList().then((res) => {
            //     this.contactList = res;



            // })
        },
        components: {
            headTop,
            footGuide
        },
        computed: {
            token(){
                return this.$store.state.token
            },
            username(){
                return this.$store.state.username
            },
            manageaddress() {

                let addresslist = {};
                for (let i = 65; i <= 90; i++) {
                    if (this.contactList[String.fromCharCode(i)]) {
                        if ((this.contactList[String.fromCharCode(i)].length) > 0) {
                            addresslist[String.fromCharCode(i)] = this.contactList[String.fromCharCode(i)];
                            this.peoplenum += Number(this.contactList[String.fromCharCode(i)].length)
                        }
                    }
                }
                return addresslist
            },
            sortlist() {
                let sortnumlist = [];
                for (let i = 65; i <= 90; i++) {
                    sortnumlist.push(String.fromCharCode(i))
                }
                return sortnumlist
            },


        },
        methods: {
            ...mapMutations([
                'SAVE_MESSAGE'
            ]),
            GoToDetail : function(item){
                const that=this
                that.$router.push({ path: '/addressbook/details', params: { username:  item.username}})
            },
            viewRequest(){
                this.axios({
                    method: 'post',
                    url: this.$store.state.baseurl+'friend/viewRequest',
                    data: {
                        username: localStorage.getItem('username'),
                        Token:localStorage.getItem('token'),
                    },
                    crossDomain: true
                }).then(body => {
                    console.log(body.data)
                    this.info = body
                    // 错误信息
                    if (this.info.data.code === 200) {
                        this.newRequest = true
                        this.RequestName = this.info.data.data[0].sendUserName
                        /*var that = this
                        this.password_wrong_show = true
                        this.error_img = 'request fail!'
                        setTimeout(function () {
                          that.password_wrong_show = false
                        }, 2000)*/
                    }

                })
            },
            acceptRequest(){
                this.axios({
                    method: 'post',
                    url: this.$store.state.baseurl+'friend/acceptRequest',
                    data: {
                        sendName:this.RequestName ,
                        acceptName: localStorage.getItem('username'),
                        Token:localStorage.getItem('token'),
                    },
                    crossDomain: true
                }).then(body => {
                    console.log(body.data)
                    this.info = body
                    // 错误信息
                    if (this.info.data.code !== 200) {
                        console.log(this.info)
                        /*var that = this
                        this.password_wrong_show = true
                        this.error_img = 'request fail!'
                        setTimeout(function () {
                          that.password_wrong_show = false
                        }, 2000)*/
                    }
                    else{
                        this.newRequest = false
                        this.reload()
                    }
                })
            },
            refuseRequest(){
                this.axios({
                    method: 'post',
                    url: this.$store.state.baseurl+'friend/refuseRequest',
                    data: {
                        sendName: this.RequestName,
                        acceptName: localStorage.getItem('username'),
                        Token:localStorage.getItem('token'),
                    },
                    crossDomain: true
                }).then(body => {
                    console.log(body.data)
                    this.info = body
                    // 错误信息
                    if (this.info.data.code !== 200) {
                        console.log(this.info)
                        /*var that = this
                        this.password_wrong_show = true
                        this.error_img = 'request fail!'
                        setTimeout(function () {
                          that.password_wrong_show = false
                        }, 2000)*/
                    }
                    else{
                        this.newRequest = false
                    }
                })
            },

            detailMessage(item) {
                // this.SAVE_MESSAGE(item);
                // this.$store.state.gotoDetail=item.username
                //this.$router.push({ name: 'addressbook/details', params: { username: item.username}});
                // console.log(item)
            },
            startThing(value) {
                this.letter = true;
                this.atpresent = value;
                this.$nextTick(() => { //滚动到通讯录分组的地方
                    const listArray = this.$refs.addlist.getElementsByClassName("addlistLi");
                    const getBody = document.getElementsByTagName("body")[0];
                    for (let i = 0; i < listArray.length; i++) {
                        if (listArray[i].getElementsByTagName("h1")[0].innerText == value) {
                            if (this.$refs.addlistfather.offsetTop + this.$refs.addlistfather.offsetHeight + 100 >= listArray[i].offsetTop + document.body.clientHeight) {
                                console.log(this.$refs.addlistfather.offsetTop)
                                console.log(this.$refs.addlistfather.offsetHeight)
                                console.log(listArray[i].offsetTop)
                                console.log(document.body.clientHeight)

                                animate(getBody, { scrollTop: listArray[i].offsetTop - 50 });
                            } else {
                                console.log(1);
                                var scrollval = this.$refs.addlistfather.offsetTop + this.$refs.addlistfather.offsetHeight;
                                animate(getBody, { scrollTop: scrollval });
                            }


                        }
                    }

                })
            },
            endThing() {
                this.letter = false
            },
            gotDetail() {
                this.$router.push({
                    path: '/searchResult',
                    query: {username: this.RequestName}
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
  @import "../../style/public";
  .router-show-enter-active,
  .router-show-leave-active {
    transition: all 0.4s;
  }
  .router-show-enter,
  .router-show-leave {
    transform: translateX(100%);
  }
  .acc_botton{
    width: 50px;
    margin-left: 0px;
    text-align:center;
    background:#1aad19;
    border-radius:5px;
    line-height:1.6rem;
    @include sizeColor(.7rem,#fff);
  }
  .refuse_botton{
    width: 50px;
    margin-left: 10px;
    text-align:center;
    background: orangered;
    border-radius:5px;
    line-height:1.6rem;
    @include sizeColor(.7rem,#fff);
  }
  .contacts {
    width: 100%;
    background: #fff;
    padding-top: 2.06933rem;
    .contacts_top {
      ul {
        width: 14rem;
        margin: 0 auto;
        -webkit-overflow-scrolling: touch;
        .contacts_li {
          width: 100%;
          margin: 0.3413333333rem 0;
          border-bottom: 1px solid #e0e0e0;
          @include justify(flex-start);
          align-items: center;
          .contacts_img {
            @include widthHeight(1.5786666667rem, 1.5786666667rem);
            svg {
              @include widthHeight(100%, 100%);
            }
          }
          .contacts_text {
            @include sizeColor(0.64rem, #2a2a2a);
            margin-left: 0.5333333333rem;
            margin-right: 100px;
          }
        }
        .contacts_li:last-child {
          border: 0;
        }
      }
    }
    .contacts_bottom {
      .contacts_bottom_ul {
        li {
          width: 100%;
          h1 {
            display: block;
            background: #ebebeb;
            line-height: 0.9813333333rem;
            padding-left: 0.5973333333rem;
            @include sizeColor(0.384rem, #8a8a8a);
          }
          ul {
            width: 14rem;
            margin: 0 auto;
            li {
              padding: 0.3413333333rem 0;
              @include justify(flex-start);
              border-bottom: 1px solid #e0e0e0;
              align-items: center;
              .personlist_img {
                @include widthHeight(
                    1.5786666667rem,
                    1.5786666667rem
                );
                img {
                  @include widthHeight(100%, 100%);
                }
              }
              .personlist_name {
                @include sizeColor(0.64rem, #2a2a2a);
                margin-left: 0.5333333333rem;
                width: 12.6rem;
              }
            }
            li:last-child {
              border: 0;
            }
          }
        }
      }
      .guide_wipe {
        position: fixed;
        width: 30px;
        height: 100%;
        top: 0;
        right: 0;
        .list_guide {
          position: fixed;
          z-index: 10;
          top: 50%;
          transform: translateY(-50%);
          right: 0.2986666667rem;
          dl {
            dd {
              @include sizeColor(0.58rem, #585858);
              text-align: center;
            }
          }
          p {
            @include sizeColor(0.54rem, #585858);
          }
        }
      }

      .big-letter {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 3.3706666667rem;
        height: 3.3706666667rem;
        .letter-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 3.3706666667rem;
          height: 3.3706666667rem;
          background: #000;
          opacity: 0.6;
          border-radius: 5px;
        }
        .letter {
          position: relative;
          z-index: 10;
          width: 3.3706666667rem;
          line-height: 3.3706666667rem;
          text-align: center;
          font-size: 2rem;
          color: #fff;
          font-family: SimSun !important;
        }
      }
    }
  }
  .peoplenum {
    padding-bottom: 3rem;
    text-align: center;
    margin-top: 0.5rem;
    @include sizeColor(0.6rem, #666);
  }
</style>
