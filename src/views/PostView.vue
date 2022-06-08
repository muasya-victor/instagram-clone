<template>
  <div class="relative top-1/2 left-0 sticky">
    <postssvg/>
  </div>

  <div class="" v-for="(post, index) in $store.state.posts" :key="index">
    <Post :url="post.url" :name="post.name" :user_url="post.user_url"/>
  </div>


</template>

<script>
import Post from "@/components/Post";
import postssvg from "@/components/svgs/postssvg";

export default {
  name: "PostView",
  components :{
    Post,
    postssvg
  }
}
</script>

<style scoped>

</style>