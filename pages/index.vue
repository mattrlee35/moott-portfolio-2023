<template>
  <div class="snap-y snap-mandatory w-screen h-screen overflow-y-visible overflow-x-hidden hide-scrollbar">
    <!-- Header with Logo and Dropdown Menu -->
    <header class="w-full flex justify-between items-center p-4 bg-gray-800 text-white fixed top-0 left-0 right-0 z-50">
      <NuxtLink @click.prevent="scrollToSection('home')">
        <img src="https://static.wixstatic.com/media/175259_da12801d620d4224b0e119e4014d668a~mv2.png/v1/fill/w_478,h_478,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MML%20White.png" alt="Logo" class="h-12">
      </NuxtLink>
      <div class="dropdown relative" @click.stop="">
        <button @click="toggleDropdown" class="dropdown-toggle bg-gray-800 text-white py-2 px-4 rounded inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white hover:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <ul v-if="isDropdownOpen" class="dropdown-menu absolute text-gray-700 pt-1">
          <li class=""><NuxtLink to="/" class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Home</NuxtLink></li>
          <li class=""><NuxtLink to="/about" class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">About</NuxtLink></li>
          <li class=""><NuxtLink to="/projects" class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Projects</NuxtLink></li>
          <li class=""><NuxtLink to="/contact" class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Contact</NuxtLink></li>
        </ul>
      </div>
    </header>

    <!-- Vertical Navbar -->
    <div class="fixed left-0 top-1/2 transform -translate-y-1/2 h-auto text-white flex flex-col justify-center items-center space-y-4 p-4 z-50">
      <NuxtLink @click.prevent="scrollToSection('home')" :class="{ 'text-red-500': currentRoute === 'home' }" class="nav-link hover:underline text-black">□</NuxtLink>
      <NuxtLink @click.prevent="scrollToSection('about')" :class="{ 'text-red-500': currentRoute === 'about' }" class="nav-link hover:underline text-black">□</NuxtLink>
      <NuxtLink @click.prevent="scrollToSection('timeline')" :class="{ 'text-red-500': currentRoute === 'timeline' }" class="nav-link hover:underline text-black">□</NuxtLink>
      <NuxtLink @click.prevent="scrollToSection('skills')" :class="{ 'text-red-500': currentRoute === 'skills' }" class="nav-link hover:underline text-black">□</NuxtLink>
      <NuxtLink @click.prevent="scrollToSection('projects')" :class="{ 'text-red-500': currentRoute === 'projects' }" class="nav-link hover:underline text-black">□</NuxtLink>
      <NuxtLink @click.prevent="scrollToSection('contact')" :class="{ 'text-red-500': currentRoute === 'contact' }" class="nav-link hover:underline text-black">□</NuxtLink>
    </div>

    <div id="home" class="snap-start bg-blue-200 w-screen h-screen flex items-center justify-center text-8xl space-x-20">
      <p>Matt Lee</p>
      <p><avatar /></p>
    </div>
    <div id="about" class="snap-start bg-teal-200 w-screen h-screen flex items-center justify-center">
      <p>About Me</p>
      <p><aboutMe /></p>
    </div>
    <div id="timeline" class="snap-start bg-orange-200 w-screen h-screen flex items-center justify-center">
      <p><timeline /></p>
    </div>
    <div id="skills" class="snap-start bg-fuchsia-200 w-screen h-screen flex items-center justify-center text-8xl">
      <p>Skills</p>
    </div>
    <div id="projects" class="snap-start bg-yellow-200 w-screen h-screen flex items-center justify-center text-8xl">
      <p>Projects</p>
    </div>
    <div id="contact" class="snap-start bg-green-200 w-screen h-screen flex flex-col justify-center items-center text-2xl">
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentRoute = ref(router.currentRoute.value.name);
const isDropdownOpen = ref(false);

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

router.afterEach((to) => {
  currentRoute.value = to.name;
});

</script>

<style scoped>
.hide-scrollbar {
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none; /* For Chrome, Safari, and Opera */
}

/* Styles for the vertical navbar */
.fixed {
  position: fixed;
}

.bg-gray-800 {
  background-color: #2d3748;
}

.text-white {
  color: #ffffff;
}

.hover\\:underline:hover {
  text-decoration: underline;
}

.hover\\:text-golden:hover {
  color: #d4af37;
}

.transform {
  transform: translateY(-50%);
}

.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}

.p-4 {
  padding: 1rem;
}

/* Styles for dropdown */
.dropdown:hover .dropdown-menu {
  display: block;
}
.dropdown-menu {
  display: none;
}
</style>
