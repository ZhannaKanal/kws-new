<template>
  <link href="/dist/output.css" rel="stylesheet" />

  <footer class="relative top-[0] bg-[#222222] text-[16px]">
    <div class="flex justify-center py-[50px]">
      <img src="/src/assets/images/logo.png" draggable="false" alt="" />
    </div>
    <div class="container">
      <img class="line-image_1" src="/src/assets/images/line.png" draggable="false" alt="" />

      <div class="center-block">
        <p style="color: white">СЛЕДИТЕ ЗА НАМИ</p>
        <a href=""><img src="/src/assets/images/i_11.png" draggable="false" alt="" /></a>
        <a href=""><img src="/src/assets/images/i_12.png" draggable="false" alt="" /></a>
      </div>

      <img class="line-image_2" src="/src/assets/images/line.png" draggable="false" alt="" />
    </div>
    <div class="last max-w-[1300px] w-full mx-auto block lg:flex py-6 text-center justify-between">
      <p class="text-[#585858]">Все права защищены 2021</p>
      <p class="text-[#585858]">Разработано Digital Agency Nidge</p>
    </div>
  </footer>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style scoped>
.container {
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 16px;
}

.line-image_1 {
  width: 100%;
  max-width: 460px;
}
.line-image_2 {
  width: 100%;
  max-width: 460px;
}

.center-block {
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
  grid-row: span 1;
}

@media (max-width: 1024px) {
  .container {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    margin: auto;
    text-align: center;
    justify-items: center;
  }

  .line-image_1 {
    display: none;
  }
  .line-image_2 {
    width: 100%;
  }

  .center-block {
    grid-row: span 2;
  }
}
@media (min-width: 1025px) and (max-width: 1400px){
  .container{
    padding: 0 50px;
  }
  .last{
    padding: 30px 50px;
  }
}
</style>
