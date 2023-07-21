
<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/articles', where: [{ layout: 'article' }], limit: 5, sort: [{ date: -1 }] }
</script>


<template>
    <div>
        <h1>All Articles</h1>
        <p>Here are all the articles I have written so far:</p>
        <ContentList path="/articles" v-slot="{ list }">
            <ul v-for="article in list" :key="article._path">
                <li>
                    <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
                </li>

            </ul>
        </ContentList>
    </div>
</template>
  
