<template>
  <div>
    <div class="flex min-h-screen items-center justify-center p-4 pt-20 sm:p-20">
      <div class="container grid gap-8 max-w-5xl grid-cols-1">
        <div class="flex bg-cornflower p-4 rounded-md shadow-md border-4 border-golden">
          <!-- TODO: UPDATE ABOUTME PAGES WITH TITLES -->
          <div class="p-7 text-lg text-offwhite">
            <aboutMe />
          </div>
        </div>
        <div class="flex bg-cornflower p-4 rounded-md shadow-md items-center border-4 border-golden">
          <div class="flex-1 p-10">
            <timeline />
          </div>
        </div>
        <!-- TODO: CHANGE ICONS / LOOK FOR NEW ICONS -->
        <div class="flex  bg-cornflower rounded-md shadow-md item-center justify-center border-4 border-golden">
        <div class="grid grid-cols-4 grid-rows-4 place-items-center sm:my-5 md:grid-cols-7 md:grid-rows-2">
        <h1 class="mt-5 text-5xl text-offwhite font-bold text-center col-span-7">Skills</h1>
        <div class="hidden -mt-5 sm:flex w-full col-span-7 bg-golden h-0.5 dark:bg-golden"></div>
          <NuxtLink to="https://www.javascript.com/" target="_blank">
          <div class="p-1 -mt-4">
            <AboutmeSkillsJavaScript/>
          </div>
          </NuxtLink>
        <NuxtLink to="https://www.java.com/en/" target="_blank">
          <div class="p-1 -mt-4">
            <AboutmeSkillsJava/>
          </div>
        </NuxtLink>
        <NuxtLink to="https://cplusplus.com/" target="_blank">
          <div class="p-1 -mt-4">
            <AboutmeSkillsC++/>
          </div>
        </NuxtLink>
        <NuxtLink to="https://www.python.org/" target="_blank">
          <div class="p-1 -mt-4">
            <AboutmeSkillsPython/>
          </div>
        </NuxtLink>
        <NuxtLink to="https://html.com/html5/" target="_blank">
          <div class="p-1 -mt-4">
            <AboutmeSkillsHtml5/>
          </div>
        </NuxtLink>
        <NuxtLink to="https://nuxt.com/" target="_blank">
          <div class="p-1 -mt-4">
            <AboutmeSkillsNuxt/>
          </div>
        </NuxtLink>
        <NuxtLink to="https://tailwindcss.com/" target="_blank">
          <div class="p-1 -mt-4">
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
          <div class="p-2">
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