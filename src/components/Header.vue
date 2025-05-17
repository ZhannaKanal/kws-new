<template>
  <div class="relative">
    <img
      class="absolute z-1 w-full min-h-[100vh] h-full"
      src="/src/assets/images/main.png"
      draggable="false"
      alt=""
    />
    <div class="relative z-15">
      <div class="hover:bg-[#222222]">
        <div class="flex items-center max-w-[1300px] w-full mx-auto py-[45px]">
          <div class="lg:hidden flex justify-start px-6">
            <img class="" src="" alt="" />
          </div>
          <div class="flex-[1_1_auto] flex justify-center">
            <img src="/src/assets/images/logo.png" draggable="false" alt="" />
          </div>
          <div class="opacity-0 justify-end px-6">
            <img class="" src="" alt="" />
          </div>
        </div>
        <div class="max-w-[900px] w-full mx-auto flex justify-between py-[16px]">
          <a href="/onas" class="no-underline text-[white] hover:text-[#7F7F7F] text-[16px] font-light">О НАС</a>
          <a href="" class="no-underline text-[white] hover:text-[#7F7F7F] text-[16px] font-light">УСЛУГИ</a>
          <a href="" class="no-underline text-[white] hover:text-[#7F7F7F] text-[16px] font-light">БРЕНДЫ</a>
          <a href="" class="no-underline text-[white] hover:text-[#7F7F7F] text-[16px] font-light">СОБЫТИЯ</a>
          <a href="" class="no-underline text-[white] hover:text-[#7F7F7F] text-[16px] font-light">КОНТАКТЫ</a>
          <div class="flex mt-[-16px] gap-[6px] items-center hover:text-[#7F7F7F]">
            <p class="text-[white] hover:text-[#7F7F7F]">RU</p>
            <img
              class=""
              src="/src/assets/icons/i_1.png"
              draggable="false"
              alt=""
            />
          </div>
        </div>
      </div>
      <p
        class="w-full my-[250px] flex justify-center px-12 text-center text-[24px] font-light text-[white] leading-[40px]"
      >
        - Компания Kazakhstan Wines & Spirits - <br />
        ведущий импортер премиальных вин и спиртных <br />
        напитков на территории Казахстана.
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
