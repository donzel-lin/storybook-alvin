<template>
  <a
      :href="disabled ? null :href"
      :class="[
          disabled && 'disabled',
          !disabled && 'is-normal'
      ]"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: 'AlLink',
  props: {
    href: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.is-normal{
  text-decoration: none;
}
.disabled {
  cursor: not-allowed;
}
</style>
