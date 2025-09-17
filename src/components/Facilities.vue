<script setup>
import FooterUser from './FooterUser.vue'
import HeaderUser from './HeaderUser.vue'
</script>

<template>
  <HeaderUser />
  <main class="pt-40">
    <div class="space-y-4 max-w-5xl mx-auto text-center mb-16">
      <h2 class="text-amber-600 text-5xl font-bold">FACILITIES</h2>
      <p class="text-justify leading-relaxed">
        We want your stay at our lush hotel to be truly unforgettable. That is why we give special
        attention to all of your needs so that we can ensure an experience quite uniquw. Luxury
        hotels offers the perfect setting with stunning views for leisure and our modern luxury
        resort facilities will help you enjoy the best of all.
      </p>
    </div>

    <section class="">
      <div class="relative mb-40">
        <div class="flex justify-center">
          <img src="/src/assets/f1.png" alt="" class="w-3/5" />
        </div>
        <div class="absolute bg-amber-600 w-xs h-[150px] left-150 -bottom-20">
          <h3 class="text-white text-center text-5xl font-bold leading-tight">
            SWIMMING <br />
            POOL
          </h3>
        </div>
      </div>

      <div class="relative mb-40">
        <div class="flex justify-center">
          <img src="/src/assets/f2.png" alt="" class="w-3/5" />
        </div>
        <div class="absolute bg-amber-600 left-135 -bottom-20">
          <h3 class="text-white py-8 px-16 text-center text-5xl font-bold leading-tight">
            RESTAURANT
          </h3>
        </div>
      </div>

      <div class="relative mb-40">
        <div class="flex justify-center">
          <img src="/src/assets/f3.png" alt="" class="w-3/5" />
        </div>
        <div class="absolute bg-amber-600 left-150 -bottom-20">
          <h3 class="text-white py-8 px-16 text-center text-5xl font-bold leading-tight">
            THE SPA
          </h3>
        </div>
      </div>
    </section>
  </main>
  <footer-user />
</template>
