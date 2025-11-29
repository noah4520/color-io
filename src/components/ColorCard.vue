<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  color: {
    type: Object,
    required: true,
  },
})
const emit = defineEmits(['update', 'delete'])

const colorInput = ref(props.color)

function onDelete() {
  emit('delete', props.color)
}

watch(colorInput, (newValue) => {
  if (newValue.length === 6) {
    emit('update', newValue)
  }
})
</script>

<template>
  <div>
    <div class="color-card" :style="{ 'background-color': `#${color.hex}` }">
      <div class="del-btn" @click="onDelete()">
        x
      </div>
    </div>
    <input v-model="colorInput.hex" type="text" class="colorHex" maxlength="6" @change="emit('update', colorInput)">
  </div>
</template>

<style>
.color-card {
  min-height: 300px;
  position: relative;
}

@media (max-width: 499.98px) {
  .color {
    min-height: 200px;
  }
}

.color:active {

  pointer-events: none;
}

.del-btn {
  color: #b7b4ad;
}

@media (min-width: 1200px) {
  .del-btn {
    display: none;
  }

  .color-card:hover>.del-btn{
    display: block;
    font-size: 20pt;
    position: absolute;
    top: 0;
    right: 10px;
    cursor: pointer;
    pointer-events: auto;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);
  }
}

@media (max-width: 1200px) {
  .color-card>.del-btn {
    font-size: 20pt;
    position: absolute;
    top: 0;
    right: 10px;
    cursor: pointer;
    pointer-events: auto;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);
  }
}
</style>
