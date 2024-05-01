import React from 'react'
import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

export const BeforeDashboard: React.FC = async () => {
  const payload = await getPayloadHMR({ config })

  const pages = await payload.find({
    collection: 'pages',
  })

  return (
    <React.Fragment>
      <h1>Before Dashboard</h1>
      <p>Here is the list of pages from payload.</p>
    </React.Fragment>
  )
}
