<script setup lang="ts">
import * as Icons from '@starzkg/vuepress-icons'
import { useCopyToClipboard } from '@starzkg/vuepress-shared/client'

const copyIcon = (icon: string): void => {
  useCopyToClipboard(`<${icon} />`)
}
</script>

<template>
  <div class="icon-display-container">
    <div v-for="(icon, name) in Icons" :key="icon" class="icon-item">
      <span class="demo-svg-icon" @click="copyIcon(name)">
        <Component :is="icon" class="icon" />
        <span class="text" v-text="name" />
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon-display-container {
  display: flex;
  margin: 10px 0;
  flex-wrap: wrap;
  border-top: 1px solid var(--c-border);
  border-left: 1px solid var(--c-border);
  border-radius: 4px;

  .icon-item {
    box-sizing: border-box;
    width: 20%;
    text-align: center;
    border-right: 1px solid var(--c-border);
    border-bottom: 1px solid var(--c-border);
    height: 120px;

    .demo-svg-icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      height: 100%;

      .icon {
        color: var(--dark-grey);
        width: 32px;
      }

      .text {
        margin-top: 10px;
        font-size: 14px;
      }

      @media (max-width: 768px) {
        width: 25%;
      }

      @media (max-width: 412px) {
        width: 33.333%;
      }

      &:hover {
        background-color: var(--c-bg-light);
        cursor: pointer;
      }
    }
  }
}
</style>
