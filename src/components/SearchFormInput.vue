<script setup>
defineProps({
  label: String,
  modelValue: String
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex flex-1 flex-col gap-1">
    <label :for="label" class="capitalize text-gray-600">{{ label }}</label>
    <input
      type="text"
      :id="label"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="flex-1 rounded px-4 py-2"
    />
  </div>
</template>
