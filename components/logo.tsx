import React from 'react'
import Link from 'next/link'
import localFont from "next/font/local"
import Image from "next/image"

import { cn } from '@/lib/utils'

const headingFont = localFont({
    src: '../public/fonts/font.woff2',
})

const logo = () => (
  <Link href={"/"}>
    <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
      <Image
        src="/logo.jpg"
        alt="Logo"
        height={30}
        width={30} />
      <p className={cn(
        'text-lg text-neutral-700 pb-1',
        headingFont.className
      )}>
        SwiftTask
      </p>
    </div>
  </Link>
)

export default logo