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
          <div class="mx-auto items-center bg-offwhite rounded-lg shadow-lg p-1">
            <AboutmeSkillsJavaScript/>
          </div>
          <div class="mx-auto items-center bg-offwhite rounded-lg shadow-lg p-1">
            <AboutmeSkillsJava/>
          </div>
          <div class="mx-auto items-center bg-offwhite rounded-lg shadow-lg p-1">
            <AboutmeSkillsC++/>
          </div>
          <div class="mx-auto items-center bg-offwhite rounded-lg shadow-lg p-1">
            <AboutmeSkillsPython/>
          </div>
          <div class="mx-auto items-center bg-offwhite rounded-lg shadow-lg p-1">
            <AboutmeSkillsHtml5/>
          </div>
          <div class="mx-auto items-center bg-offwhite rounded-lg shadow-lg p-1">
            <AboutmeSkillsNuxt/>
          </div>
          <div class="mx-auto items-center bg-offwhite rounded-lg shadow-lg p-1">
            <AboutmeSkillsTailwind/>
          </div>
          <div class="mx-auto items-center bg-offwhite rounded-lg shadow-lg p-1">
            <AboutmeSkillsGithub/>
          </div>
          <div class="mx-auto items-center bg-offwhite rounded-lg shadow-lg p-1">
            <AboutmeSkillsAws/>
          </div>
          <div class="mx-auto items-center bg-offwhite rounded-lg shadow-lg p-1">
            <AboutmeSkillsCss3/>
          </div>
          <div class="mx-auto items-center bg-offwhite rounded-lg shadow-lg p-1">
            <AboutmeSkillsDjango/>
          </div>
          <div class="mx-auto items-center bg-offwhite rounded-lg shadow-lg p-1">
            <AboutmeSkillsMongodb/>
          </div>
          <div class="mx-auto items-center bg-offwhite rounded-lg shadow-lg p-1">
            <AboutmeSkillsRaspberrypi/>
          </div>
          <div class="mx-auto items-center bg-offwhite rounded-lg shadow-lg p-1">
            <AboutmeSkillsPhp/>
          </div>
          <div class="mx-auto items-center bg-offwhite rounded-lg shadow-lg p-1">
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