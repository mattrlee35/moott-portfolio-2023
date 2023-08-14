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
          <div class="flex-1 p-7">
            <timeline />
          </div>
        </div>
        <!-- TODO: CHANGE ICONS / LOOK FOR NEW ICONS -->
        <div class="bg-cornflower rounded-md shadow-md justify-center border-4 border-golden">
        <div class="px-11">
        <h1 class="pt-11 text-5xl text-offwhite font-bold text-center col-span-7">Skills</h1>
        <div class="mt-5 flex w-full bg-golden h-0.5 dark:bg-golden"></div>
        </div>
        <div class="grid grid-cols-3 grid-rows-10 place-items-center px-11 pb-11 pt-5 md-custom:grid-cols-4 md-custom:grid-rows-4 md:grid-cols-5 md:grid-rows-3 lg-custom:grid-cols-6 lg-custom:grid-rows-3">
        <!-- <h1 class="mt-5 text-5xl text-offwhite font-bold text-center col-span-7">Skills</h1>
        <div class="hidden -mt-5 sm:flex w-full col-span-7 bg-golden h-0.5 dark:bg-golden"></div> -->
          <div class="p-1">
            <AboutmeSkillsJavaScript/>
          </div>
          <div class="p-1">
            <AboutmeSkillsJava/>
          </div>
          <div class="p-1">
            <AboutmeSkillsC++/>
          </div>
          <div class="p-1">
            <AboutmeSkillsPython/>
          </div>
          <div class="p-1">
            <AboutmeSkillsHtml5/>
          </div>
          <div class="p-1">
            <AboutmeSkillsNuxt/>
          </div>
          <div class="p-1">
            <AboutmeSkillsTailwind/>
          </div>
          <div class="p-1">
            <AboutmeSkillsGithub/>
          </div>
          <div class="p-1">
            <AboutmeSkillsAws/>
          </div>
          <div class="p-1">
            <AboutmeSkillsCss3/>
          </div>
          <div class="p-1">
            <AboutmeSkillsDjango/>
          </div>
          <div class="p-1">
            <AboutmeSkillsMongodb/>
          </div>
          <div class="p-1">
            <AboutmeSkillsRaspberrypi/>
          </div>
          <div class="p-1">
            <AboutmeSkillsPhp/>
          </div>
          <div class="p-1">
            <AboutmeSkillsKotlin/>
          </div>
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