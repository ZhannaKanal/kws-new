<template>
  <link href="/dist/output.css" rel="stylesheet" />

  <div class="flex flex-col min-h-[100vh]">
    <div class="flex-[1_1_auto] mt-[-35px]">
      <div class="grid grid-cols-2 gap-[50px]">
        <div class="relative pt-[130px] flex-[1_1_auto] flex justify-end">
          <div class="absolute w-full bg-[#CCAD7B] max-h-[529px] h-full bottom-0 z-[-1]"></div>
          <div class="max-w-[605px] w-full pt-[96px]">
            <img src="/src/assets/images/i_1.png" draggable="false" alt="" />
            <p class="text-[30px] py-[20px] font-light font-[]">БРЕНДЫ</p>
            <p class="text-[#A1A1A1] pb-[16px]">№1 по импорту тихих и игристых вин</p>
            <p class="leading-[28px]">
              В коллекции KWS более 150 производителей, являющихся лидерами <br />
              в своей сфере. Мы передаем наследие каждого бренда, уважая и <br />
              поддерживая высокое качество их продукции.
            </p>
            <button
              class="bg-[white] px-[110px] my-[50px] py-[15px] border-[1px] border-solid border-[#C1C1C1] rounded-[2px] font-light hover:bg-[#010101] hover:border-[#010101] hover:text-[white] duration-200"
              type="button"
            >
              Ознакомиться
            </button>
            <div class="flex gap-[16px] max-h-[64px] h-full bg-[white]">
              <div class="w-[16px] bg-[#CCAD7B]"></div>
              <div class="w-[32px] bg-[#CCAD7B]"></div>
              <div class="w-[40px] bg-[#CCAD7B]"></div>
              <div class="w-[56px] bg-[#CCAD7B]"></div>
              <div class="flex-[1_1_auto] bg-[#CCAD7B]"></div>
            </div>
          </div>
        </div>
        <div class="relative flex-[1_1_auto]">
          <div
            class="absolute flex flex-col max-h-max w-[calc(100%-100px)] left-[100px] top-[220px] gap-[20px]"
          >
            <div class="h-[16px] bg-[#CCAD7B]"></div>
            <div class="h-[32px] bg-[#CCAD7B]"></div>
            <div class="h-[60px] bg-[#C49955]"></div>
            <div class="h-[534px] bg-[#CCAD7B]"></div>
          </div>
          <div class="relative z-2 max-w-[600px] w-full pt-[447px]">
            <img class="h-[400px]" src="/src/assets/images/i_3.png" alt="" />
            <div class="flex flex-col items-end">
              <p class="text-[30px] font-250 font-light">О КОМПАНИИ</p>
              <p class="text-[#A1A1A1]">18 лет на рынке Казахстана</p>
              <p class="max-w-[490px] text-right leading-[28px]">
                Компания KWS предлагает своим партнерам, частным клиентам <br />
                и любителям вина богатый ассортимент спиртных напитков от <br />
                престижных мировых брендов, а также лучшие вина от <br />
                исторически значимых виноделен мира.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-[50px]">
        <div class="relative pt-9 flex-[1_1_auto] flex justify-end">
          <div class="max-w-[600px] w-full">
            <p class="text-[30px] font-light">Философия компании</p>
            <p class="text-[#A1A1A1] py-[12px]">Тандем вина и модного бренда</p>
            <p class="leading-[24px]">
              Наша работа связана с уникальными продуктами. Вина и спиртные напитки <br />
              ассоциируются с праздником, эмоциями, весельем и радостью. <br />Поэтому мы стремимся
              к совершенству, гарантируя высокое качество <br />
              и эксклюзивность нашей продукции.
            </p>
            <button
              class="bg-[white] my-[42px] px-[110px] py-[15px] border-[1px] border-solid border-[#C1C1C1] rounded-[2px] font-light hover:bg-[#010101] hover:border-[#010101] hover:text-[white] duration-200"
              type="button"
            >
              Ознакомиться
            </button>
            <img src="/src/assets/images/i_2.png" draggable="false" alt="" />
          </div>
          <div
            class="absolute w-full bg-[#CCAD7B] max-h-[800px] h-full bottom-[155.5px] right-0 z-[-1]"
          ></div>
        </div>
        <div class="relative flex-[1_1_auto]">
          <div class="max-w-[600px] w-full flex justify-end">
            <button
              class="bg-[white] mt-[36px] mb-[50px] px-[110px] py-[15px] border-[1px] border-solid border-[#C1C1C1] rounded-[2px] font-light hover:bg-[#010101] hover:border-[#010101] hover:text-[white] duration-200"
              type="button"
            >
              Ознакомиться
            </button>
          </div>
          <div class="absolute bg-[#CCAD7B] w-full max-h-[800px] h-full left-0 z-[-1]"></div>
          <div class="relative z-2 max-w-[600px] w-full">
            <img src="/src/assets/images/i_4.png" draggable="false" alt="" />
            <div class="flex flex-col items-end">
              <p class="text-[30px] py-5 font-light">КУЛЬТУРА ВИНА</p>
              <p class="text-[#A1A1A1] py-4">Тандем вина и модного бренда</p>
              <p>
                Наша миссия - развитие винной культуры Казахстана <br />
                и создание новых трендов.
              </p>
              <button
                class="bg-[white] mt-[50px] px-[110px] py-[15px] border-[1px] border-solid border-[#C1C1C1] rounded-[2px] font-light hover:bg-[#010101] hover:border-[#010101] hover:text-[white] duration-200"
                type="button"
              >
                Ознакомиться
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="max-w-[1300px] w-full mx-auto my-[32px] px-[24px] flex gap-[78px] lg:gap-[100px] items-center"
      >
        <p class="text-[30px] font-light">СОБЫТИЯ</p>
        <div class="flex-[1_1_auto] bg-[white] min-h-[64px] h-full flex gap-[28px]">
          <div class="w-[27px] bg-[#CCAD7B]"></div>
          <div class="w-[54px] bg-[#CCAD7B]"></div>
          <div class="w-[68px] bg-[#CCAD7B]"></div>
          <div class="w-[95px] bg-[#CCAD7B]"></div>
          <div class="flex-[1_1_auto] bg-[#CCAD7B]"></div>
        </div>
      </div>
      <div class="max-w-[1300px] w-full my-[25px] mx-auto px-[24px] grid grid-cols-2 gap-[32px]">
        <div>
          <img src="/src/assets/images/i_5.png" draggable="false" alt="" />
          <div class="flex gap-[16px] items-center py-[20px]">
            <div
              class="flex-[1_1_auto] max-w-[88px] bg-[white] min-h-[30px] h-full flex gap-[12px]"
            >
              <div class="flex-[1_1_auto] bg-[#CCAD7B]"></div>
              <div class="w-[16px] bg-[#CCAD7B]"></div>
              <div class="w-[8px] bg-[#CCAD7B]"></div>
            </div>
            <p>Dom Perignon x Lady Gaga</p>
          </div>
        </div>
        <div class="flex-[1_1_auto] flex justify-between">
          <div class="flex-[1_1_auto] max-w-[274px] w-full ml-[37px]">
            <img src="/src/assets/images/i_6.png" draggable="false" alt="" />
            <div class="flex gap-[16px] items-center ">
              <div class="min-h-[30px] w-[8px] bg-[#CCAD7B]"></div>
              <p class="leading-[28px]">Легендарные аксессуары Riedel <br> теперь в Казахстане!</p>
            </div>
          </div>
          <div class="flex-[1_1_auto] max-w-[274px] mt-[80px] w-full">
            <img src="/src/assets/images/i_7.png" draggable="false" alt="" />
            <div class="flex gap-[16px] items-center py-[20]">
                <div class="min-h-[30px] w-[8px] bg-[#CCAD7B]"></div>
              <p class="leading-[28px]">Устали от Кавы? Новая <br> категория игристых вин <br> Испании</p>
            </div>
          </div>
        </div>
      </div>
      <div class="relative max-w-[1300px] w-full mx-auto my-10 px-6 grid grid-cols-2 gap-8">
        <div>
          <img src="/src/assets/images/i_8.png" draggable="false" alt="" />
          <div class="flex gap-[16px] items-center py-5">
            <div
              class="flex-[1_1_auto] max-w-[88px] bg-[white] min-h-[30px] h-full flex gap-[12px]"
            >
              <div class="flex-[1_1_auto] bg-[#CCAD7B]"></div>
              <div class="w-[16px] bg-[#CCAD7B]"></div>
              <div class="w-[8px] bg-[#CCAD7B]"></div>
            </div>
            <p>AIN Asia Awards</p>
          </div>
        </div>
        <div class="relative right-6 bottom-[0px]">
          <div class="absolute right-[0] bottom-[0px]">
            <img src="/src/assets/images/i_9.png" draggable="false" alt="" />
            <div class="flex gap-[16px] items-center py-5">
              <div
                class="flex-[1_1_auto] max-w-[96px] bg-[white] min-h-[30px] h-full flex gap-[12px]"
              >
                <div class="flex-[1_1_auto] bg-[#CCAD7B]"></div>
                <div class="w-[16px] bg-[#CCAD7B]"></div>
                <div class="w-[8px] bg-[#CCAD7B]"></div>
              </div>
              <p>Новинка Винокурни Ardbeg</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="brut relative top-[0] max-w-[1300px] w-full lg:max-h-[80px] h-full my-[80px] mx-auto px-[24px] flex justify-between bg-[#C49955] text-[16px] text-[#FFFFFF]"
      >
        <img class="b_img" src="/src/assets/images/i_10.png" draggable="false" alt="" />
        <div class="block lg:flex  justify-between items-center gap-[48px] py-[16px] mx-auto">
          <img class="b_brut mx-auto" src="/src/assets/images/Brut.png" draggable="false" alt="" />
          <p class="max-w-[420px] w-full">
            BRUT - это проект крупнейшей дистрибьюторской компании Kazakhstan Wines & Spirits.
          </p>
          <button
            class="b_btn w-full max-w-[320px]  px-[100px] py-[15px] border-[1px] border-solid border-[#FFFFFF] rounded-[2px] text-[white] font-light bg-[#C49955] hover:bg-[white] hover:text-[#C49955] duration-200"
            type="button"
          >
            Перейти
          </button>
        </div>
        <img class="b_img" src="/src/assets/images/i_10.png" draggable="false" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
@media (max-width:1280px){
    .b_img{
    display: none;
  }
}
@media (max-width:1024px){
  .brut{
    margin-right: 20px;
    background: #C49955;
    width: 100%;
    justify-items: center;
  }
  .brut p{
    padding: 15px 0;
    max-width: 300px;
  }
  .b_brut{
    padding: 15px 0;
  }
}
</style>
