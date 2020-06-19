<template>
  <div>
<!--    <head-top crossover="上传头像"></head-top>-->
    <div>
      <input type="file" id="file1" class=uploadbtn accept="image/*" @change="imgChange($event)">
      <img width="300px" id="img1">
    </div>
  </div>
</template>

<script>
import headTop from 'src/components/header/head'
    export default {
        name: "imageupload",
        data() {
          return{
            dataUrl: ''
          }
        },
        components: {
          headTop
        },
        methods: {
          imgChange(e){
            var file = e.target.files[0];
            var filesize = file.size;
            var filename = file.name;
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) {
              var imgcode = e.target.result;
              console.log(imgcode);
              this.axios({
                method: 'post',
                url: this.$store.state.baseurl+'uploadAvatar',
                data: {
                  username: this.$store.state.username,
                  basecode: imgcode
                },
                crossDomain: true
              })
                .then(body => {
                  if(response.data.code == 200)
                    this.$store.state.newImg = imgcode
                })
            }
          }
        }
    }
</script>

<style scoped>
  .uploadarea {
    margin-top: 200px;
  }
</style>
