<template>
  <div>
    <header class="w-full flex justify-between items-center p-4 text-gray-300 fixed top-0 left-0 right-0 z-50">
      <NuxtLink to="/" 
          class="bg-transparent hover:cursor-pointer">
  <img src="https://static.wixstatic.com/media/175259_da12801d620d4224b0e119e4014d668a~mv2.png/v1/fill/w_478,h_478,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MML%20White.png" 
       alt="Logo" 
       class="h-12"
       :class="['filter-darkerblue', 'hover-filter-lighterblue']">
</NuxtLink>


      <!-- Original menu icon -->
      <div class="dropdown relative" @click.stop="">
        <button @click="toggleDropdown" 
        class="dropdown-toggle bg-transparent py-2 px-4 rounded inline-flex items-center"
        :class="{ 'text-darkerblue': currentRoute !== 'about' && currentRoute !== 'skills' && currentRoute !== 'contact', 
                  'text-lighterblue': currentRoute === 'about' || currentRoute === 'skills' || currentRoute === 'contact' }">
  <svg xmlns="http://www.w3.org/2000/svg" 
       class="h-8 w-8" 
       fill="none" 
       viewBox="0 0 24 24" 
       stroke="currentColor"
       :class="{ 'text-gray-300': currentRoute === 'home' || currentRoute === 'timeline' || currentRoute === 'projects',
                 'text-darkerblue': currentRoute === 'about' || currentRoute === 'skills' || currentRoute === 'contact',
                 'hover:text-lighterblue': true }">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
  </svg>
</button>
        <!-- New menu with X button, overlaying the original icon -->
        <div class="dropdown-menu absolute bg-white justify-start border top-0 right-0 " :class="{ 'block': isDropdownOpen, 'hidden': !isDropdownOpen }">
          <ul class="">
            <!-- Move close button to the top right corner -->
            <li class="pt-2 pl-96 pr-4 flex justify-end">
              <!-- X button to close the menu -->
              <button @click="toggleDropdown" class="text-darkerblue hover:text-red p-0 bg-transparent border-none cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </li>
            <!-- Menu items -->
            <li class=""><NuxtLink to="/" class="hover:text-red hover:underline pl-4 py-4 text-xl text-darkerblue block whitespace-nowrap justify-start ">Home</NuxtLink></li>
            <li class=""><NuxtLink to="/mattLeeDevResume.pdf" target="_blank" class="hover:text-red hover:underline text-darkerblue pl-4 py-4 text-xl block whitespace-nowrap justify-start">Resume</NuxtLink></li>
            <li class="">
            <div class="flex flex-row justify-center mt-10">
          <NuxtLink to="https://github.com/mattrlee35" target="_blank">
          <button type="button" class="w-full justify-center inline-flex text-center text-darkerblue items-center gap-x-2 px-3.5 py-2.5 text-lg hover:underline hover:text-red">
            <svg class="h-10 w-10"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
          </button>
        </NuxtLink>
        <NuxtLink class="" to="https://www.linkedin.com/in/matthew-lee-69647126a/" target="_blank">
          <button type="button" class="w-full justify-center inline-flex text-center items-center text-darkerblue gap-x-2 px-3.5 py-2.5 text-lg hover:underline hover:text-red">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </button>
        </NuxtLink>
        </div>
          </li>
          </ul>
        </div>
      </div>
    </header>
    <div class="flex min-h-screen items-center justify-center lg-custom-projects:items-start p-4 pt-20">
      <div class="flex grid grid-cols-1 gap-8 lg-custom-projects:grid-cols-4 max-w-full">
        <div class="lg-custom-projects:col-span-2">
          <ProjectsPortfolio2023 />
        </div>
        <div class="lg-custom-projects:col-span-2">
          <ProjectsDiscordbot />
        </div>
        <div class="lg-custom-projects:col-span-2">
          <ProjectsEportfolio />
        </div>
        <div class="lg-custom-projects:col-span-2">
          <ProjectsWeighttracker />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data() {
    return {
      isDropdownOpen: false
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }
};
</script>

<style scoped>
.filter-none {
    filter: none;
  }
  .filter-darkerblue {
    filter: brightness(0) saturate(100%) invert(11%) sepia(71%) saturate(742%) hue-rotate(169deg) brightness(92%) contrast(95%);
  }
  .filter-gray-300 {
    filter: brightness(0.85) saturate(0%) contrast(95%);
  }
  .filter-lighterblue {
    filter: brightness(0) saturate(100%) invert(77%) sepia(19%) saturate(1397%) hue-rotate(158deg) brightness(86%) contrast(85%);
  }
  .hover-filter-lighterblue:hover {
    filter: brightness(0) saturate(100%) invert(77%) sepia(19%) saturate(1397%) hue-rotate(158deg) brightness(86%) contrast(85%);
  }
</style>
