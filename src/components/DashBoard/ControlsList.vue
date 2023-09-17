<template>
    <div class="controls-box">
        <ul class="controls-box__list" v-if="props.countDocuments">
            <slot />
        </ul>

        <div class="controls-box__empty" v-else>
            Ничего не найдено
        </div>
        <Transition>
            <loader class="controls-box__loader" v-show="props.isLoader" />
        </Transition>

    </div>
</template>
<script lang="ts" setup>
import Loader from './Loader.vue'
const props = defineProps({
    countDocuments: {
        type: Number,
        required: true
    },
    isLoader: {
        type: Boolean,
        required: true
    }
})
</script>
<style lang="scss" scoped>
.controls-box {
    * {
        box-sizing: border-box;
    }

    position: relative;

    &__loader {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    &__list {
        list-style: none;
        margin: -10px -10px 0 -10px;
        padding: 10px 10px 10px 10px;
        height: 350px;
        overflow-x: hidden;
        scrollbar-width: thin;

        @media(max-width:575px) {
            height: 180px;
        }

        &::-webkit-scrollbar {
            width: 4px;
            height: 6px;
        }

        &::-webkit-scrollbar-track {
            background-color: #e2e2e2;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #6ace65;
            border-radius: 9em;
            box-shadow: inset 1px 1px 10px rgba(10, 141, 32, 0.2);
        }

        &::-webkit-scrollbar-thumb:hover {
            background-color: #499945;
        }
    }

    &__empty {
        color: #6C757D;
        font-size: 14px;
        font-weight: 400;
    }

    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.3s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
}
</style>