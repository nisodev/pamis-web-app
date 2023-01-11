<template>
  <div>
    <Breadcrumb />
    <div class="grid grid-cols-12 gap-5 mb-5">
      <div class="2xl:col-span-12 lg:col-span-12 col-span-12">
        <Card bodyClass="p-4">
          <div class="grid md:grid-cols-3 col-span-1 gap-4">
            <div
              class="py-[18px] px-4 rounded-[6px]"
              v-for="(item, i) in statistics"
              :class="item.bg"
              :key="i"
            >
              <div class="flex items-center space-x-6">
                <div class="flex-none">
                  <apexchart
                    type="area"
                    height="48"
                    width="48"
                    :options="item.name.chartOptions"
                    :series="item.name.series"
                  />
                </div>
                <div class="flex-1">
                  <div
                    class="text-slate-800 dark:text-slate-300 text-sm mb-1 font-medium"
                  >
                    {{ item.title }}
                  </div>
                  <div
                    class="text-slate-900 dark:text-white text-lg font-medium"
                  >
                    {{ item.count }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-5">
      <div class="lg:col-span-8 col-span-12">
        <Card>
          <div class="legend-ring">
            <apexchart
              type="bar"
              height="400"
              :options="
                this.$store.state.isDark
                  ? columnCharthomeDark.chartOptions
                  : columnCharthome.chartOptions
              "
              :series="columnCharthome.series"
            />
          </div>
        </Card>
      </div>
      <div class="lg:col-span-4 col-span-12">
        <Card title="overview">
          <template #header>
            <DropEvent />
          </template>
          <apexchart
            type="radialBar"
            :height="window.width > 768 ? 350 : 250"
            :options="
              this.$store.state.isDark
                ? MultipleRadialbarsDark.chartOptions
                : MultipleRadialbars.chartOptions
            "
            :series="MultipleRadialbars.series"
          />
        </Card>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card";
import {
  gearradil,
  gearradilDark,
  MultipleRadialbars,
  MultipleRadialbarsDark,
} from "../../constant/appex-chart";
import {
  columnCharthome,
  columnCharthomeDark,
  shapeLine1,
  shapeLine2,
  shapeLine3,
  mostSales,
} from "./Analytics-Component/data";
import DropEvent from "./Analytics-Component/DropEvent";
import Breadcrumb from "./Analytics-Component/Breadcrumbs";
import window from "@/mixins/window";

export default {
  mixins: [window],
  components: {
    Card,
    DropEvent,
    Breadcrumb,
  },
  data() {
    return {
      columnCharthome,
      columnCharthomeDark,
      MultipleRadialbars,
      MultipleRadialbarsDark,
      gearradil,
      gearradilDark,
      mostSales,
      fillterMap: "usa",
      activity: [
        {
          id: 1,
          img: require("@/assets/images/users/user-1.jpg"),
        },
        {
          id: 2,
          img: require("@/assets/images/users/user-2.jpg"),
        },
        {
          id: 3,
          img: require("@/assets/images/users/user-3.jpg"),
        },
        {
          id: 4,
          img: require("@/assets/images/users/user-4.jpg"),
        },
        {
          id: 5,
          img: require("@/assets/images/users/user-5.jpg"),
        },
        {
          id: 6,
          img: require("@/assets/images/users/user-6.jpg"),
        },
        {
          id: 7,
          img: require("@/assets/images/users/user-1.jpg"),
        },
        {
          id: 6,
          img: require("@/assets/images/users/user-2.jpg"),
        },
        {
          id: 7,
          img: require("@/assets/images/users/user-2.jpg"),
        },
      ],
    };
  },
  computed: {
    statistics() {
      return [
        {
          name: shapeLine1,
          title: "Totel revenue",
          count: this.formatPrice(Math.floor(Math.random() * 10000) + 1000),
          bg: "bg-[#E5F9FF] dark:bg-slate-900	",
        },
        {
          name: shapeLine2,
          title: "Products sold",
          count: Math.floor(Math.random() * 1000) + 100,
          bg: "bg-[#FFEDE5] dark:bg-slate-900	",
        },
        {
          name: shapeLine3,
          title: "Growth",
          count: this.getGrowth(),
          bg: "bg-[#EAE5FF] dark:bg-slate-900	",
        },
      ];
    },
  },
  methods: {
    formatPrice(value, currency = "$ ") {
      let val = (value / 1).toFixed(2).replace(".", ",");
      val = currency + val;
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    getGrowth() {
      let growth = Math.floor(Math.random() * 100) + 10;
      return "+" + growth + "%";
    },
  },
};
</script>
<style lang=""></style>
