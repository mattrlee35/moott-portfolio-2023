<template>
  <!-- TODO: STYLE PAGE HOW WE WANT IT -->
  <div>
    <!-- <div class="grid grid-flow-row auto-rows-max place-items-center"> -->
    <div class="flex flex-col min-h-screen">
        <div class="text-center mt-20 mx-auto w-5/6 bg-[#FFFBFB] rounded-lg shadow-xl">
          <aboutMe/>
        </div>
      <div class="mx-auto my-10 bg-white rounded-lg shadow-md p-5">
          <timeline/>
      </div>
      <div class="mt-20 mx-auto items-center mx-auto my-10 bg-white rounded-lg shadow-md p-5">
        <div class="grid grid-flow-col auto-col-max place-items-center mb-5 sm:mb-5">
          <div class="col-start-1">
            javascript icon
          </div>
          <div class="col-start-2 mx-10">
            java icon
          </div>
          <div class="col-start-3">
            c++ icon
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