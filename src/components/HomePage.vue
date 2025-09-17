<script setup>
import HeaderUser from './HeaderUser.vue'
import { rooms, reviews } from '@/scripts/data'
import { ref } from 'vue'
import FooterUser from './FooterUser.vue'
</script>

<template>
  <HeaderUser></HeaderUser>
  <main>
    <section class="mb-16">
      <div class="relative">
        <img class="brightness-50" src="../assets/1.png" alt="" />
        <div class="absolute text-white top-30 left-20 w-[450px]">
          <h1 class="text-7xl">WELCOME TO <span class="font-bold text-9xl">KIJIJI BEACH</span></h1>
          <p class="text-2xl mb-8">
            Book your stay and enjoy Luxury redefined at the most affordable rates.
          </p>
          <button
            class="btn shadow-sm py-6 px-14 rounded-2xl text-white bg-amber-600 border-amber-600 text-lg"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>

    <section class="flex gap-8 items-center justify-center px-16 mb-20">
      <div class="flex gap-2 items-center max-w-[50%]">
        <img src="../assets/2.png" alt="" class="w-1/2 object-cover" />
        <img src="../assets/3.png" alt="" class="w-2/5 h-[450px] object-scale-down" />
      </div>
      <div class="flex flex-col gap-4 max-w-[50%]">
        <h1 class="text-4xl font-bold">
          Welcome To Our <br />
          Kijiji Beach
        </h1>
        <p class="text-lg mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque harum quae, sint sequi
          suscipit inventore porro. Tenetur, aliquid commodi voluptas unde quos possimus! Maxime
          numquam explicabo perspiciatis tempora odio rerum.
        </p>
        <button
          class="btn hover:bg-white hover:text-black shadow-sm py-8 text-white bg-amber-600 border-amber-600 text-lg w-1/3"
        >
          Book Now
        </button>
      </div>
    </section>

    <section>
      <div class="">
        <h1 class="font-bold text-center text-4xl mb-4">Choose The Best Place For Your Vacation</h1>
        <p class="text-center">
          We have prepared several hotels, villas and apartments <br />
          to enjoy your vacation with your family.
        </p>
      </div>
      <!-- rooms -->
      <div class="grid grid-cols-4 p-16 gap-20">
        <div
          v-for="room in rooms.filter((room) => room.id <= 4)"
          :key="room.id"
          class="cursor-pointer card"
        >
          <img :src="room.roomImg" alt="" class="rounded-t-3xl" />
          <div class="mb-4 ml-4">
            <p class="mt-4 font-bold">{{ room.roomType }}</p>
            <div class="rating rating-xs gap-2">
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
            </div>
            <span class="text-gray-400 ml-2">(4.9)</span>
          </div>
          <button
            class="btn ml-4 hover:bg-white hover:text-black shadow-sm px-6 text-white bg-amber-600 border-amber-600"
          >
            {{ room.price }}/day
          </button>
        </div>
      </div>
    </section>

    <section class="my-24 px-16">
      <h1 class="text-4xl text-center font-bold mb-8">Our Customer Said</h1>
      <div class="grid grid-cols-3 gap-16 mb-20">
        <!--  -->
        <div class="card shadow-2xl rounded-2xl" v-for="review in reviews" :key="review">
          <div class="card-body">
            <div class="flex items-center gap-4">
              <div class="avatar">
                <div v-if="review.image" class="w-16 rounded-full">
                  <img :src="review.image" alt="" />
                </div>
                <div v-else>
                  <div class="w-16 h-16 bg-gray-400 rounded-full"></div>
                </div>
              </div>
              <div>
                <h2 class="card-title">{{ review.name }}</h2>
                <p>{{ review.address }}</p>
              </div>
              <div class="ml-auto flex items-center gap-1">
                <span class="text-orange-500 text-lg">★</span>
                <span class="font-semibold">{{ review.rating }}</span>
              </div>
            </div>
            <p class="opacity-50 italic">
              {{ review.message }}
            </p>
          </div>
        </div>
      </div>
      <div class="text-center">
        <span class="text-amber-600 cursor-pointer">View all reviews</span>
      </div>
    </section>

    <section class="mx-16 relative my-6">
      <div class="">
        <img src="/src/assets/5.png" alt="" class="" />
      </div>
      <div class="absolute top-10 left-40 text-white">
        <h2 class="font-bold text-4xl mb-12">Do You Want To Rent Out The Hotel?</h2>
        <p>
          We prepare the best choice of places with high quality that is <br />
          guaranteed by the hotel assessment agency.
        </p>
      </div>
      <button class="btn btn-neutral hover:bg-transparent absolute bottom-20 left-40">
        Book now
        <svg xmlns="http://www.w3.org/2000/svg" width="42.67" height="24" viewBox="0 0 16 9">
          <path
            fill="currentColor"
            d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"
          />
          <path
            fill="currentColor"
            d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"
          />
        </svg>
      </button>
    </section>
  </main>
  <FooterUser></FooterUser>
</template>
