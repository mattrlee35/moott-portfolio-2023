<template>
  <div class="snap-y snap-mandatory w-screen h-screen overflow-y-visible overflow-x-hidden">
    <div class="snap-start w-screen h-screen flex items-center justify-center text-8xl space-x-20">
      <p>Matt Lee</p>
      <p><avatar /></p>
    </div>
    <div class="snap-start bg-teal-200 w-screen h-screen flex items-center justify-center">
      <p>About Me</p>
      <p><aboutMe /></p>
    </div>
    <div class="snap-start bg-orange-200 w-screen h-screen flex items-center justify-center">
      <p><timeline /></p>
    </div>
    <div class="snap-start bg-fuchsia-200 w-screen h-screen flex items-center justify-center text-8xl">
      <p>Skills</p>
    </div>
    <div class="snap-start bg-yellow-200 w-screen h-screen flex items-center justify-center text-8xl">
      <p>Projects</p>
    </div>
    <div class="snap-start bg-green-200 w-screen h-screen flex flex-col justify-center items-center text-2xl">
      <p class="text-5xl font-semibold pb-5">
        Send me a message!
      </p>
      <p class="pb-5">
        Got a question or proposal, or just want
        to say hello? Go ahead.
      </p>
      <NuxtLink class="" to="mailto:mattrlee35@gmail.com" target="_blank">
      <button type="button" class="justify-center inline-flex items-center gap-x-2 px-20 py-3.5 text-2xl shadow-sm hover:underline hover:text-golden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-2 border-black">
        <svg class="h-10 w-10"  
            viewBox="0 0 24 24"  
            fill="none"  
            stroke="currentColor"  
            stroke-width="2"  
            stroke-linecap="round"  
            stroke-linejoin="round">  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  <polyline points="22,6 12,13 2,6" /></svg>
        Contact Me!
      </button>
      </NuxtLink>
      <div class="my-5 sm:my-5 flex w-1/2 bg-black h-0.5 dark:bg-black"></div>
      <div class="flex flex-row">
      <NuxtLink to="https://github.com/mattrlee35" target="_blank">
      <button type="button" class="w-full justify-center inline-flex text-center items-center gap-x-2 px-3.5 py-2.5 text-lg shadow-sm hover:underline hover:text-golden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-2 border-black">
        <svg class="h-10 w-10"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
      </button>
      </NuxtLink>
      <NuxtLink class="" to="https://www.linkedin.com/in/matthew-lee-69647126a/" target="_blank">
      <button type="button" class="w-full justify-center inline-flex text-center items-center gap-x-2 px-3.5 py-2.5 text-lg shadow-sm hover:underline hover:text-golden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-2 border-black">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
      </button>
      </NuxtLink>
      <NuxtLink class="" to="/projects" target="_blank">
      <button type="button" class="w-full justify-center inline-flex text-center items-center gap-x-2 px-3.5 py-2.5 shadow-sm hover:underline hover:text-golden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-2 border-black">
        Projects
      </button>
      </NuxtLink>
      <NuxtLink class="" to="/projects" target="_blank">
      <button type="button" class="w-full justify-center inline-flex text-center items-center gap-x-2 px-3.5 py-2.5 shadow-sm hover:underline hover:text-golden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-2 border-black">
        Resume
      </button>
      </NuxtLink>
      </div>
    </div>
  </div>
  </template>

<script setup>

</script>

<style scoped>
</style>