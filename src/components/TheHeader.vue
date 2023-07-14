<script>
import TheLogo from './TheLogo.vue'
import HeaderNav from './HeaderNav.vue'
import AppButton from './AppButton.vue'
import HeaderUserAvatar from './HeaderUserAvatar.vue'
import HeaderSubnav from './HeaderSubnav.vue'

export default {
  components: {
    TheLogo,
    HeaderNav,
    AppButton,
    HeaderUserAvatar,
    HeaderSubnav
  },
  data() {
    return {
      isLoggedIn: false
    }
  },
  computed: {
    onJobsPage() {
      return this.$route.name === 'jobs'
    }
  },
  methods: {
    login() {
      this.isLoggedIn = true
    },
    logout() {
      this.isLoggedIn = false
    }
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
        <AppButton v-else icon="IconSignIn" @click="login">Sign in</AppButton>
      </div>
    </div>

    <HeaderSubnav v-if="onJobsPage" />
  </header>
</template>
