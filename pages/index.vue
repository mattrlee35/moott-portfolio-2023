<template>
  <!-- TODO: Style -->
  <Transition appear>
    <div>     
      <div class="flex min-h-screen flex-col items-center p-4 pt-20 pb-20 sm:p-20">
        <div class="max-w-5xl break-words bg-cornflower w-full mb-6 shadow-md rounded-md border-4 border-golden">
          <div class="px-6">
          <div class="flex flex-wrap justify-center">
              <div class="w-full flex justify-center mb-5">
                <Avatar />
              </div>
          </div>
          <div class="text-center mt-20">
              <h3 class="text-5xl  text-offwhite font-bold leading-normal mb-1">Matthew Lee</h3>
              <div class="text-sm mt-0 mb-2 text-offwhite uppercase">
                  <i class="fas fa-map-marker-alt mr-2 text-offwhite opacity-75"></i>Aurora, Illinois
              </div>
          </div>
          <div class="mt-6 border-t border-slate-200 text-center">
              <div class="flex flex-wrap justify-center">
                <div class="mt-5 mx-auto p-4 items-center w-full max-w-2xl">
                  <div class="flex flex-col">
                    <div>
                      <SocialsEmail />
                    </div>
                    <div class="my-10">
                      <SocialsLinkedin />
                    </div>
                    <div>
                      <SocialsGithub />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  </Transition>
</template>

<script setup>

</script>

<style scoped>
</style>