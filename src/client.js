// Import sanity client
import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "1x1zge2p",
    dataset: "production",
    apiVersion: '2021-08-31',
    useCdn: true
})