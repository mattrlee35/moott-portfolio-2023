<template>
    <!-- TODO: CHANGE BUTTONS TO HOW WE WANT THEM -->
    <NuxtLink class="" to="mailto:mattrlee35@gmail.com" target="_blank">
    <button type="button" class="w-full justify-center inline-flex items-center gap-x-2 rounded-md bg-darkerblue px-3.5 py-2.5 text-lg text-offwhite shadow-sm hover:underline hover:text-golden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-4 border-golden">
        <svg class="h-5 w-5"  
            viewBox="0 0 24 24"  
            fill="none"  
            stroke="currentColor"  
            stroke-width="2"  
            stroke-linecap="round"  
            stroke-linejoin="round">  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  <polyline points="22,6 12,13 2,6" /></svg>
        Email
    </button>
    </NuxtLink>
  </template>
  
  <script setup>
  import { CheckCircleIcon } from '@heroicons/vue/20/solid'
  </script>

