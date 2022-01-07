<template>
  <button
    :disabled="disabled"
    :class="classes"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  props: {
    isLoading: { type: Boolean },
    disabled: { type: Boolean },
    primary: { type: Boolean },
    secondary: { type: Boolean },
    block: { type: Boolean },
    danger: { type: Boolean },
    success: { type: Boolean },
    dark: { type: Boolean },
    light: { type: Boolean },
    circle: { type: Boolean },
    transparent: { type: Boolean },
  },
  setup(props) {
    const classes = computed(() => ({
      btn: true,
      primary: props.primary,
      secondary: props.secondary,
      block: props.block,
      danger: props.danger,
      success: props.success,
      dark: props.dark,
      light: props.light,
      circle: props.circle,
      transparent: props.transparent,
    }));

    return {
      classes,
    };
  },
});
</script>

<style scoped lang="scss">
button {
  display: block;
  width: fit-content;
  height: fit-content;

  background-color: transparent;
  color: #FFFFFF;

  font-size: 18px;

  text-decoration: none;

  padding: 1rem 1.5rem;
  margin: 0px;
  border: 0px;

  cursor: pointer;

  &.block {
    width: 100%;
    text-align: center;
  }
  &.primary {
    background-color: #4B067B;
    color: #FFFFFF;
  }
  &.secondary {
    background-color: #4AB4E6;
    color: #FFFFFF;
  }
  &.danger {
    background-color: #FF0000;
    color: #FFFFFF;
  }
  &.success {
    background-color: #00FF00;
    color: #FFFFFF;
  }
  &.dark {
    background-color: #000000;
    color: #FFFFFF;
  }
  &.light {
    background-color: #FFFFFF;
    color: #4B067B;
  }

  &.circle {
    border-radius: 20px;
  }

  &:hover:not(.transparent) {
    filter: brightness(0.9);
  }

  &:disabled{
    cursor: not-allowed;
    filter: brightness(0.9);
  }
}
</style>
