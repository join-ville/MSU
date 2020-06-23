<template>
  <section>
    <head-top crossover="群聊资料"></head-top>
    <div class="details">
      <div class="details_li">
        <div class="details_left">
          <img :src="this.headurl" alt="">
        </div>
        <div class="details_right">
          <div class="details_right_top">
<!--            <span>{{this.remarks ? this.remarks : this.$route.params.username}}</span>-->
            <span>{{this.groupname}}</span>
<!--            <div class="sexsvg">-->
<!--              <svg>-->
<!--                <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href=" this.sex == 0 ? '#boy' : '#girl' "></use>-->
<!--              </svg>-->
<!--            </div>-->
          </div>
          <div class="details_right_obt">
            群聊号：{{this.id}}
          </div>
        </div>
      </div>
<!--      <div class="details_li">-->
<!--        <div class="setnote">-->
<!--          群聊名：{{this.groupname}}-->
<!--        </div>-->
<!--      </div>-->
      <div class="details_li">
        <li class="setnote">
          群主：{{this.username}}
        </li>
      </div>
      <div class="sendmessage"><!--  -->
        <section class="send" v-if="this.hasEntered">
          <router-link :to="{path:'/groupchat', query: {receiverId: this.groupname, userId: this.$store.state.username}}"
                       style="cursor: pointer" class="send">
            发送消息
          </router-link>
        </section>
        <section class="send" @click="sendRequest" v-else>
          申请入群
        </section>
      </div>
      <div>
        <section v-if="hasEntered">
          <span style="cursor:pointer">
            <div class="cancelgroup"><!--  -->
            <div class="send" v-on:click="cancelGroup">
              退出群聊
            </div>
          </div>
          </span>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
    import headTop from 'src/components/header/head'
    export default {
        inject: ['reload'],
        name: "groupdetails",
        components: {
          headTop
        },
        data() {
          return {
            groupname:'',
            username:'',
            id:'',
            hasEntered: false
          }
        },
        created() {
          this.groupname = this.$route.query.groupname
          this.username = this.$route.query.username
          this.id = this.$route.query.id
          this.hasEntered = this.$route.query.hasEntered
            console.log(this.hasEntered)
        },
        methods: {
          sendRequest() {
            this.axios({
              method: 'post',
              url: this.$store.state.baseurl+'group/joinGroup',
              data: {
                groupName: this.groupname,
                username: this.$store.state.username,
                Token:localStorage.getItem('token')
              },
              crossDomain: true
            })
            .then(response => {
                console.log(response)
              if(response.data.code == 200) {
                  this.$message.success("入群成功")
                  this.$router.go(-1)
              }

            })
          },
          cancelGroup() {
            this.axios({
              method: 'post',
              url:this.$store.state.baseurl+'group/deleteGroupUser',
              data:{
                  groupName: this.groupname,
                  username: this.$store.state.username,
                  Token: this.$store.state.token
              },
              crossDomain: true
            })
            .then(response => {
              if(response.data.code == 200)
              {
                this.$router.go('-1')
              }
            })
          }
        }
    }
</script>

<style lang="scss" scoped>
  @import "src/style/public";
  .router-show-enter-active,.router-show-leave-active{
    transition: all .4s;
  }
  .router-show-enter,.router-show-leave-active{
    transform:translateX(100%)
  }
  .child_page{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 203;
    background-color: #ebebeb;
  }
  .details{
    width:100%;
    padding-top:2.9226633rem;
  .details_li{
    padding:0.512rem 0.5973333333rem;
    background:#fff;
    margin-bottom:0.8533333333rem;
  @include justify(flex-start);
  .details_left{
    margin-right:1.024rem;
  img{
    display: block;
  @include widthHeight(2.7306666667rem,2.7306666667rem);
  }
  }
  .details_right{
  .details_right_top{
  @include justify(flex-start);
    align-items: center;
    margin-top:0.256rem;
    margin-bottom:0.4266666667rem;
  span{
    display:block;
  @include sizeColor(0.64rem,#000);
    margin-right:0.4266666667rem;
  }
  .sexsvg{
  @include widthHeight(.64rem,.90rem);
  @include align(top);
  svg{
  @include widthHeight(100%,.64rem);
  }
  }
  }
  .details_right_obt{
  @include sizeColor(0.512rem,#666);
  }
  }
  .setnote{
    display:block;
    width:100%;
  @include sizeColor(0.64rem,#000);
  }
  }
  .details_person{
    padding:0.512rem 0.5973333333rem;
    background:#fff;
  .details_person_top{
  @include justify(flex-start);
    border-bottom:1px solid #e2e2e2;
    padding-bottom:0.6826666667rem;
  .area_details_left{
  @include sizeColor(0.64rem,#000);
  }
  .area_details_right{
  @include sizeColor(0.512rem,#666);
    margin-left:2.432rem;
  @include align(center);
  }
  }
  .details_person_more{
  .clickmore{
    display:block;
    width:100%;
    padding-top:0.7253333333rem;
  @include sizeColor(0.64rem,#000);
  }
  }
  .person_photo{
    border-bottom:1px solid #e2e2e2;
  .details_person_a{
    display:block;
  @include justify(flex-start);
  .person_photo_left{
  @include sizeColor(0.64rem,#000);
  @include align(center);
  }
  .person_photo_right{
    margin-left:1.0666666667rem;
    padding:0.3413333333rem 0;
  img{
    float:left;
  @include widthHeight(2.56rem,2.56rem);
    margin-right:16px;
  }
  }
  }
  }
  }
  .sendmessage{
    width:14.1653333333rem;
    margin:0 auto;
    margin-top:0.8533333333rem;
  .send{
    display:block;
    border-radius:5px;
    text-align:center;
    width:14.1226666667rem;
    border:1px solid #3e8d3e;
    background:#1aad16;
  @include sizeColor(0.7253333333rem,#fff);
    letter-spacing:4px;
    line-height:2.0053333333rem;
  }
  }
  }
  .cancelgroup{
    width:14.1653333333rem;
    margin:0 auto;
    margin-top:0.8533333333rem;
    .send{
      display:block;
      border-radius:5px;
      text-align:center;
      width:14.1226666667rem;
      border:1px solid #FF0000	;
      background:	#DC143C;
      @include sizeColor(0.7253333333rem,#fff);
      letter-spacing:4px;
      line-height:2.0053333333rem;
    }
  }
</style>
