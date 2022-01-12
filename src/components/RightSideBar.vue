<template>
  <div class="flex flex-col p-6 bg-red-900 rounded-lg gap-y-6">
    <div class="flex justify-between items-center">
      <h2 class="text-xl font-semibold leading-loose text-white">Most Ordered</h2>
      <button class="flex gap-x-2.5 py-3 px-4 rounded-lg border border-gray-200">
          <ChevronDownIcon />
          <span class="text-sm text-white">Today</span>
      </button>
    </div>
    <hr class="border-gray-200" />
        <div class="flex flex-col gap-y-3">
            <div v-for="order in mostOrdered " class="flex gap-x-4 items-center">
                <img class="w-14 h-14" :src="`/img/${order.image}`" alt="" />
                <div class="flex flex-col gap-y-0.5">
                    <div class="text-sm font-medium text-white">{{order.name}}</div>
                    <div class="text-xs text-gray-200">{{order.count}}</div>
                </div>
            </div>

        </div>
        <button class="py-3.5 rounded-lg border border-white text-white text-sm font-semibold">
            View all
        </button>
        <div class="flex justify-between items-center">
            <h2 class="text-xl font-semibold text-white leading-loose">Statistics</h2>
            <button class="flex gap-x-2.5 py-3 px-4 rounded-lg border border-gray-200">
                <ChevronDownIcon />
                <span class="text-sm text-white">Today</span>
            </button>

        </div>
        <hr class="border-gray-200" />
        <div class="flex gap-x-7">
            <img width="140" :src="`/img/chart.svg`" alt="" />
            <div class="flex flex-col gap-y-4">
                <div class="flex flex-col gap-y-4">
                    <div class="flex gap-x-2 items-start">
                        <div class="w-4 h-4 mt-0.5 rounded-full bg-accent-green"></div>
                        <div>
                            <div class="text-sm font-semibold text-white"> Dine in</div>
                            <div class="text-xs text-gray-200"> 300 customers</div>
                        </div>
                    </div>
                     <div class="flex gap-x-2 items-start">
                        <div class="w-4 h-4 mt-0.5 rounded-full bg-accent-orange"></div>
                        <div>
                            <div class="text-sm font-semibold text-white"> To go</div>
                            <div class="text-xs text-gray-200"> 130 customers</div>
                        </div>
                    </div>
                     <div class="flex gap-x-2 items-start">
                        <div class="w-4 h-4 mt-0.5 rounded-full bg-accent-blue"></div>
                        <div>
                            <div class="text-sm font-semibold text-white"> Delivery</div>
                            <div class="text-xs text-gray-200"> 70 customers</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
  </div>
</template>

<script setup>
import ChevronDownIcon from "../icons/chevron-down.svg";

const mostOrdered = [
  {
    name: "Burger King Halloween Whopper ",
    image: "food-1.png",
    count: 150,
  },
  {
    name: "King Whopper Sandwich Hamburger",
    image: "food-2.png",
    count: 170,
  },
  {
    name: "Red Robin Gourmet Burger",
    image: "food-3.png",
    count: 180,
  },
];
</script>
