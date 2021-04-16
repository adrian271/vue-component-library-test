<script>
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { SoberlinkVueLibrarySample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  SoberlinkVueLibrarySample,
  // }
});
</script>

<template>
  <div id="app">
    <soberlink-vue-library-sample />
    <FccButton />
  </div>
</template>
