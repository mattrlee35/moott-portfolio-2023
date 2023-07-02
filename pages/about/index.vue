<template>
  <!-- TODO: STYLE PAGE HOW WE WANT IT -->
  <div>
    <div class="flex min-h-screen items-center justify-center p-4 pt-20 sm:p-20">
      <div class="container grid gap-8 max-w-5xl grid-cols-1">
        <p class="text-6xl font-oswald text-center">
          About Me
        </p>
        <div class="flex bg-white p-4 rounded-md shadow-md text-center">
          <div class="p-10">
            <aboutMe />
          </div>
        </div>
        <p class="text-6xl font-oswald text-center">
          Experience
        </p>
        <div class="flex bg-white p-4 rounded-md shadow-md items-center">
          <div class="flex-1 p-10">
            <timeline />
          </div>
        </div>
        <p class="text-6xl font-oswald text-center">
          Skills
        </p>
        <div class="mx-auto">
        <div class="grid grid-cols-5 grid-rows-5 place-items-center gap-4 mb-5 sm:mb-5">
          <div class="mx-auto items-center bg-white rounded-lg shadow-md p-1">
            <SkillsJavaScript/>
          </div>
          <div class="mx-auto items-center bg-white rounded-lg shadow-md p-1">
            <SkillsJava/>
          </div>
          <div class="mx-auto items-center bg-white rounded-lg shadow-md p-1">
            <SkillsC++/>
          </div>
          <div class="mx-auto items-center bg-white rounded-lg shadow-md p-1">
            <SkillsPython/>
          </div>
          <div class="mx-auto items-center bg-white rounded-lg shadow-md p-1">
            <SkillsHtml5/>
          </div>
          <div class="mx-auto items-center bg-white rounded-lg shadow-md p-1">
            <SkillsNuxt/>
          </div>
          <div class="mx-auto items-center bg-white rounded-lg shadow-md p-1">
            <SkillsTailwind/>
          </div>
          <div class="mx-auto items-center bg-white rounded-lg shadow-md p-1">
            <SkillsGithub/>
          </div>
          <div class="mx-auto items-center bg-white rounded-lg shadow-md p-1">
            <SkillsAws/>
          </div>
          <div class="mx-auto items-center bg-white rounded-lg shadow-md p-1">
            <SkillsCss3/>
          </div>
          <div class="mx-auto items-center bg-white rounded-lg shadow-md p-1">
            <SkillsCss3/>
          </div>
        </div>
        </div>
      </div>
    </div>
    <!-- <div class="grid grid-flow-row auto-rows-max place-items-center"> -->
    <!-- <div class="flex flex-col min-h-screen">
      <p class="text-6xl font-oswald text-center">
        About Me
      </p>
      <div class="text-center min-w-screen max-w-7xl mt-20 mx-auto bg-[#FFFBFB] rounded-lg shadow-xl">
        <aboutMe/>
      </div>
      <p class="text-6xl font-oswald text-center">
          History
      </p>
      <div class="mx-auto min-w-screen max-w-7xl my-10 bg-white rounded-lg shadow-md p-5">
          <timeline/>
      </div>
      <p class="text-6xl font-oswald text-center">
          Skills
      </p>
      <div class="mx-auto">
        <div class="grid grid-cols-3 grid-rows 4 grid-flow-col auto-col-max place-items-center mb-5 sm:mb-5">
          <div class="mt-20 mx-auto items-center mx-auto my-10 bg-white rounded-lg shadow-md p-1">
            <SkillsJavaScript/>
          </div>
          <div class="mt-20 mx-auto items-center mx-auto my-10 bg-white rounded-lg shadow-md p-1">
            <SkillsJava/>
          </div>
          <div class="mt-20 mx-auto items-center mx-auto my-10 bg-white rounded-lg shadow-md p-1">
            <SkillsC++/>
          </div>
          <div class="mt-20 mx-auto items-center mx-auto my-10 bg-white rounded-lg shadow-md p-1">
            <SkillsPython/>
          </div>
          <div class="mt-20 mx-auto items-center mx-auto my-10 bg-white rounded-lg shadow-md p-1">
            <SkillsHtml5/>
          </div>
          <div class="mt-20 mx-auto items-center mx-auto my-10 bg-white rounded-lg shadow-md p-1">
            <SkillsNuxt/>
          </div>
          <div class="mt-20 mx-auto items-center mx-auto my-10 bg-white rounded-lg shadow-md p-1">
            <SkillsTailwind/>
          </div>
          <div class="mt-20 mx-auto items-center mx-auto my-10 bg-white rounded-lg shadow-md p-1">
            <SkillsGithub/>
          </div>
          <div class="mt-20 mx-auto items-center mx-auto my-10 bg-white rounded-lg shadow-md p-1">
            <SkillsAws/>
          </div>
          <div class="mt-20 mx-auto items-center mx-auto my-10 bg-white rounded-lg shadow-md p-1">
            <SkillsCss3/>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup>

</script>

<style scoped>
</style>