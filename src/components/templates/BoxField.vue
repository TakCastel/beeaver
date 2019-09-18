<template>
  <div class="box">
    <slot />
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 66px)
}

</style>