<template>
    <li :class="{ active: props.isActiveClass }" class="item-controls" @click="setDocument(props.document)">
        <div class="item-controls__img">
            <img :src="props.document.image ? props.document.image : './assets/stub-image.png'" alt="#">
        </div>

        <div class="item-controls__content">
            <h3 class="item-controls__title">
                {{ props.document.name }}
            </h3>

            <span class="item-controls__size">
                12 MB
            </span>
        </div>
    </li>
</template>
<script lang="ts" setup>
import { documentInterface } from '../../interfaces';

const props = defineProps({
    document: {
        type: Object as () => documentInterface,
        required: true
    },
    isActiveClass: {
        type: Boolean,
        required: true
    }
})

const emits = defineEmits<{
    (e: 'activeDocument', document:documentInterface): void
}>()

const setDocument = (document: documentInterface): void => {
    emits('activeDocument', document)
}
</script>

<style lang="scss" scoped>
.item-controls {
    * {
        box-sizing: border-box;
    }

    display: flex;
    align-items: center;
    background: #FFF;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
    cursor: pointer;
    transition: background 200ms;

    &__img {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70px;
        height: 70px;
        border-right: 1px solid #E0E0E0;
        transition: border-right 200ms;

        img {
            display: block;
            max-width: 100%;
            object-fit: cover;
            height: 100%;
        }
    }

    &__content {
        padding: 5px 15px;
    }

    &__title {
        margin: 0 0 6px 0;
        color: #212529;
        font-size: 14px;
        font-weight: 600;
        transition: color 200ms;
    }

    &-size {
        color: #6C757D;
        font-size: 14px;
        font-weight: 400;
        transition: color 200ms;
    }
}

.item-controls.active {
    background: #0D6EFD;

    .item-controls__img {
        border-right: 1px solid #0D6EFD;
    }

    .item-controls__title {
        color: #fff;
    }

    .item-controls__size {
        color: #fff;
    }
}
</style>