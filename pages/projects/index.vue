<!-- TODO: SETUP PROJECTS PAGE -->
<template>
  <div>
    <div class="flex min-h-screen items-center justify-center p-4 pt-20 sm:p-20">
      <div class="container grid gap-8 max-w-5xl grid-cols-1">
        <div class="bg-slate-800 rounded-md shadow-md text-center justify-center mx-5 border-4 border-slate-300">
          <div class="p-10 text-slate-300">
            <Projects />
          </div>
        </div>
        <div class="grid grid-cols-4 grid-rows-5 place-items-center gap-7 mx-0 my-5 sm:my-5 md:grid-cols-8 md:grid-rows-6">
          <div class="mx-auto col-span-4 items-center bg-slate-300 rounded-lg shadow-2xl p-1">
            <ProjectsPortfolio />
          </div>
          <div class="mx-auto col-span-4 items-center bg-slate-300 rounded-lg shadow-2xl p-1">
            <ProjectsPortfolio />
          </div>
          <div class="mx-auto col-span-4 items-center bg-slate-300 rounded-lg shadow-2xl p-1">
            <ProjectsPortfolio />
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