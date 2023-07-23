<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import HeaderNav from '@/components/HeaderNav.vue'
import HeaderUserAvatar from '@/components/HeaderUserAvatar.vue'
import AppButton from '@/components/AppButton.vue'
import TheLogo from '@/components/TheLogo.vue'
import HeaderSubnav from '@/components/HeaderSubnav.vue'

import { useAuthStore } from '@/store/auth'

const route = useRoute()
const store = useAuthStore()

const onJobsPage = computed(() => {
  return route.name === 'jobs'
})
</script>

<template>
  <header class="sticky top-0 z-50 mb-10 bg-white">
    <div class="flex items-center justify-between border-b px-8">
      <TheLogo />
      <div class="flex items-center gap-5">
        <HeaderNav />
        <div class="h-8 border-r"></div>
        <template v-if="store.isLoggedIn">
          <HeaderUserAvatar />
          <AppButton type="danger" @click="store.logout">Logout</AppButton>
        </template>
        <AppButton v-else @click="store.login">Sign in</AppButton>
      </div>
    </div>

    <HeaderSubnav v-if="onJobsPage" />
  </header>
</template>
