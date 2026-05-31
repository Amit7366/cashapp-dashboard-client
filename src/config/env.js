export const env = {
  appName: import.meta.env.VITE_APP_NAME ?? 'CashApp',
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? '/api',
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
}
