<template>
  <div class="px-4 py-8 border max-w-4xl shadow mt-2 mx-auto">
    <div class="flex items-center pb-2 border-b md:h-30 ">
      <img :src="require('../assets/' + user_url)" :alt="name" class="w-1/5 object-cover rounded-full border border-4 bg-contain p-2 border-pink-700">
      <div class="px-2">
        <h1>{{ name }}</h1>
        <h1>developer.<span class="font-bold">{{name}}</span></h1>
      </div>

    </div>
    <!--    post image -->
    <img :src="require('../assets/' + url)" :alt="name" class="object-cover mx-auto w-11/12">


    <div class="py-3 md:py-6 md:px-8">
      <h3 class="font-bold">{{ name }}</h3>
      <h3>{{caption}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    url : {
      type: String,
      default: 'index.png'
    },
    name : {
      type: String,
      default: 'viki techie'
    },
    user_url : {
      type: String,
      default: 'avatar.jpeg'
    },
    caption :{
      type: String,
      default : 'this guy in the suit built an awesome API check it out on https://gracieblog.herokuapp.com/posts'
    }
  }
}
</script>

<style scoped>

</style>