import React from 'react'
import { OrganizationSwitcher, auth } from '@clerk/nextjs'

const OrganizationPage = () => {
    const { userId, orgId} = auth()
  return (
    <div>
        <OrganizationSwitcher 
            hidePersonal
        />
    </div>
  )
}

export default OrganizationPage