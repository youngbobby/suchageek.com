<template>
    <div>

        <header v-if="!isIndexPage" class="flex mb-5 md:mb-10 items-center">
            <a href="/">
                        <img alt="Emmanuel Ibe" fetchpriority="high"  decoding="async" data-nimg="1" class="w-12 h-12 rounded bg-gray-100 block mx-auto  grayscale hover:grayscale-0" src="https://pbs.twimg.com/profile_images/1695877537807716352/9-OTOs9J_400x400.jpg" style="color: transparent;">
                    </a>
            <span class="ml-3 text-md md:text-lg whitespace-nowrap font-bold">
            <span class="cursor-default pr-2">Emmanuel Ibe</span>
            <p class="font-normal text-base my-0 text-gray-500">Such a Geek</p>
        </span>
        
        <nav class="font-mono text-xs grow justify-end items-center flex gap-1 md:gap-3">
            <!-- <button aria-label="Toggle theme" class="inline-flex  active:bg-gray-300 transition-[background-color] dark:active:bg-[#242424] rounded-sm p-2 
          bg-gray-200
          dark:bg-[#313131]
          theme-system:!bg-inherit
          [&amp;_.sun-icon]:hidden
          dark:[&amp;_.moon-icon]:hidden
          dark:[&amp;_.sun-icon]:inline
        }"><span class="sun-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" stroke-width="0" viewBox="0 0 56 56">
                <path d="M30 4.6c0-1-.9-2-2-2a2 2 0 00-2 2v5c0 1 .9 2 2 2s2-1 2-2zm9.6 9a2 2 0 000 2.8c.8.8 2 .8 2.9 0L46 13a2 2 0 000-2.9 2 2 0 00-3 0zm-26 2.8c.7.8 2 .8 2.8 0 .8-.7.8-2 0-2.9L13 10c-.7-.7-2-.8-2.9 0-.7.8-.7 2.1 0 3zM28 16a12 12 0 00-12 12 12 12 0 0012 12 12 12 0 0012-12 12 12 0 00-12-12zm0 3.6c4.6 0 8.4 3.8 8.4 8.4 0 4.6-3.8 8.4-8.4 8.4a8.5 8.5 0 01-8.4-8.4c0-4.6 3.8-8.4 8.4-8.4zM51.3 30c1.1 0 2-.9 2-2s-.9-2-2-2h-4.9a2 2 0 00-2 2c0 1.1 1 2 2 2zM4.7 26a2 2 0 00-2 2c0 1.1.9 2 2 2h4.9c1 0 2-.9 2-2s-1-2-2-2zm37.8 13.6a2 2 0 00-3 0 2 2 0 000 2.9l3.6 3.5a2 2 0 002.9 0c.8-.8.8-2.1 0-3zM10 43.1a2 2 0 000 2.9c.8.7 2.1.8 3 0l3.4-3.5c.8-.8.8-2.1 0-2.9-.8-.8-2-.8-2.9 0zm20 3.4c0-1.1-.9-2-2-2a2 2 0 00-2 2v4.9c0 1 .9 2 2 2s2-1 2-2z" stroke="none" fill="currentColor"></path>
            </svg>
        </span>
        <span class="moon-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" stroke-width="0" viewBox="0 0 56 56">
            <path d="M41.2 36.1c-12.9 0-21-7.8-21-20.3 0-3.5.7-6.7 1.6-8.3.3-.7.4-1 .4-1.5 0-.8-.7-1.7-1.7-1.7-.2 0-.7 0-1.3.3A24.5 24.5 0 004.4 27.1 23.8 23.8 0 0029 51.7c10.2 0 18.4-5.3 22.3-14.1l.3-1.4c0-1-.9-1.6-1.6-1.6a3 3 0 00-1.2.2c-2 .8-4.8 1.3-7.6 1.3zM8.1 27c0-7.3 3.8-14.3 9.9-18-.8 2-1.2 4.5-1.2 7.2 0 14.6 9 23.3 23.9 23.3 2.4 0 4.5-.2 6.4-1a20.8 20.8 0 01-18 9.6C17 48 8.1 39 8.1 27z" stroke="none" fill="currentColor"></path>
        </svg>
    </span>
</button> -->
<a class="inline-flex hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-[background-color]" href="/about">
    About
</a>
<a href="https://twitter.com/youngbobby" target="_blank" class="inline-flex hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] items-center p-2 rounded-sm transition-[background-color] whitespace-nowrap -mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style="margin-right:4px"><path fill="currentColor" fill-rule="nonzero" stroke="none" stroke-width="1" d="M8.28 20.26c7.55 0 11.68-6.26 11.68-11.67v-.53c.8-.58 1.49-1.3 2.04-2.13-.74.33-1.53.54-2.36.65.85-.5 1.5-1.32 1.8-2.28-.78.48-1.66.81-2.6 1a4.1 4.1 0 0 0-7 3.74c-3.4-.17-6.43-1.8-8.46-4.29a4.1 4.1 0 0 0 1.28 5.48c-.68-.02-1.3-.2-1.86-.5v.05a4.11 4.11 0 0 0 3.29 4.02 4 4 0 0 1-1.85.08 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.43a11.67 11.67 0 0 0 6.28 1.83"></path></svg> Follow <span class="hidden md:inline">&nbsp;me</span></a>
</nav>

</header>




        <!-- Index page header -->
        <header v-if="isIndexPage" class="flex flex-col md:flex-row items-center">
            <div class="flex-shrink-0">
                <a href="/">
                    <img alt="Emmanuel Ibe" fetchpriority="high"  decoding="async" data-nimg="1" class="w-36 h-36 rounded-full bg-gray-100 block mt-2 mb-5 mx-auto  grayscale hover:grayscale-0" src="https://pbs.twimg.com/profile_images/1695877537807716352/9-OTOs9J_400x400.jpg" style="color: transparent;">
                </a>
            </div>
            <div class="ml-8 text-center md:text-left">
                <h1 class="font-bold !text-center md:!text-left"><a href="/">Emmanuel Ibe</a> <span><a href="https://twitter.com/youngbobby"
                            rel="me">

                        </a></span>
                </h1>
                <p class="text-gray-800 !text-center md:!text-left">Product Guy, Software Engineer, Entrepreneur, and Life-long Learner.</p>
                <div class="flex justify-center md:justify-start"> 
                    → <NuxtLink to="/articles" class="ml-2">Articles</NuxtLink>, <NuxtLink to="/projects" class="ml-2">Projects</NuxtLink>,
                        <NuxtLink to="/reading"  class="ml-2">Reading</NuxtLink>  
                    <!-- <NuxtLink to="/articles" class="mr-2">Articles</NuxtLink>
                    <NuxtLink to="/projects" class="mr-2">Projects</NuxtLink>
                    <NuxtLink to="/reading">Reading</NuxtLink> -->
                </div>
                
                <p class="font-mono text-sm text-center">Fingerprint: 0328 C83A 3372 5172</p>

                <div class="my-4">
                    <svg class="svg-inline--fa fa-twitter text-2xl" aria-hidden="true"
                        focusable="false" data-prefix="fab" data-icon="twitter" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor"
                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                        </path>
                    </svg>
                </div>
            </div>
        </header>

        <!-- <div class="mt-6 mb-6 text-center border-t-8 w-36 m-auto border-dotted">
        </div> -->

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
      return this.$route.path === '/';
    },
  },
};
</script>