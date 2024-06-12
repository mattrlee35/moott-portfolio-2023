<template>
    <div class="max-w-md py-4 px-4 bg-cornflower  shadow-lg rounded-lg border-4 border-golden">
        <div class="flex justify-end -mt-10">
            <img class="w-12 h-12 object-cover bg-darkerblue rounded-full border-2 border-red" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nuxtjs/nuxtjs-original.svg">
            <img class="w-12 h-12 object-cover bg-darkerblue rounded-full border-2 border-red" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/tailwindcss/tailwindcss-plain.svg">
        </div>
        <div>
            <h2 class="text-offwhite text-3xl font-semibold">Portfolio 2023</h2>
            <p class="mt-2 text-offwhite">This project serves as a refreshed portfolio website, highlighting my past projects and providing insights about me.</p>
        </div>
        <div class="flex justify-end mt-4">
            <NuxtLink to="https://github.com/mattrlee35/moott-portfolio-2023" target="_blank">
            <button type="button" class="inline-flex text-center items-center gap-x-2 rounded-md bg-darkerblue px-1 py-1 text-lg text-offwhite shadow-sm hover:underline hover:text-golden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-2 border-golden">
            <svg class="h-5 w-5"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
            GitHub
            </button>
        </NuxtLink>
        </div>
    </div>
</template>