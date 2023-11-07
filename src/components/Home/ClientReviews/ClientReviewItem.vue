<script setup >
defineProps({
    review: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div>
        <p>{{ review.description }}</p>
    </div>
    <p>{{ review.date }}</p>
</template>