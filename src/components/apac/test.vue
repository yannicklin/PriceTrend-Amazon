<template>
  <div class="error-page window-height window-width bg-light column items-center">
    <div class="error-code bg-primary flex items-center justify-center">
      404
    </div>
    <div>
      <div class="error-card card bg-white column items-center justify-center">
        <i class="text-grey-5">error_outline</i>
        <p class="caption text-center">Oops. Nothing here...</p>
        <p class="text-center group">
          <button v-if="canGoBack" class="grey push small" @click="goBack">
            <i class="on-left">keyboard_arrow_left</i>
            Go back
          </button>
          <router-link to="/">
            <button class="grey push small">
              Go home
              <i class="on-right">home</i>
            </button>
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        canGoBack: window.history.length > 1
      }
    },
    methods: {
      goBack () {
        window.history.go(-1)
      }
    }
  }

  const {OperationHelper} = require('apac')

  const awsID = process.env.AWS_ID
  const awsSECRET = process.env.AWS_SECRET
  const awsSOCID = process.env.AWS_ASSOC_ID

  const opHelper = new OperationHelper({
    awsId: awsID,
    awsSecret: awsSECRET,
    assocId: awsSOCID,
    maxRequestsPerSecond: 1,
    locale: 'US'
  })

  opHelper.execute('ItemSearch', {
    'SearchIndex': 'Books',
    'Keywords': 'harry potter',
    'ResponseGroup': 'ItemAttributes,Offers'
  }).then((response) => {
    console.log('Results object: ', response.result)
    console.log('Raw response body: ', response.responseBody)
  }).catch((err) => {
    console.error('Something went wrong! ', err)
  })
</script>
