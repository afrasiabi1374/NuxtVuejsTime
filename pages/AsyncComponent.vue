<template>
  <div>
    <h1>SERVER not client</h1>
    <client-only>
      <h1>async component and window problem</h1>

      <AsyncComponentCMP></AsyncComponentCMP>

      <div style="margin-top: 110vh">footer</div>
    </client-only>
  </div>
</template>

<script>
import Error from '~/components/common/Error.vue'
import Loading from '~/components/common/Loading.vue'

const AsyncComponentCMP = () => ({
// The component to load (should be a Promise)
component: import('~/components/AsyncComponentCMP'),
// A component to use while the async component is loading
loading: Loading,
// A component to use if the load fails
error: Error,
// Delay before showing the loading component. Default: 200ms.
delay: 200,
// The error component will be displayed if a timeout is
// provided and exceeded. Default: Infinity.
timeout: 3000
})
export default {
  name: 'ASYNCCOMPONENT',
  components: { AsyncComponentCMP }

}
</script>

<style>

</style>