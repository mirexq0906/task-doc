<template>
    <section class="dashboard">
        <div class="container">
            <header-top class="dashboard__top" />

            <div class="dashboard__hero">
                <controls class="dashboard__controls" @currentSearch="setSearch" @activeDocument="setDocument"
                    :documents="props.documents" :isLoader="props.isLoader" />

                <view-document class="dashboard__view" :document="activeDocument" />
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import Controls from './Controls.vue'
import ViewDocument from './ViewDocument.vue'
import HeaderTop from './HeaderTop.vue'
import { Ref, ref } from 'vue';
import { documentInterface } from '../../interfaces';

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
}>()

const activeDocument: Ref<documentInterface | null> = ref(null)

const setDocument = (document: documentInterface): void => {
    activeDocument.value = document
}

const setSearch = (search:string): void => {
    emits('currentSearch', search)
}
</script>
<style lang="scss" scoped>
.dashboard {
    * {
        box-sizing: border-box;
    }

    padding: 40px 0;
    font-family: 'Montserrat',
    sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #6c757d;
    line-height: 1;
    user-select: none;

    .container {
        box-sizing: border-box;
        max-width: calc(1266px + 60px);
        padding: 0 30px;
        margin: 0 auto;

        @media (max-width: 767px) {
            max-width: calc(1266px + 30px);
            padding: 0 15px;
        }
    }

    &__hero {
        display: flex;
        margin-top: 35px;
        height: 575px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
        overflow: hidden;

        @media(max-width:575px) {
            flex-direction: column;
            height: auto;
        }
    }

    &__controls {
        flex: 0 0 280px;

        @media(max-width:767px) {
            flex: 0 0 240px;
        }

        @media(max-width:575px) {
            flex: 0 0 375px;
        }
    }

    &__view {
        flex-grow: 1;
    }
}
</style>