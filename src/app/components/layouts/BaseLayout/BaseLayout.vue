<template>
  <div class="base-layout">
    <base-sidebar />
    <div class="base-layout__content-wrapper">
      <base-header />

      <div class="base-layout__content">
        <div class="base-layout__container">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BaseSidebar, BaseHeader } from '@/widgets/BaseLayout'
</script>

<style lang="scss" scoped>
.base-layout {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;

  &__content-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @include responsive(xs) {
      height: calc(100% - 60px);
    }
  }

  &__content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 50px;
    overflow-y: auto;

    @include responsive(xs, $breakpoints-only-max) {
      padding: 0 10px 40px;
    }
  }

  &__container {
    width: 100%;
    height: fit-content;
    max-width: 1016px;

    @include responsive(sm, $breakpoints-only-max) {
      max-width: 620px;
    }

    @include responsive(xs, $breakpoints-only-max) {
      max-width: 355px;
    }
  }

  @include responsive(xs) {
    flex-direction: column-reverse;
  }
}
</style>
