<template>
  <div class="base-layout">
    <base-header />

    <router-view />
  </div>
</template>

<script lang="ts" setup>
import BaseHeader from '@/widgets/BaseLayout/BaseHeader/BaseHeader.vue'
</script>
