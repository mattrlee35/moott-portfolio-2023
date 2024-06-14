<template>
  <div class="snap-y snap-mandatory w-screen h-screen overflow-y-visible overflow-x-hidden text-purple hide-scrollbar">
    <!-- Header with Logo and Dropdown Menu -->
    <header class="w-full flex justify-between items-center p-4 fixed top-0 left-0 right-0 z-50">
      <NuxtLink @click.prevent="scrollToSection('home')" class="bg-transparent hover:cursor-pointer">
  <img src="https://static.wixstatic.com/media/175259_da12801d620d4224b0e119e4014d668a~mv2.png/v1/fill/w_478,h_478,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MML%20White.png" 
       alt="Logo" 
       class="h-12"
       ]>
</NuxtLink>


      <!-- Original menu icon -->
      <div class="dropdown relative" @click.stop="">
        <button @click="toggleDropdown" 
        class="dropdown-toggle bg-transparent py-2 px-4 rounded inline-flex items-center"
        :class="{ 'text-purple': currentRoute !== 'about' && currentRoute !== 'skills' && currentRoute !== 'contact', 
                  'text-aquagreen': currentRoute === 'about' || currentRoute === 'skills' || currentRoute === 'contact', }">
  <svg xmlns="http://www.w3.org/2000/svg" 
       class="h-8 w-8" 
       fill="none" 
       viewBox="0 0 24 24" 
       stroke="currentColor"
       :class="{ 'text-aquagreen': currentRoute === 'contact' ,
                 'text-purple': currentRoute === 'about' || currentRoute === 'skills' || currentRoute === 'timeline',
                 'text-black': currentRoute === 'projects' || currentRoute === 'home' ,
                 'hover:text-silver': currentRoute === 'home' || currentRoute === 'projects',
                 'hover:text-black': currentRoute === 'about' || currentRoute === 'timeline' || currentRoute === 'skills',
                 'hover:text-purple': currentRoute === 'contact'}">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
  </svg>
</button>
        <!-- New menu with X button, overlaying the original icon -->
        <div class="dropdown-menu absolute bg-white justify-start border top-0 right-0 " :class="{ 'block': isDropdownOpen, 'hidden': !isDropdownOpen }">
          <ul class="">
            <!-- Move close button to the top right corner -->
            <li class="pt-2 pl-96 pr-4 flex justify-end">
              <!-- X button to close the menu -->
              <button @click="toggleDropdown" class="text-purple hover:text-aquagreen p-0 bg-transparent border-none cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </li>
            <!-- Menu items -->
            <li class=""><NuxtLink to="/projects" class="hover:text-aquagreen hover:underline pl-4 py-4 text-xl text-purple block whitespace-nowrap justify-start ">Projects</NuxtLink></li>
            <li class=""><NuxtLink to="/mattLeeDevResume.pdf" target="_blank" class="hover:text-aquagreen hover:underline text-purple pl-4 py-4 text-xl block whitespace-nowrap justify-start">Resume</NuxtLink></li>
            <li class=""><NuxtLink @click.prevent="scrollToSection('contact')" class="hover:text-aquagreen hover:underline text-purple pl-4 py-4 text-xl block whitespace-nowrap hover:cursor-pointer justify-start">Contact Me</NuxtLink></li>
            <li class="">
            <div class="flex flex-row justify-center mt-10">
          <NuxtLink to="https://github.com/mattrlee35" target="_blank">
          <button type="button" class="w-full justify-center inline-flex text-center text-purple items-center gap-x-2 px-3.5 py-2.5 text-lg hover:underline hover:text-aquagreen">
            <svg class="h-10 w-10"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
          </button>
        </NuxtLink>
        <NuxtLink class="" to="https://www.linkedin.com/in/matthew-lee-69647126a/" target="_blank">
          <button type="button" class="w-full justify-center inline-flex text-center items-center text-purple gap-x-2 px-3.5 py-2.5 text-lg hover:underline hover:text-aquagreen">
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

    <!-- Vertical Navbar -->
    <div class="fixed left-0 top-1/2 transform -translate-y-1/2 h-auto text-aquagreen flex flex-col justify-center items-center space-y-2 p-4 z-50">
  <NuxtLink @click.prevent="scrollToSection('home')" class="nav-link text-xl hover:cursor-pointer" :class="{ 'text-black': currentRoute === 'home','text-purple': currentRoute !== 'projects' && currentRoute !== 'home' && currentRoute !=='contact'}">{{ currentRoute === 'home' ? '◼' : '◆' }}</NuxtLink>
  <NuxtLink @click.prevent="scrollToSection('about')" class="nav-link text-xl hover:cursor-pointer" :class="{ 'text-black': currentRoute === 'about', 'text-purple': currentRoute !== 'projects' && currentRoute !=='contact' && currentRoute !=='about'}">{{ currentRoute === 'about' ? '◼' : '◆' }}</NuxtLink>
  <NuxtLink @click.prevent="scrollToSection('timeline')" class="nav-link text-xl hover:cursor-pointer" :class="{ 'text-black': currentRoute === 'timeline', 'text-purple': currentRoute !== 'projects' && currentRoute !=='contact'&& currentRoute !=='timeline'}">{{ currentRoute === 'timeline' ? '◼' : '◆' }}</NuxtLink>
  <NuxtLink @click.prevent="scrollToSection('skills')" class="nav-link text-xl hover:cursor-pointer" :class="{ 'text-black': currentRoute === 'skills', 'text-purple': currentRoute !== 'projects' && currentRoute !=='contact' && currentRoute !=='skills'}">{{ currentRoute === 'skills' ? '◼' : '◆' }}</NuxtLink>
  <NuxtLink @click.prevent="scrollToSection('projects')" class="nav-link text-xl hover:cursor-pointer" :class="{ 'text-black': currentRoute === 'projects', 'text-purple': currentRoute !== 'projects' && currentRoute !=='contact'}">{{ currentRoute === 'projects' ? '◼' : '◆' }}</NuxtLink>
  <NuxtLink @click.prevent="scrollToSection('contact')" class="nav-link text-xl hover:cursor-pointer" :class="{ 'text-purple': currentRoute === 'contact', 'text-purple': currentRoute !== 'projects'}">{{ currentRoute === 'contact' ? '◼' : '◆' }}</NuxtLink>
</div>

<div id="home" class="snap-start w-screen h-screen relative flex flex-col">
  <div class="bg-purple w-full h-5/6 flex items-center justify-center text-8xl space-x-20" style="background-image: url(/landingPage3.svg); background-size: cover; background-position: center;">
    <div class="flex items-center justify-between px-10 w-7/12">
      <div>
        <p class="pb-10 text-black">Matt Lee</p>
        <p class="text-7xl pb-4 text-black">Front End Developer.</p>
        <p class="text-lg pb-20 text-lightgray">I like to craft solid and scalable frontend products with great user experiences.</p>
        <div class="flex">
          <p class="text-base mr-20 w-1/3 text-lightgray">Highly skilled at progressive enhancement, design systems & UI Engineering. </p>
          <p class="text-base w-1/3 text-lightgray">Proven experience building successful products for clients.</p>
        </div>
      </div>
      <avatar />
    </div>
  </div>
  <div class="bg-lightgray h-1/6"></div>
</div>
    <div id="about" class="snap-start bg-lightgray w-screen h-screen flex">
      <p>About Me</p>
      <p><aboutMe /></p>
    </div>
    <div id="timeline" class="snap-start bg-aquagreen w-screen h-screen flex items-center justify-center">
      <p><timeline /></p>
    </div>
    <div id="skills" class="snap-start bg-lightgray w-screen h-screen flex items-center justify-center text-8xl">
      <p>Skills</p>
    </div>
    <div id="projects" class="snap-start bg-purple text-silver w-screen h-screen flex items-center justify-center text-8xl">
      <div class="bg-black w-1/2 h-1/2 flex flex-col text-5xl items-center justify-center">
  <p class="text-center mb-10">Here you can find all my projects!</p>
  <p class="text-center text-3xl mb-28">This is work that I have saved through the years of coding.</p>
  <NuxtLink to="/projects" class="mt-4 border border-aquagreen hover:bg-aquagreen hover:text-black hover:border-aquagreen text-lg text-aquagreen font-bold py-2 px-4">
    See my Projects!
  </NuxtLink>
</div>
    </div>
  <div id="contact" class="snap-start bg-black w-screen h-screen flex flex-col justify-center items-center text-2xl">
  <p class="text-5xl font-semibold mt-10 pb-5 text-aquagreen text-center">
    Send me a message!
  </p>
  <p class="pb-5 text-aquagreen text-center">
    Got a question or proposal, or just want
    to say hello? Go ahead.
  </p>
  <div class="w-full flex justify-center items-center">
  <form action="https://formspree.io/f/xeqyyqdq" method="POST" class="bg-black px-8 pt-6 pb-8 mb-4 w-full max-w-full">
    <!-- Name and Email side by side -->
    <div class="flex w-full mb-4 space-x-40 justify-center">
      <div class="w-2/12">
        <label id="nameLabel" :class="{'text-aquagreen': isNameFocused, 'text-plum': !isNameFocused}" class="bg-black mb-2 text-center" for="name">Your Name</label>
        <input
          v-model="name"
          name="name"
          class="border-b w-full bg-black border-purple py-2 text-aquagreen text-sm focus:outline-none focus:border-aquagreen"
          id="name"
          type="text"
          placeholder="Enter your name"
          @focus="isNameFocused = true"
          @blur="isNameFocused = false"
        />
      </div>
      <div class="w-2/12">
        <label id="emailLabel" :class="{'text-aquagreen': isEmailFocused, 'text-plum': !isEmailFocused}" class="block text-base mb-2 text-center" for="email">Email Address</label>
        <input
          v-model="email"
          name="_replyto"
          class="border-b border-purple w-full py-2 bg-black text-aquagreen text-sm focus:outline-none focus:border-aquagreen"
          id="email"
          type="email"
          placeholder="Enter your email address"
          @focus="isEmailFocused = true"
          @blur="isEmailFocused = false"
        />
      </div>
    </div>
    <!-- Message -->
    <div class="w-full flex justify-center items-center">
      <div class="w-5/12">
        <label id="messageLabel" :class="{'text-aquagreen': isMessageFocused, 'text-puple': !isMessageFocused}" class="text-purple text-base mb-2 block text-center" for="message">Your Message</label>
        <textarea
          v-model="message"
          name="message"
          class="border-b border-purple w-full py-2 bg-black text-aquagreen text-sm focus:outline-none focus:border-aquagreen"
          id="message"
          placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
          @focus="isMessageFocused = true"
          @blur="isMessageFocused = false"
        ></textarea>
      </div>
    </div>
    <!-- Submit button -->
    <div class="flex items-center justify-center">
      <button
        class="mt-4 border border-aquagreen bg-transparent hover:bg-aquagreen hover:text-black text-aquagreen font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Shoot
      </button>
    </div>
  </form>
</div>
  <div class="my-5 w-4/5 bg-aquagreen h-0.5"></div>
  <div class="flex flex-wrap justify-center text-aquagreen gap-4">
    <NuxtLink to="https://github.com/mattrlee35" target="_blank">
      <button type="button" class="inline-flex text-center items-center gap-x-2 px-3.5 py-2.5 text-lg hover:underline hover:text-silver focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-2 border-black">
        <svg class="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      </button>
    </NuxtLink>
    <NuxtLink to="https://www.linkedin.com/in/matthew-lee-69647126a/" target="_blank">
      <button type="button" class="inline-flex text-center items-center gap-x-2 px-3.5 py-2.5 text-lg hover:underline hover:text-silver focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      </button>
    </NuxtLink>
    <NuxtLink to="/projects" target="_blank">
      <button type="button" class="inline-flex text-center items-center gap-x-2 px-3.5 py-2.5 shadow-sm hover:underline hover:text-golden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-2 border-black">
        Projects
      </button>
    </NuxtLink>
    <NuxtLink to="/projects" target="_blank">
      <button type="button" class="inline-flex text-center items-center gap-x-2 px-3.5 py-2.5 shadow-sm hover:underline hover:text-golden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-2 border-black">
        Resume
      </button>
    </NuxtLink>
  </div>
</div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentRoute = ref(router.currentRoute.value.name);
const isDropdownOpen = ref(false);

const isNameFocused = ref(false);
const isEmailFocused = ref(false);
const isMessageFocused = ref(false);

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

onMounted(() => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // When 50% of the target is visible
  };

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Extract section name from the entry's target id
        const sectionName = entry.target.id;
        currentRoute.value = sectionName;
      }
    });
  };

  // Observe each section individually
  const sections = document.querySelectorAll('.snap-start');
  sections.forEach((section) => {
    const observer = new IntersectionObserver(callback, options);
    observer.observe(section);
  });
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
.dropdown-menu {
  display: none;
}

.dropdown-menu.block {
  display: block;
}

.dropdown-menu.hidden {
  display: none;
}
  input,
textarea {
  text-align: left; /* Center text */
  margin-bottom: 1rem; /* Space between fields */
}
label {
  text-align: left; /* Center label text */
  display: block; /* Ensure labels take full width */
  margin-bottom: 0.5rem; /* Space below labels */
}
button {
  text-align: left; /* Center button text */
  display: inline-block;
  cursor: pointer;
  transition: background-color 0.5s, color 0.5s; /* Smooth transition */
}
form {
  padding: 2rem;
}
</style>
