'use client'

const ANALYTICS_ENDPOINT = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT || ''
const WEBSITE_ID = process.env.NEXT_PUBLIC_WEBSITE_ID || 'unknown'

/**
 * Track custom events
 * @param {string} event - Event name (e.g., 'button_clicked', 'form_submitted')
 * @param {object} properties - Additional event properties
 */
export const trackEvent = async (event: string, properties: Record<string, any> = {}) => {
  if (!ANALYTICS_ENDPOINT) {
    console.debug('Analytics endpoint not configured')
    return
  }

  try {
    await fetch(ANALYTICS_ENDPOINT, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event,
        properties: {
          ...properties,
          $current_url: typeof window !== 'undefined' ? window.location.href : '',
          $pathname: typeof window !== 'undefined' ? window.location.pathname : '',
          $referrer: typeof document !== 'undefined' ? document.referrer : '',
          $screen_width: typeof window !== 'undefined' ? window.screen.width : undefined,
          $screen_height: typeof window !== 'undefined' ? window.screen.height : undefined,
        },
        website_id: WEBSITE_ID,
        distinct_id: getDistinctId()
      })
    })
  } catch (error) {
    // Fail silently - analytics should never break user experience
    console.debug('Analytics error:', error)
  }
}

/**
 * Track page views automatically
 */
export const trackPageView = () => {
  trackEvent('$pageview', {
    title: typeof document !== 'undefined' ? document.title : '',
  })
}

/**
 * Get or create a unique user identifier
 */
function getDistinctId(): string {
  if (typeof window === 'undefined') return 'server'
  
  const storageKey = 'ph_distinct_id'
  let distinctId = localStorage.getItem(storageKey)
  
  if (!distinctId) {
    distinctId = `user_${Date.now()}_${Math.random().toString(36).substring(7)}`
    localStorage.setItem(storageKey, distinctId)
  }
  
  return distinctId
}

/**
 * Identify a user (call this when user logs in or signs up)
 * @param {string} userId - Unique user ID
 * @param {object} traits - User properties (email, name, etc.)
 */
export const identifyUser = async (userId: string, traits: Record<string, any> = {}) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('ph_distinct_id', userId)
  }
  
  await trackEvent('$identify', {
    distinct_id: userId,
    $set: traits
  })
}

/**
 * Track form submissions
 * @param {string} formName - Name of the form
 * @param {object} formData - Form data (don't send sensitive info!)
 */
export const trackFormSubmit = async (formName: string, formData: Record<string, any> = {}) => {
  await trackEvent('form_submitted', {
    form_name: formName,
    ...formData
  })
}

/**
 * Track button clicks
 * @param {string} buttonName - Name/label of the button
 * @param {object} properties - Additional properties
 */
export const trackButtonClick = async (buttonName: string, properties: Record<string, any> = {}) => {
  await trackEvent('button_clicked', {
    button_name: buttonName,
    ...properties
  })
}