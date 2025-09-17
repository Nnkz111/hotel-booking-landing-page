<script setup>
import { rooms } from '@/scripts/data'
import HeaderUser from './HeaderUser.vue'
import FooterUser from './FooterUser.vue'
</script>

<template>
  <HeaderUser></HeaderUser>
  <main>
    <section class="">
      <div class="relative w-full">
        <img src="/src/assets/1.png" alt="" class="w-[1000px] object-cover" />
        <div class="bg-[#323232] text-white absolute w-md h-[250px] top-1/3 right-1/8">
          <h2 class="text-5xl text-center translate-y-10">
            We have amazing rooms browse your favorites
          </h2>
        </div>
      </div>
    </section>

    <section class="my-24">
      <div class="text-center">
        <h2 class="text-2xl font-bold">Choose The Best Place For Your Vacation</h2>
        <p>
          We have prepared several hotels, villas and apartments to enjoy your vacation with your
          family.
        </p>
      </div>
      <!--  -->
      <div class="grid grid-cols-4 gap-12">
        <div class="card" v-for="room in rooms" :key="room.id">
          <div class="card-body space-y-1">
            <img :src="room.roomImg" alt="" class="w-full rounded-t-3xl" />
            <p class="ml-2 font-bold text-lg">{{ room.roomType }}</p>
            <div class="rating rating-xs gap-2 ml-2 mb-2">
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                aria-label="2 star"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                aria-label="5 star"
                checked="checked"
              />
              <span class="bg-transparent opacity-70 ml-2">({{ room.rating }})</span>
            </div>

            <router-link to="/roomdetail">
              <button
                class="btn ml-4 w-32 hover:bg-white hover:text-black shadow-sm text-white bg-amber-600 border-amber-600"
              >
                {{ room.price }}/day
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </main>
  <FooterUser></FooterUser>
</template>
