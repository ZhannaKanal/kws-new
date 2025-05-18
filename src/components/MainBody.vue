<template>
  <link href="../src/assets/tailwind.css" rel="stylesheet" />

  <div class="flex flex-col min-h-[100vh]">
    <div class="flex-[1_1_auto]">
      <div class="first grid grid-cols-2 gap-[50px]">
        <div class="brands relative mt-[268px] flex-[1_1_auto] flex justify-end">
          <div class="absolute w-full bg-[#CCAD7B] max-h-[529px] h-full top-[0] z-[-1]"></div>
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
            <div class="brand_block flex gap-[16px] max-h-[64px] h-full bg-[white]">
              <div class="w-[16px] bg-[#CCAD7B]"></div>
              <div class="w-[32px] bg-[#CCAD7B]"></div>
              <div class="w-[40px] bg-[#CCAD7B]"></div>
              <div class="w-[56px] bg-[#CCAD7B]"></div>
              <div class="flex-[1_1_auto] bg-[#CCAD7B]"></div>
            </div>
          </div>
        </div>
        <div class="second relative flex-[1_1_auto] mt-[120px]">
          <div
            class="blocks absolute flex flex-col max-h-max w-[calc(100%-1px)] left-[100px] top-[220px] gap-[20px]"
          >
            <div class="h-[16px] bg-[#CCAD7B]"></div>
            <div class="h-[32px] bg-[#CCAD7B]"></div>
            <div class="h-[60px] bg-[#C49955]"></div>
            <div class="h-[534px] bg-[#CCAD7B]"></div>
          </div>
          <div class="relative z-2 max-w-[600px] w-full pt-[447px]">
            <img class="h-[400px]" src="/src/assets/images/i_3.png" alt="" />
            <div class="about_company flex flex-col items-end">
              <p class="text-[30px] font-250 font-light pt-[20px]">О КОМПАНИИ</p>
              <p class="text-[#A1A1A1] pt-[30px] pb-[20px]">18 лет на рынке Казахстана</p>
              <p class="max-w-[500px] text-right leading-[28px]">
                Компания KWS предлагает своим партнерам, частным клиентам <br />
                и любителям вина богатый ассортимент спиртных напитков от <br />
                престижных мировых брендов, а также лучшие вина от <br />
                исторически значимых виноделен мира.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="second grid grid-cols-2 gap-[50px]">
        <div class="philo relative pt-[50px] flex-[1_1_auto] flex justify-end">
          <div class="first max-w-[600px] w-full">
            <p class="text-[30px] font-light">Философия компании</p>
            <p class="text-[#A1A1A1] py-[18px]">Тандем вина и модного бренда</p>
            <p class="leading-[24px]">
              Наша работа связана с уникальными продуктами. Вина и спиртные напитки <br />
              ассоциируются с праздником, эмоциями, весельем и радостью. <br />Поэтому мы стремимся
              к совершенству, гарантируя высокое качество <br />
              и эксклюзивность нашей продукции.
            </p>
            <button
              class="bg-[white] my-[55px] px-[110px] py-[15px] border-[1px] border-solid border-[#C1C1C1] rounded-[2px] font-light hover:bg-[#010101] hover:border-[#010101] hover:text-[white] duration-200"
              type="button"
            >
              Ознакомиться
            </button>
            <img class="img" src="/src/assets/images/i_2.png" draggable="false" alt="" />
          </div>
          <div
            class="second absolute w-full bg-[#CCAD7B] max-h-[800px] h-full bottom-[93px] right-[0] z-[-1]"
          ></div>
        </div>
        <div class="relative flex-[1_1_auto]">
          <div class="about_company_btn max-w-[600px] w-full flex justify-end">
            <button
              class="bg-[white] mt-[30px] mb-[50px] px-[110px] py-[15px] border-[1px] border-solid border-[#C1C1C1] rounded-[2px] font-light hover:bg-[#010101] hover:border-[#010101] hover:text-[white] duration-200"
              type="button"
            >
              Ознакомиться
            </button>
          </div>
          <div class="absolute bg-[#CCAD7B] w-full max-h-[800px] h-full left-0 z-[-1]"></div>
          <div class="relative z-2 max-w-[600px] w-full">
            <img src="/src/assets/images/i_4.png" draggable="false" alt="" />
            <div class="wine_culture flex flex-col items-end">
              <p class="text-[30px] py-4 font-light">КУЛЬТУРА ВИНА</p>
              <p class="text-[#A1A1A1] pb-[16px]">Тандем вина и модного бренда</p>
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
        class="event max-w-[1300px] w-full mx-auto my-[32px] px-[24px] flex gap-[78px] lg:gap-[100px] items-center"
      >
        <p class="text-[30px] font-light">СОБЫТИЯ</p>
        <div class="blocks flex-[1_1_auto] bg-[white] min-h-[64px] h-full flex gap-[28px]">
          <div class="w-[27px] bg-[#CCAD7B]"></div>
          <div class="w-[54px] bg-[#CCAD7B]"></div>
          <div class="w-[68px] bg-[#CCAD7B]"></div>
          <div class="w-[95px] bg-[#CCAD7B]"></div>
          <div class="flex-[1_1_auto] bg-[#CCAD7B]"></div>
        </div>
      </div>

      <div
        class="third max-w-[1300px] w-full my-[25px] mx-auto px-[24px] grid grid-cols-2 gap-[32px]"
      >
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
        <div class="two_element flex-[1_1_auto] flex justify-between">
          <div class="riedel flex-[1_1_auto] max-w-[274px] w-full ml-[37px]">
            <img src="/src/assets/images/i_6.png" draggable="false" alt="" />
            <div class="flex gap-[16px] items-center">
              <div class="min-h-[30px] w-[8px] bg-[#CCAD7B]"></div>
              <p class="leading-[28px]">
                Легендарные аксессуары Riedel <br />
                теперь в Казахстане!
              </p>
            </div>
          </div>
          <div class="kava flex-[1_1_auto] max-w-[274px] mt-[60px] w-full">
            <img src="/src/assets/images/i_7.png" draggable="false" alt="" />
            <div class="flex gap-[16px] items-center py-[20]">
              <div class="min-h-[30px] w-[8px] bg-[#CCAD7B]"></div>
              <p class="leading-[28px]">
                Устали от Кавы? Новая <br />
                категория игристых вин <br />
                Испании
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="fourth relative max-w-[1300px] w-full mx-auto my-10 px-6 grid grid-cols-2 gap-8">
        <div class="asia">
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
          <div class="here absolute right-[0] bottom-[0px]">
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
        <div class="block lg:flex justify-between items-center gap-[48px] py-[16px] mx-auto">
          <img class="b_brut mx-auto" src="/src/assets/images/Brut.png" draggable="false" alt="" />
          <p class="max-w-[420px] w-full">
            BRUT - это проект крупнейшей дистрибьюторской компании Kazakhstan Wines & Spirits.
          </p>
          <button
            class="b_btn w-full max-w-[320px] px-[100px] py-[15px] border-[1px] border-solid border-[#FFFFFF] rounded-[2px] text-[white] font-light bg-[#C49955] hover:bg-[white] hover:text-[#C49955] duration-200"
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
@media (max-width: 1280px) {
  .b_img {
    display: none;
  }
}
@media (max-width: 1024px) {
  .brut {
    margin-right: 20px;
    background: #c49955;
    width: 100%;
    justify-items: center;
  }
  .brut p {
    padding: 15px 0;
    max-width: 300px;
  }
  .b_brut {
    padding: 15px 0;
  }
}
@media (max-width: 1280px) {
  .first {
    grid-template-columns: 1fr;
  }
  .first .second {
    margin-top: -270px;
  }
  .first .second .blocks {
    left: 0;
  }
  .brands {
    justify-content: start;
  }
  .brand_block {
    display: none;
  }
  .about_company {
    align-items: start;
  }
  .about_company p {
    text-align: left;
  }
  .about_company_btn {
    justify-content: start;
  }
  .second {
    grid-template-columns: 1fr;
  }
  .second > div:first-child {
    order: 2;
  }

  .second > div:last-child {
    order: 1;
  }
  .philo {
    flex-direction: column;
  }
  .philo .first {
    margin-top: 850px;
    margin-bottom: 220px;
  }
  .philo .first .img {
    margin-top: -1101px;
  }
  .philo .second {
    top: 0;
  }
  .philo button {
    display: none;
  }
  .wine_culture {
    align-items: start;
  }
}
@media (max-width: 1280px) {
  .event {
    flex-direction: column;
    margin-top: 50px;
    align-items: flex-start;
  }
  .event p {
    order: 2;
    font-size: 30px;
    margin-top: -50px;
  }
  .event .blocks {
    order: 1;
    width: 100%;
  }
}
@media (max-width: 1280px) {
  .third {
    grid-template-columns: 1fr;
  }
  .two_element {
    flex-direction: column;
    align-items: start;
  }

  .two_element .riedel,
  .two_element .kava {
    width: 100%;
    max-width: 700px;
  }

  .two_element .riedel img,
  .two_element .kava img {
    width: 100%;
  }
  .riedel {
    margin-left: 0;
  }
  .fourth {
    grid-template-columns: 1fr;
  }
  .asia {
    margin-bottom: 950px;
  }
  .here {
    bottom: 0;
    left: 50px;
  }
}
</style>
