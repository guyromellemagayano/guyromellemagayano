// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever middleware or an Edge route handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs'

const SENTRY_DSN = process.env.SENTRY_DSN

Sentry.init({
  dsn: SENTRY_DSN,

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 0.25,
  environment: process.env.sentryEnvironment,
  enabled: process.env.SENTRY_ENVIRONMENT === 'production',

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false
})