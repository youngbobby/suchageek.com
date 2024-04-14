<template>
  <main class="max-w-2xl px-4 md:pl-10">
    <template v-if="$route.path.startsWith('/blog/')">
      <nav class="text-gray-700 text-sm mb-4">
        <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
        <span class="mx-2">&raquo;</span>
        <NuxtLink to="/articles" class="hover:underline">Articles</NuxtLink>
      </nav>
    </template>

    <!-- <ContentDoc /> -->

    <ContentDoc v-slot="{ doc }">
      <article>
        <!-- <h1>{{ doc.title }}</h1> -->
        <p v-if="doc.createdAt" class="text-gray-600 text-sm">
          {{
            new Date(doc.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            })
          }}
        </p>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </main>
</template>

<!-- <script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content(params.slug).fetch();
    return { doc };
  },
};
</script> -->
