<script setup>
import { ref } from 'vue'
import ColorCard from '../components/ColorCard.vue'

const inputValue = ref('')

const colors = ref([
  {
    id: 1,
    hex: '1B3E36',
  },
  {
    id: 2,
    hex: 'A0561F',
  },
  {
    id: 3,
    hex: 'D5BCAE',
  },
  {
    id: 4,
    hex: 'EBE4DD',
  },
  {
    id: 5,
    hex: 'EAE8E4',
  },
  {
    id: 6,
    hex: 'F7F7F5',
  },
])

function onCreateColor() {
  colors.value.push({ id: 0, hex: inputValue.value })
  inputValue.value = ''
}

function onUpdateColor(color) {
  const index = colors.value.findIndex(c => c.id === color.id)
  if (index > -1) {
    colors.value[index] = color
  }
}

function onDelete(color) {
  const index = colors.value.findIndex(c => c.id === color.id)
  if (index > -1) {
    colors.value.splice(index, 1)
  }
}
</script>

<template>
  <div class="container">
    <div class="title">
      COLOR IO
    </div>
    <div class="sub-title">
      CARD
    </div>
    <hr>
    <ul id="color-list" class="row row-cols-3">
      <li v-for="(color, index) in colors" :key="index" class="col">
        <ColorCard :color="color" @update="onUpdateColor" @delete="onDelete" />
      </li>
    </ul>
    <hr>

    <div class="sub-title">
      Input Color Hex To Add New Color :
    </div>
    <div class="wrapper">
      <span>#</span>
      <input id="color-hex-input" v-model="inputValue" type="text" aria-label="ColorHexInput" maxlength="6">
      <button type="button" @click="onCreateColor">
        Create
      </button>
    </div>
    <div class="footer-title">
      Powered by ColorIO
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  background-color: #f5f4f2;
}

ul {
  padding: 50px 0;
  margin: 0;
}

li {
  padding: 0;
  list-style: none;
  box-shadow: 2px 2px 4px 2px #ccc;
}

hr {
  color: #d9d8d4;
}

button {
  border-radius: 5px;
  height: 26px;
  border: 1px solid #ccc;
  cursor: pointer;
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 15px;
}

.title {
  margin-top: 60px;
}

.sub-title {
  padding: 20px 0;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: start;
  align-items: center;
  padding: 10px 0;
}

.row-cols-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: space-around;
  column-gap: 50px;
  row-gap: 50px;
}

@media (max-width: 767.98px) {
  .row-cols-3 {
    grid-template-columns: repeat(2, auto);
  }
}

.row {
  padding: 0;
  margin: 50px 0;
}

.colorHex {
  background-color: white;
  width: 100%;
  padding: 20px 0;
  font-size: 12pt;
  text-align: center;
  color: #36352f;
  outline-style: none;
  border: 0px;
}

#color-hex-input {
  border-radius: 5px;
  height: 24px;
  outline-style: none;
  border: 0px;
  border: 1px solid #ccc;
  width: 100px;
  font-size: 14pt;
  margin: 0 10px;
}

.footer-title {
  margin: 100px 0 80px 0;
  text-align: center;
}
</style>
