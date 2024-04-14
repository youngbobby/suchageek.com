<template>
  <div>
    <header v-if="!isIndexPage" class="flex mb-5 md:mb-10 items-center px-4">
      <a href="/">
        <img
          alt="Emmanuel Ibe"
          fetchpriority="high"
          decoding="async"
          data-nimg="1"
          class="w-12 h-12 rounded bg-gray-100 block mx-auto grayscale hover:grayscale-0"
          src="https://pbs.twimg.com/profile_images/1695877537807716352/9-OTOs9J_400x400.jpg"
          style="color: transparent"
        />
      </a>

      <span class="ml-3 text-md md:text-lg whitespace-nowrap font-bold">
        <span class="cursor-default pr-2">Emmanuel Ibe</span>
        <p class="font-normal text-base my-0 text-gray-500">Such a Geek</p>
      </span>

      <nav
        class="font-mono text-xs grow justify-end items-center flex gap-1 md:gap-3"
      >
        <!-- <a class="inline-flex hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-[background-color]" href="/about">
                    About
                </a> -->
      </nav>
    </header>

    <!-- Index page header -->
    <header v-if="isIndexPage" class="flex flex-col md:flex-row items-center">
      <div class="flex-shrink-0">
        <a href="/">
          <img
            alt="Emmanuel Ibe"
            fetchpriority="high"
            decoding="async"
            data-nimg="1"
            class="w-28 h-28 rounded-full bg-gray-100 block mt-2 mb-5 mx-auto grayscale hover:grayscale-0"
            src="https://pbs.twimg.com/profile_images/1695877537807716352/9-OTOs9J_400x400.jpg"
            style="color: transparent"
          />
        </a>
      </div>
      <div class="ml-8 text-center md:text-left">
        <h1 class="font-bold !text-center md:!text-left">
          <a href="/">Emmanuel Ibe</a>
          <span><a href="https://twitter.com/youngbobby" rel="me"> </a></span>
        </h1>
        <p class="text-gray-800 !text-center md:!text-left">
          Product Guy, Software Engineer, Entrepreneur, and Life-long Learner.
        </p>
        <div class="flex justify-center md:justify-start">
          → <NuxtLink to="/articles" class="ml-2">Articles</NuxtLink>,
          <NuxtLink to="/projects" class="ml-2">Projects</NuxtLink>
          <!-- <NuxtLink to="/reading"  class="ml-2">Reading</NuxtLink>   -->
          <!-- <NuxtLink to="/articles" class="mr-2">Articles</NuxtLink>
                    <NuxtLink to="/projects" class="mr-2">Projects</NuxtLink>
                    <NuxtLink to="/reading">Reading</NuxtLink> -->
        </div>

        <!-- <p class="font-mono text-sm text-center md:text-left">
          Fingerprint: 0328 C83A 3372 5172
        </p> -->

        <!-- <div class="my-4">
          <svg
            class="svg-inline--fa fa-twitter text-2xl"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="twitter"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            ></path>
          </svg>
        </div> -->
      </div>
    </header>

    <slot />
  </div>
</template>

<script>
// import { onMounted } from '@vue/runtime-core';

// export default {
//     methods: {
//         toggleDarkMode() {
//             document.body.classList.toggle('latex-dark');
//         }
//     },

// }

export default {
  computed: {
    isIndexPage() {
      return this.$route.path === "/";
    },
  },
};
</script>
