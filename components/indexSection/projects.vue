<template>
    <div
        class="bg-black w-1/2 h-1/2 flex flex-col text-5xl items-center justify-center">
        <p class="text-center mb-10">Here you can find all my projects!</p>
        <p class="text-center text-3xl mb-28">
            This is work that I have saved through the years of coding.
        </p>
        <NuxtLink
            to="/projects">
            <button class="mt-4 border border-aquagreen bg-transparent hover:bg-aquagreen hover:text-black text-aquagreen font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline"
					type="button">
            See my Projects!
            </button>
        </NuxtLink>
    </div>
</template>

<style scoped>
button {
		text-align: left; /* Center button text */
		display: inline-block;
		cursor: pointer;
		transition: background-color 0.5s, color 0.5s; /* Smooth transition */
	}
</style>