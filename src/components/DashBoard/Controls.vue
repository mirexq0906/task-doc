<template>
    <div class="controls">
        <div class="controls__block">
            <h3 class="controls__title">Поиск документа</h3>

            <div class="controls__search">
                <input @input="setSearch" type="text" placeholder="Введите ID документа">
            </div>
        </div>
        <div class="controls__block">
            <h3 class="controls__title">Результаты</h3>

            <controls-list class="controls__box" :countDocuments="props.documents.length" :isLoader="props.isLoader">
                <controls-item class="controls__item" v-for="item in props.documents" @activeDocument="setDocument"
                    :key="item.id" :document="item" :isActiveClass="currentId === item.id" />
            </controls-list>
        </div>
    </div>
</template>
<script lang="ts" setup>
import ControlsList from './ControlsList.vue';
import ControlsItem from './ControlsItem.vue';
import { Ref, ref } from 'vue';
import { documentInterface } from '../../interfaces';
const currentId: Ref<number | null> = ref(null)

const props = defineProps({
    documents: {
        type: Array as () => documentInterface[] | [],
        required: true
    },
    isLoader: {
        type: Boolean,
        required: true
    }
})

const emits = defineEmits<{
    (e: 'currentSearch', search:string): void
    (e: 'activeDocument', document:documentInterface): void
}>()

const setSearch = (e:Event): void => {
    emits('currentSearch', (e.target as HTMLInputElement).value)
}

const setDocument = (document: documentInterface): void => {
    currentId.value = document.id
    emits('activeDocument', document)
}
</script>
<style lang="scss" scoped>
.controls {
    * {
        box-sizing: border-box;
    }

    display: flex;
    flex-direction: column;
    padding: 25px 20px;
    background: #FDFDFD;
    border-right: 1px solid #E0E0E0;

    @media(max-width:575px) {
        border-right: none;
        border-bottom: 1px solid #E0E0E0;
        padding: 25px 20px 10px 10px;
    }

    &__block:not(:last-child) {
        margin-bottom: 30px;
    }

    &__block:last-child {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    &__box {
        flex-grow: 1;
    }

    &__title {
        margin: 0 0 15px 0;
        color: #000;
        font-size: 16px;
        font-weight: 600;
        line-height: 140%;
    }

    &__search {
        max-width: 240px;

        input {
            width: 100%;
            height: 49px;
            padding: 0 24px;
            border-radius: 8px;
            border: 1.5px solid #E9ECEF;
            background: #FFF;
            font-family: "Montserrat", sans-serif;
            font-size: 14px;
            font-weight: 400;
            color: #6C757D;
            outline: none;

            @media(max-width:767px) {
                padding: 0 10px;
            }
        }
    }

    &__item:not(:last-child) {
        margin-bottom: 18px;
    }
}
</style>