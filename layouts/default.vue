<template>
    <div>

        <header>
            <div class="flex items-center">
                <div class="flex-shrink-0">
                    <a href="/">
                        <img class="h-36 w-36 rounded-full"
                            src="https://pbs.twimg.com/profile_images/1666642817676984320/iqLpm2rG_400x400.jpg"
                            alt="Emmanuel Ibe">
                    </a>
                </div>
                <div class="ml-8">
                    <h1 class="font-bold"><a href="/">Emmanuel Ibe</a> <span><a href="https://twitter.com/youngbobby"
                                rel="me"><svg class="svg-inline--fa fa-twitter text-2xl" aria-hidden="true"
                                    focusable="false" data-prefix="fab" data-icon="twitter" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                    <path fill="currentColor"
                                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                                    </path>
                                </svg>
                            </a></span>
                    </h1>
                    <!-- <p class="text-gray-500">Critical Thinker & Tinkerer • Impact Driven</p> -->
                    <p class="text-gray-800">Software Engineer, Entrepreneur, and Life-long Learner.</p>
                    <div>
                        → <NuxtLink to="/articles">Articles</NuxtLink>, <NuxtLink to="/projects">Projects</NuxtLink>,
                        <NuxtLink to="/reading">Reading</NuxtLink>
                    </div>
                </div>
            </div>
        </header>

        <div class="mt-6 mb-6 text-center border-t-8 w-36 m-auto border-dotted">
        </div>

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
</script>