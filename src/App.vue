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
</style>