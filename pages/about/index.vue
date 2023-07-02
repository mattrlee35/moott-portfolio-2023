<template>
  <!-- TODO: STYLE PAGE HOW WE WANT IT -->
  <div>
    <!-- <div class="grid grid-flow-row auto-rows-max place-items-center"> -->
    <div class="flex flex-col min-h-screen">
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
        <!-- <p class="text-6xl font-oswald text-center"> -->
          <!-- SKILLS -->
        <!-- </p> -->
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
</style>