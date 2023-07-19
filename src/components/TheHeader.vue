<script>
import TheLogo from './TheLogo.vue'
import HeaderNav from './HeaderNav.vue'
import AppButton from './AppButton.vue'
import HeaderUserAvatar from './HeaderUserAvatar.vue'
import HeaderSubnav from './HeaderSubnav.vue'
import { mapState, mapActions } from 'pinia'
import { useAuthStore } from '@/store/auth'

export default {
  components: {
    TheLogo,
    HeaderNav,
    AppButton,
    HeaderUserAvatar,
    HeaderSubnav
  },
  computed: {
    onJobsPage() {
      return this.$route.name === 'jobs'
    },
    ...mapState(useAuthStore, ['isLoggedIn'])
  },
  methods: {
    ...mapActions(useAuthStore, ['login', 'logout'])
  }
}
</script>

<template>
  <header class="sticky top-0 mb-10 bg-white">
    <div class="flex items-center justify-between border-b px-8">
      <TheLogo />
      <div class="flex items-center gap-5">
        <HeaderNav />
        <div class="h-8 border-r"></div>
        <template v-if="isLoggedIn">
          <HeaderUserAvatar />
          <AppButton type="danger" @click="logout">Logout</AppButton>
        </template>
        <AppButton v-else @click="login">Sign in</AppButton>
      </div>
    </div>

    <HeaderSubnav v-if="onJobsPage" />
  </header>
</template>
