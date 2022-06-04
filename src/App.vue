<template>
  <div class="h-fit bg-gray-100">

  <div class="absolute top-0 w-full sticky">
    <Header/>
  </div>

    <router-view/>
  </div>

</template>

<script>
import Header from "@/components/Header";


export default {
  components: {
    Header,
  }
}
</script>

<style>


nav a.router-link-exact-active {
  color: #42b983;
}
</style>
