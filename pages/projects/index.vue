<template>
  <div>
    <header class="w-full flex justify-between items-center p-4 text-black fixed top-0 left-0 right-0 z-50">
      <NuxtLink to="/" class="bg-black hover:cursor-pointer">
        <img src="https://static.wixstatic.com/media/175259_da12801d620d4224b0e119e4014d668a~mv2.png/v1/fill/w_478,h_478,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MML%20White.png" alt="Logo" class="h-12">
      </NuxtLink>
      <!-- Original menu icon -->
      <div class="dropdown relative" @click.stop="">
        <button @click="toggleDropdown" class="dropdown-toggle bg-transparent text-gray-300 py-2 px-4 rounded inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black hover:text-gray-900 {{ isDropdownOpen ? 'text-transparent' : '' }}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <!-- New menu with X button, overlaying the original icon -->
        <div v-if="isDropdownOpen" class="dropdown-menu absolute top-0 right-0">
          <ul class="bg-white ">
            <!-- Move close button to the top right corner -->
            <li class="pt-2 pl-96 pr-4 flex justify-end">
              <!-- X button to close the menu -->
              <button @click="toggleDropdown" class="text-gray-600 hover:text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 4.293a1 1 0 0 1 1.414 0L10 8.586l3.293-3.293a1 1 0 1 1 1.414 1.414L11.414 10l3.293 3.293a1 1 0 0 1-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L8.586 10 5.293 6.707a1 1 0 0 1 0-1.414z" clip-rule="evenodd"/>
                </svg>
              </button>
            </li>
            <!-- Menu items -->
            <li class=""><NuxtLink to="/" class="hover:text-gray-400 pl-4 py-4 text-xl block whitespace-nowrap justify-start">Home</NuxtLink></li>
            <li class=""><NuxtLink to="/mattLeeDevResume.pdf" target="_blank" class="hover:text-gray-400 pl-4 py-4 text-xl block whitespace-nowrap justify-start">My Resume</NuxtLink></li>
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
/* You can add scoped styles here if needed */
</style>
