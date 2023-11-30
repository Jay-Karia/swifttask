"use client"

import React from 'react'
import { UserButton } from '@clerk/nextjs'

const ProtectedPage = () => {
  return (
    <div>
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default ProtectedPage