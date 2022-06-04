<template>
  <div class="" v-for="(post, index) in $store.state.posts" :key="index">
    <Post :url="post.url" :name="post.name" :user_url="post.user_url"/>
  </div>
</template>

<script>
import Post from "@/components/Post";
export default {
  name: "PostView",
  components :{
    Post
  }
}
</script>

<style scoped>

</style>