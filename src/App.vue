<template>
    <dash-board @currentSearch="setSearch" :isLoader="dashboardStore.isLoader" :documents="dashboardStore.documentsList" />
</template>

<script setup lang="ts">
import DashBoard from './components/DashBoard/App.vue'
import { useDashboardStore } from './store/DashboardStore';
const dashboardStore = useDashboardStore()
const setSearch = (search:string): void => {
    dashboardStore.getDocuments(search)
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
    background: #FBFBFB;
}
</style>