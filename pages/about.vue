<template>
  <div class="container">
    <section class="text-white body-font">
      <div class="container mx-auto flex py-2 py-12 items-center justify-center flex-col">
        <div class="flex flex-wrap justify-center">
          <div class="p-4 lg:w-full">
            <div class="h-full card-about shadow-md px-8 pt-16 pb-20 rounded-lg overflow-hidden relative">
              <img class="lg:w-1/4 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-full mx-auto" alt="hero" src="https://avatars1.githubusercontent.com/u/33148052?v=4">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-center" :style="{ color: '#ff8906' }">
                Hi, Satya Wikananda here 👋
              </h1>
              <p class="mb-8 leading-relaxed text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium et ullam vitae amet voluptatibus illum officiis dolore mollitia earum cum voluptates rem voluptatem, reprehenderit vel odit quis voluptatum totam non hic? Iure eum suscipit fugiat labore, necessitatibus sint at quo deserunt rem ea a dolores nobis dolorem. Beatae perferendis aliquam consequatur soluta ex aperiam dignissimos harum itaque est ducimus voluptatibus voluptatem deserunt repellendus illum, sapiente deleniti cupiditate rem praesentium consectetur voluptatum suscipit sequi placeat ad. Veritatis nemo dolorem eius, temporibus tenetur earum consequatur illum fugit minus iure? Culpa magni vel quae amet suscipit ad similique tempora molestias? Odio, debitis inventore.
              </p>
              <p class="leading-relaxed text-center mb-2">
                You can reach me in :
              </p>
              <div class="flex flex-row container justify-center">
                <social-media :icons="['fab', 'github']" link="https://github.com/satyawikananda" />
                <social-media :icons="['fab', 'instagram']" link="https://instagram.com/satyawikananda" />
                <social-media :icons="['fab', 'facebook']" link="https://facebook.com/satyawikananda23" />
                <social-media :icons="['fab', 'telegram']" link="https://t.me/satyawikananda" />
                <social-media :icons="['fab', 'twitter']" link="https://twitter.com/satya_wikananda" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap justify-center">
          <div class="p-4 lg:w-full">
            <div class="h-full card-about shadow-md px-8 pt-16 pb-24 rounded-lg overflow-hidden relative">
              <h2 class="text-left title-skills title-font text-3xl font-bold text-left py-2 mb-8">
                My Skills and knowledge based
              </h2>
              <h5 class="mb-4 title-font text-lg font-medium">
                Languages
              </h5>
              <div class="flex flex-wrap -m-4">
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  test
                </div>
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  test
                </div>
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  test
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Aboutme'
}
</script>

<style lang="scss">
  .title-skills {
    color: #ff8906;
     &::after {
      content: '';
      display: block;
      width: 0;
      height: 3px;
      background-color: #ff8906;
      width: 30%;
    }
  }
</style>
