<template>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <Disclosure as="nav" class="z-20 bg-cornflower border-b-4 border-golden sticky top-0 z-10" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <!-- Mobile menu button -->
              <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span class="sr-only">Open main menu</span>
                <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
              <div class="hidden sm:px-6 sm:flex"> 
              <NuxtLink class="inline-flex items-center border-b-4 border-transparent px-5 pt-1 text-2xl font-medium bg-darkerblue text-golden hover:text-golden focus:bg-darkerblue focus:text-golden hover:underline" to="/">Home</NuxtLink>
              <NuxtLink class="inline-flex items-center border-b-4 border-transparent px-5 pt-1 text-2xl font-medium text-offwhite hover:text-golden focus:bg-darkerblue focus:text-golden hover:underline" to="/about">About Me</NuxtLink>
              <NuxtLink class="inline-flex items-center border-b-4 border-transparent px-5 pt-1 text-2xl font-medium text-offwhite hover:text-golden focus:bg-darkerblue focus:text-golden hover:underline" to="/projects">Projects</NuxtLink>
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <!-- THIS IS A DIV FOR THE RIGHT SIDE OF THE NAV MAYBE USE FOR LATER -->
            </div>
          </div>
        </div>
        <DisclosurePanel class="sm:hidden">
          <div class="space-y-1 pb-4 pt-2">
            <DisclosureButton as="a" href="/" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-slate-300 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">Home</DisclosureButton>
            <DisclosureButton as="a" href="/about" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-slate-300 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">About Me</DisclosureButton>
            <DisclosureButton as="a" href="/projects" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-slate-300 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">Projects</DisclosureButton>
          </div>
        </DisclosurePanel>
    </Disclosure>
    <div>
      <slot />
    </div>
  </template> 
  
  <script setup>
    import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
    import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  </script>