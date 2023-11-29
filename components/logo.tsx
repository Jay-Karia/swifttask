import React from 'react'
import Link from 'next/link'
import localFont from "next/font/local"

import { cn } from '@/lib/utils'

const headingFont = localFont({
    src: '../public/fonts/font.woff2',
})

const logo = () => {
  return (
    <Link href={"/"}>
        <div>
            <p className={cn(
                'text-lg text-neutral-700 pb-1',
                headingFont.className
            )}>
                SwiftTask
            </p>
        </div>
    </Link>
  )
}

export default logo