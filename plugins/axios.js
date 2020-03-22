'use strict'
export default ({ $axios, redirect }) => {
  $axios.onRequest((config) => {
    if (process.env.NODE_ENV !== 'production')
      console.log(`Making ${config.method.toUpperCase()} request to ${config.url}`)
  })

  $axios.onError((error) => {
    console.error(`${error}`)
    const code = parseInt(error.response && error.response.status)
    if (code === 400) redirect('/400')
  })
}
