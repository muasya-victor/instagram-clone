<template>
  <div class="home">

    home
    <Post/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import Homie from '@/components/homie.vue'
import Post from "@/components/Post";

export default {
  name: 'HomeView',
  components: {
    Homie,
    Header,
    Post
  }
}
</script>
