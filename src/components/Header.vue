<template>

  <div class="bg-white shadow md:h-20 flex items-center justify-around">
    <!--header image -->
    <img src="../assets/index.png" class="h-1/3 md:h-full w-1/3 md:w-fit bg-contain p-2">


    <div>
      <nav class="flex">
        <router-link to="/">
          <homesvg/>
        </router-link> |

        <router-link to="/about">
          <aboutsvg/>
        </router-link> |

        <router-link to="/posts">
          <postssvg/>
        </router-link>

      </nav>
    </div>


    <!--    add post svg -->
    <!--    Like svg  -->
    <!--    messenger svg  -->
  </div>

</template>

<script>
import homesvg from "@/components/svgs/homesvg";
import aboutsvg from "@/components/svgs/aboutsvg";
import postssvg from "@/components/svgs/postssvg";
export default {
  name: "Header",
  components : {
    homesvg,
    aboutsvg, postssvg
  }
}
</script>

<style scoped>

</style>