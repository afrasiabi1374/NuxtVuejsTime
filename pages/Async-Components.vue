<template>
  <div>
      <h1>
        async component and window problem
      </h1>
      <client-only>
        <async-component-width-scroll></async-component-width-scroll>
      </client-only>
      <div style="margin-top: 110vh">footer</div>
  </div>
</template>

<script>
import Error from '../components/common/Error'
import Loading from '../components/common/Loading'
const AsyncComponentWidthScroll = () => ({
  // The component to load (should be a Promise)
  component: import('../components/views/AsyncComponentWidthScroll.vue'),
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
  components: { AsyncComponentWidthScroll },

}
</script>

<style>

</style>