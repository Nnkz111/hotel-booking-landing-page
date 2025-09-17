<script setup>
import FooterUser from './FooterUser.vue'
import HeaderUser from './HeaderUser.vue'
</script>
<template>
  <HeaderUser />
  <main>
    <div>
      <img src="/src/assets/6.png" alt="" />
    </div>

    <section class="flex mx-40 my-20">
      <div class="w-[450px] mr-40">
        <h2 class="text-4xl font-bold leading-tight mb-12">
          Feel free to <br />contact with us any time
        </h2>
        <ul class="space-y-8">
          <li class="flex items-center gap-8 font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="#F4694C"
                d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
              />
            </svg>
            Kijiji Beach, Dar es salaam
          </li>
          <li class="flex items-center gap-8 font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g fill="#F4694C">
                <path
                  d="M22 12A10 10 0 0 0 12 2v2a8 8 0 0 1 7.391 4.938A8 8 0 0 1 20 12zM2 10V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a8 8 0 0 0 8 8v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5C7.373 22 2 16.627 2 10"
                />
                <path
                  d="M17.543 9.704A6 6 0 0 1 18 12h-1.8A4.2 4.2 0 0 0 12 7.8V6a6 6 0 0 1 5.543 3.704"
                />
              </g>
            </svg>
            +255 0700000000
          </li>
          <li class="flex items-center gap-8 font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="#F4694C"
                d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"
              />
            </svg>
            info@kijijibeach.co.tz
          </li>
        </ul>
      </div>
      <!--  -->
      <div class="w-full">
        <div class="space-y-8">
          <div class="flex gap-8">
            <input
              type="text"
              placeholder="First name"
              class="input input-ghost shadow-md input-lg w-52"
            />
            <input
              type="text"
              placeholder="Last name"
              class="input input-lg input-ghost shadow-md w-52"
            />
          </div>

          <input
            type="email"
            placeholder="Your email address"
            class="input input-lg w-md input-ghost shadow-md"
          />

          <input
            type="text"
            placeholder="Your message subject"
            class="input input-lg input-ghost shadow-md w-md"
          />
          <textarea
            name=""
            id=""
            class="textarea textarea-lg textarea-ghost shadow-md w-md h-50"
            placeholder="Your message description"
          ></textarea
          ><br />
          <button
            class="btn hover:bg-white hover:text-black shadow-sm text-white bg-amber-600 border-amber-600 rounded-2xl"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  </main>
  <FooterUser />
</template>
