<template>
  <button class="primary">
    <i>image</i>
    <q-tooltip>
      <img :src="url" alt="" >
    </q-tooltip>
  </button>
</template>
<script>
  import { QTooltip } from 'quasar'
export default {
  props: ['url'],
  components: {
    QTooltip
  }
}
</script>
<style scoped>
  img {
    max-height: 300px;
  }
</style>
