<template>
  <!-- TODO: STYLE PAGE HOW WE WANT IT -->
  <div>
    <!-- <div class="grid grid-flow-row auto-rows-max place-items-center"> -->
    <div class="flex flex-col min-h-screen">
      <div class="mt-20 mx-auto items-center">
        <div>
          <avatar/>
        </div>
      </div>
      <div class="mt-20 mx-auto items-center">
        <div class="text-6xl text-slate-300 font-oswald">
          Matthew Lee
        </div>
      </div>
      <div class="mt-20 mx-auto items-center">
        <div class="grid grid-flow-col auto-col-max place-items-center mb-5 sm:mb-5">
          <div class="col-start-1">
            <SocialsLinkedin/>
          </div>
          <div class="col-start-2 mx-10">
            <SocialsGithub/>
          </div>
          <div class="col-start-3">
            <SocialsEmail/>
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