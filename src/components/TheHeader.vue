<script>
import TheLogo from './TheLogo.vue'
import HeaderNav from './HeaderNav.vue'
import AppButton from './AppButton.vue'
import HeaderUserAvatar from './HeaderUserAvatar.vue'

export default {
  components: {
    TheLogo,
    HeaderNav,
    AppButton,
    HeaderUserAvatar
  },
  data() {
    return {
      isLoggedIn: false
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
  <header class="relative -top-px">
    <div class="bg-white">
      <div class="flex items-center justify-between border-b px-8">
        <TheLogo />
        <div class="flex items-center gap-5">
          <HeaderNav />
          <div class="h-8 border-r"></div>
          <template v-if="isLoggedIn">
            <HeaderUserAvatar />
            <AppButton type="danger" size="small" @click="logout">Logout</AppButton>
          </template>
          <AppButton v-else @click="login">Sign in</AppButton>
        </div>
      </div>
    </div>
  </header>
</template>
