<template>
  <div>
    <slot />
  </div>
</template>

<!-- <template>
  <div class="overflow-hidden hide-scrollbar">
    <nav class="navbar flex items-center justify-between p-4 !bg-blue">
      Logo for returning to top
      <div class="logo bg-black" @click="scrollToTop">
        <img src="https://static.wixstatic.com/media/175259_da12801d620d4224b0e119e4014d668a~mv2.png/v1/fill/w_478,h_478,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MML%20White.png" alt="Logo" class="w-20 h-auto cursor-pointer" />
      </div>

      <div class="dropdown relative" @click="toggleDropdown">
        <button class="dropbtn bg-transparent focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700 hover:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <div v-show="isDropdownOpen" class="dropdown-content absolute right-0 mt-2 rounded-md shadow-lg">
          <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Link 1</a>
          <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Link 2</a>
          <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Link 3</a>
        </div>
      </div>
    </nav>

    <NuxtPage />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style scoped>
.hide-scrollbar {
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style> -->