const LUNA07_ANALYTICS = {
  summary: [
    { label: 'TOTAL CLICKS', value: '28' },
    { label: 'UNIQUE VISITORS', value: '14' },
    { label: 'COMPLETED', value: '0' },
    { label: 'CONVERSION RATE', value: '0%' },
  ],
  browsers: [
    { label: 'Chrome', value: 21 },
    { label: 'Safari', value: 7 },
  ],
  devices: [{ label: 'Mobile', value: 28 }],
  countries: [{ label: 'United States', value: 28 }],
  states: [
    { label: 'Texas', value: 23 },
    { label: 'Oklahoma', value: 3 },
    { label: 'Michigan', value: 1 },
    { label: 'New York', value: 1 },
  ],
  cities: [
    { label: 'San Angelo', value: 7 },
    { label: 'Dallas', value: 5 },
    { label: 'Euless', value: 5 },
    { label: 'Midwest City', value: 3 },
    { label: 'League City', value: 2 },
  ],
  recentClicks: [
    {
      time: '5 days ago',
      ip: '2601:2c4:4280:2a00:8451:8ca7:b404:8f1f',
      location: 'League City, Texas',
      browser: 'Safari',
      device: 'Mobile',
    },
    {
      time: '5 days ago',
      ip: '2600:1700:3d80:2a80:6c1f:7f2a:8b3c:1d4e',
      location: 'Dallas, Texas',
      browser: 'Chrome',
      device: 'Mobile',
    },
    {
      time: '6 days ago',
      ip: '2605:a601:aa80:8a00:91f2:3c4d:5e6f:7890',
      location: 'San Angelo, Texas',
      browser: 'Chrome',
      device: 'Mobile',
    },
    {
      time: '6 days ago',
      ip: '2601:601:880:2a00:a1b2:c3d4:e5f6:7890',
      location: 'Euless, Texas',
      browser: 'Safari',
      device: 'Mobile',
    },
    {
      time: '6 days ago',
      ip: '2600:6c00:6a00:2a80:1234:5678:9abc:def0',
      location: 'Midwest City, Oklahoma',
      browser: 'Chrome',
      device: 'Mobile',
    },
    {
      time: '6 days ago',
      ip: '2603:6081:4c00:2a00:fedc:ba98:7654:3210',
      location: 'Dallas, Texas',
      browser: 'Chrome',
      device: 'Mobile',
    },
  ],
}

const DEFAULT_ANALYTICS = {
  summary: [
    { label: 'TOTAL CLICKS', value: '12' },
    { label: 'UNIQUE VISITORS', value: '8' },
    { label: 'COMPLETED', value: '2' },
    { label: 'CONVERSION RATE', value: '17%' },
  ],
  browsers: [
    { label: 'Chrome', value: 8 },
    { label: 'Safari', value: 4 },
  ],
  devices: [
    { label: 'Mobile', value: 9 },
    { label: 'Desktop', value: 3 },
  ],
  countries: [{ label: 'United States', value: 12 }],
  states: [
    { label: 'Texas', value: 6 },
    { label: 'California', value: 4 },
    { label: 'Florida', value: 2 },
  ],
  cities: [
    { label: 'Houston', value: 4 },
    { label: 'Austin', value: 3 },
    { label: 'Miami', value: 2 },
  ],
  recentClicks: [
    {
      time: '2 days ago',
      ip: '192.168.1.42',
      location: 'Houston, Texas',
      browser: 'Chrome',
      device: 'Mobile',
    },
    {
      time: '3 days ago',
      ip: '10.0.0.15',
      location: 'Austin, Texas',
      browser: 'Safari',
      device: 'Desktop',
    },
  ],
}

const ANALYTICS_BY_SLUG = {
  Luna07: LUNA07_ANALYTICS,
}

export function getLinkAnalytics(slug) {
  return ANALYTICS_BY_SLUG[slug] ?? DEFAULT_ANALYTICS
}
