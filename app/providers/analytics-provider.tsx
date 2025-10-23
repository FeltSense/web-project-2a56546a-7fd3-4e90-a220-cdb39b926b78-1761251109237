'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { trackPageView } from '../lib/analytics'

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  useEffect(() => {
    // Track initial page view
    trackPageView()
  }, [])
  
  useEffect(() => {
    // Track page views on route changes
    trackPageView()
  }, [pathname, searchParams])
  
  return <>{children}</>
}

export default function Component() { return <div>Content</div> }