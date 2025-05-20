<template>
  <link href="/dist/output.css" rel="stylesheet" />

  <div class="relative">
    <img
      class="absolute z-1 w-full min-h-[100vh] h-full"
      src="/src/assets/images/main.png"
      draggable="false"
      alt=""
    />
    <div class="relative z-15">
      <header
        :class="[
          'fixed top-0 left-0 w-full z-50 text-white uppercase transition-colors duration-300',
          isScrolled ? 'bg-[#222222]' : '',
          !isMenuOpen ? 'hover:bg-[#222222]' : '',
        ]"
      >
        <div
          v-if="!isMenuOpen"
          class="flex items-center justify-between max-w-[1300px] w-full mx-auto py-[45px] px-6 lg:px-0"
        >
          <div class="lg:hidden">
            <button @click="openMenu">
              <img src="@/assets/icons/h_1.png" alt="Menu" />
            </button>
          </div>

          <div class="flex-1 flex justify-center">
            <img src="/src/assets/images/logo.png" draggable="false" alt="Logo" />
          </div>

          <div class="opacity-0 lg:hidden">
            <img src="@/assets/icons/h_1.png" alt="" />
          </div>
        </div>

        <div class="max-w-[900px] w-full mx-auto hidden lg:flex justify-between py-[16px]">
          <a href="/onas" class="text-white hover:text-[#7F7F7F] text-[16px] font-light">О НАС</a>
          <a href="#" class="text-white hover:text-[#7F7F7F] text-[16px] font-light">УСЛУГИ</a>
          <a href="#" class="text-white hover:text-[#7F7F7F] text-[16px] font-light">БРЕНДЫ</a>
          <a href="#" class="text-white hover:text-[#7F7F7F] text-[16px] font-light">СОБЫТИЯ</a>
          <a href="#" class="text-white hover:text-[#7F7F7F] text-[16px] font-light">КОНТАКТЫ</a>
          <div class="flex gap-2 items-center hover:text-[#7F7F7F]">
            <p>RU</p>
            <img class="w-[12px] h-[6px]" src="/src/assets/icons/i_1.png" alt="" />
          </div>
        </div>

        <div
          v-if="isMenuOpen"
          class="fixed top-0 left-0 w-full h-screen flex flex-col items-start justify-start z-50 "
        >
          <div class="bg-[#222222] w-2/3 flex flex-col items-center justify-center transition-colors duration-300'">
            <div class="max-w-[250px] w-full mx-auto items-start">
              <div class="py-[20px] flex justify-between">
                <a href="/onas" @click="closeMenu" class="hover:text-[#7F7F7F]">О НАС</a>
                <img src="../assets/icons/h_3.svg" alt="" />
              </div>
              <hr class="flex-1 border-0 h-[1px] bg-[#FFFFFF29]" />
              <div class="py-[20px] flex justify-between">
                <a href="/onas" @click="closeMenu" class="hover:text-[#7F7F7F]">УСЛУГИ</a>
                <img src="../assets/icons/h_3.svg" alt="" />
              </div>
              <hr class="flex-1 border-0 h-[1px] bg-[#FFFFFF29]" />
              <div class="py-[20px] flex justify-between">
                <a href="/onas" @click="closeMenu" class="hover:text-[#7F7F7F]">БРЕНДЫ</a>
                <img src="../assets/icons/h_3.svg" alt="" />
              </div>
              <hr class="flex-1 border-0 h-[1px] bg-[#FFFFFF29]" />
              <div class="py-[20px]">
                <a href="#" @click="closeMenu" class="hover:text-[#7F7F7F]">СОБЫТИЯ</a>
              </div>
              <hr class="flex-1 border-0 h-[1px] bg-[#FFFFFF29]" />
              <div class="py-[20px]">
                <a href="#" @click="closeMenu" class="hover:text-[#7F7F7F]">КОНТАКТЫ</a>
              </div>
              <hr class="flex-1 border-0 h-[1px] bg-[#FFFFFF29]" />
              <div class="flex flex-col py-[20px]">
                <p class="hover:text-[#7F7F7F]">RU</p>
                <p class="hover:text-[#7F7F7F] py-[20px]">EN</p>
              </div>
            </div>
          </div>
          <!-- Close button -->
          <button @click="closeMenu" class="absolute right-[100px] top-[20px]">
            <img src="@/assets/icons/h_2.png" alt="Menu" />
          </button>
        </div>
      </header>

      <p
        class="w-full pt-[400px] flex justify-center px-12 text-center text-[24px] font-light text-[white] leading-[40px]"
      >
        - Компания Kazakhstan Wines & Spirits - <br />
        ведущий импортер премиальных вин и спиртных <br />
        напитков на территории Казахстана.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const openMenu = () => {
  isMenuOpen.value = true
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header-scrolled {
  background-color: #222222;
}
</style>
<!-- <link href="/dist/output.css" rel="stylesheet" /> -->
