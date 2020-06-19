<template>
  <div>
<!--    <head-top crossover="上传头像"></head-top>-->
    <div>
      <input type="file" id="file1" class=uploadbtn accept="image/*" @change="imgChange($event)">
      <img width="300px" id="img1" :src="$store.state.newImg.img">
      <button v-on:click="submit">提交</button>
    </div>
  </div>
</template>

<script>
import headTop from 'src/components/header/head'
    export default {
        name: "imageupload",
        data() {
          return{
            avatarUrl: ""
          }
        },
        components: {
          headTop
        },
        methods: {
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
          submit() {
            console.log(this.avatarUrl);
            this.axios({
              method: 'post',
              url: this.$store.state.baseurl+'user/home/setAvatar',
              data: {
                username: this.$store.state.username,
                image: this.avatarUrl,
                Token: this.$store.state.token
              },
              crossDomain: true
            })
              .then(response => {
                if(response.data.code == 200)
                  this.$router.push('')
              })
          }
        }
    }
</script>

<style scoped>
  .uploadarea {
    margin-top: 200px;
  }
</style>
