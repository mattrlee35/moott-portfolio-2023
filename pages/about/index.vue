<template>
  <div>
    <div class="flex min-h-screen items-center justify-center p-4 pt-20 sm:p-20">
      <div class="container grid gap-8 max-w-5xl grid-cols-1">
        <!-- TODO: REREAD ALL THE TEXT AND MAYBE REWRITE IT? -->
        <div class="flex bg-cornflower p-4 rounded-md shadow-md text-center border-4 border-golden">
          <div class="p-10 text-lg text-offwhite">
            <aboutMe />
          </div>
        </div>
        <div class="flex bg-cornflower p-4 rounded-md shadow-md items-center border-4 border-golden">
          <div class="flex-1 p-10">
            <timeline />
          </div>
        </div>
        <!-- TODO: CHANGE ICONS / LOOK FOR NEW ICONS -->
        <div class="flex  bg-cornflower p-4 rounded-md shadow-md item-center justify-center border-4 border-golden">
        <div class="grid grid-cols-4 grid-rows-4 place-items-center gap-7 my-5 sm:my-5 md:grid-cols-7 md:grid-rows-2">
          <NuxtLink to="https://www.javascript.com/" target="_blank">
          <div class="p-1">
            <AboutmeSkillsJavaScript/>
          </div>
          </NuxtLink>
        <NuxtLink to="https://www.java.com/en/" target="_blank">
          <div class="p-1">
            <AboutmeSkillsJava/>
          </div>
        </NuxtLink>
        <NuxtLink to="https://cplusplus.com/" target="_blank">
          <div class="p-1">
            <AboutmeSkillsC++/>
          </div>
        </NuxtLink>
        <NuxtLink to="https://www.python.org/" target="_blank">
          <div class="p-1">
            <AboutmeSkillsPython/>
          </div>
        </NuxtLink>
        <NuxtLink to="https://html.com/html5/" target="_blank">
          <div class="p-1">
            <AboutmeSkillsHtml5/>
          </div>
        </NuxtLink>
        <NuxtLink to="https://nuxt.com/" target="_blank">
          <div class="p-1">
            <AboutmeSkillsNuxt/>
          </div>
        </NuxtLink>
        <NuxtLink to="https://tailwindcss.com/" target="_blank">
          <div class="p-1">
            <AboutmeSkillsTailwind/>
          </div>
        </NuxtLink>
        <NuxtLink to="https://github.com/" target="_blank">
          <div class="p-1">
            <AboutmeSkillsGithub/>
          </div>
        </NuxtLink>
        <NuxtLink to="https://aws.amazon.com/" target="_blank">
          <div class="p-1">
            <AboutmeSkillsAws/>
          </div>
        </NuxtLink>
        <NuxtLink to="https://www.css3.info/" target="_blank">
          <div class="p-1">
            <AboutmeSkillsCss3/>
          </div>
        </NuxtLink>
        <NuxtLink to="https://www.djangoproject.com/" target="_blank">
          <div class="p-1">
            <AboutmeSkillsDjango/>
          </div>
        </NuxtLink>
        <NuxtLink to="https://www.mongodb.com/" target="_blank">
          <div class="p-1">
            <AboutmeSkillsMongodb/>
          </div>
        </NuxtLink>
        <NuxtLink to="https://www.raspberrypi.com/" target="_blank">
          <div class="p-1">
            <AboutmeSkillsRaspberrypi/>
          </div>
        </NuxtLink>
        <NuxtLink to="https://www.php.net/" target="_blank">
          <div class="p-1">
            <AboutmeSkillsPhp/>
          </div>
        </NuxtLink>
        <NuxtLink to="https://kotlinlang.org/" target="_blank">
          <div class="p-1">
            <AboutmeSkillsKotlin/>
          </div>
        </NuxtLink>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
</style>