<template>
    <button @click="exportDocument">
        <slot />
    </button>
</template>
<script lang="ts" setup>
import { documentInterface } from '../../interfaces';

const props = defineProps({
    document: {
        type: Object as () => documentInterface | null,
        required: true
    }
})
const exportDocument = (): void => {
    const exportedData: string = JSON.stringify(props.document);

    const url: string = URL.createObjectURL(
        new Blob([exportedData], { type: 'text/plain' })
    );

    const link: HTMLAnchorElement = document.createElement('a');
    link.href = url;
    link.download = `${props.document?.name}.txt`;
    link.click();

    URL.revokeObjectURL(url);
}
</script>