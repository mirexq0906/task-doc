<template>
    <div class="top-dashboard">
        <div class="top-dashboard__logo">
            MyApp
        </div>

        <span class="top-dashboard__user">
            Username
        </span>
    </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.top-dashboard {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__logo {
        color: #000;
        font-size: 32px;
        font-weight: 700;

        @media(max-width:575px) {
            font-size: 25px;
        }
    }

    &__user {
        color: #000;
        font-size: 16px;
        @media(max-width:575px) {
            font-size: 14px;
        }
    }
}
</style>