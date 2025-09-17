<script setup></script>

<template>
  <header class="fixed z-99 w-full">
    <nav class="px-16 py-6 flex items-center justify-between bg-orange-500 text-white">
      <router-link to="/">
        <h1 class="text-4xl">Hotel</h1>
      </router-link>
      <div>
        <ul class="flex gap-20 items-center">
          <router-link to="/">
            <li>Home</li>
          </router-link>
          <router-link to="/rooms">
            <li>Rooms</li>
          </router-link>
          <router-link to="/facilities">
            <li>Facilities</li>
          </router-link>
          <router-link to="/contact">
            <li>Contact Us</li>
          </router-link>
          <router-link to="/rooms">
            <li class="btn btn-outline rounded-xl">Booking Now</li>
          </router-link>
        </ul>
      </div>
    </nav>
  </header>
</template>
