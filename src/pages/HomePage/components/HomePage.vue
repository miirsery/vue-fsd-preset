<template>
  <div class="home-page">
    <h1 class="mb-40">This is home</h1>
    <h2>Yes, I'm home</h2>

    <div class="d-f ai-c">
      <div>Hello</div>
      <base-icon name="share" width="24" height="24" />
    </div>

    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import { getAllPosts } from '@/pages/HomePage/api'
import { BaseIcon } from '@/shared/ui'

import type { PostType } from '@/app/types/posts.type'

const posts = ref<PostType[]>([])

onMounted(() => {
  getPosts()
})

const getPosts = async (): Promise<void> => {
  const [error, data] = await getAllPosts()

  if (!error && data) {
    posts.value = data
  }
}
</script>
