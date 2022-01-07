<template>
  <button v-bind="$attrs">
    <slot />
  </button>
</template>

<style scoped>
button {
  background: #42b983;
}
</style>
