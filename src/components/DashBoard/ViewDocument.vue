<template>
    <div :class="{ disabled: !props.document }" class="view">
        <div class="view__row" v-if="props.document">
            <div class="view__img">
                <img :src="props.document.image ? props.document.image : './assets/stub-image.png'" alt="#">
            </div>
            <div class="view__content">
                <h3 class="view__title">{{ props.document.name }}</h3>
                <div class="view__controls">
                    <export-document class="view__download" :document="document">
                        Скачать
                    </export-document>
                    <button class="view__delete" :disabled="!props.document.image">
                        Удалить
                    </button>
                </div>
                <div class="view__content">
                    <h3 class="view__title">Описание:</h3>
                    <p class="view__desc">
                        {{ props.document.description }}
                    </p>
                </div>
            </div>
        </div>
        <div class="view__empty" v-else>
            Выберите документ, чтобы посмотреть его содержиое
        </div>
    </div>
</template>
<script lang="ts" setup>
import { documentInterface } from '../../interfaces';
import ExportDocument from './ExportDocument.vue'
const props = defineProps({
    document: {
        type: Object as () => documentInterface | null,
        required: true
    }
})
</script>
<style lang="scss" scoped>
.view {
    * {
        box-sizing: border-box;
    }

    &.disabled {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    padding: 30px;

    @media(max-width:575px) {
        padding: 10px;
        min-height: 100px;
    }

    &__row {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 20px;
        height: calc(575px - 60px);
        margin-right: -10px;
        padding-right: 10px;
        overflow-x: hidden;
        scrollbar-width: thin;

        @media(max-width:991px) {
            flex-direction: column;
            align-items: center;
        }

        @media(max-width:575px) {
            margin-right: 0;
            padding-right: 0;
            overflow-x: visible;
            height: auto;
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

    &__img {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 0 1 424px;

        @media(max-width:575px) {
            flex: 0 1 auto;
        }

        img {
            display: block;
            max-width: 100%;
        }
    }

    &__content {
        flex: 0 1 439px;

        @media(max-width:575px) {
            flex: 0 1 auto;
        }
    }

    &__title {
        margin: 0 0 15px 0;
        color: #000;
        font-size: 16px;
        font-weight: 600;
        line-height: 140%;
    }

    &__controls {
        display: flex;
        gap: 17px;
        flex-wrap: wrap;
        margin-bottom: 47px;

        @media(max-width:991px) {
            margin-bottom: 25px;
        }
    }

    &__download,
    &__delete {
        font-family: "Montserrat", sans-serif;
        width: 114px;
        height: 31px;
        background: #fff;
        color: #0D6EFD;
        font-size: 14px;
        font-weight: 400;
        border-radius: 8px;
        border: 1px solid #0D6EFD;
        cursor: pointer;

        &[disabled] {
            cursor: auto;
        }
    }

    &__delete {
        border: 1px solid #DC3545;
        color: #DC3545;
    }

    &__desc {
        margin: 0;
        color: #6C757D;
        font-size: 14px;
        font-weight: 400;
    }

    &__empty {
        color: #6C757D;
        font-size: 14px;
        text-align: center;
    }
}
</style>