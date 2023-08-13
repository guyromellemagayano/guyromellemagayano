// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs'

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

Sentry.init({
    dsn:
        SENTRY_DSN ||
        'https://4998ee3c257c46df929ea4118a98b77b@o4504692950630400.ingest.sentry.io/4504692968718336',
    // Replay may only be enabled for the client-side
    integrations: [new Sentry.Replay()],

    // Capture Replay for 10% of all sessions,
    // plus for 100% of sessions with an error
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,

    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: 0.25,
    environment: process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT,
    enabled: process.env.NODE_ENV === 'production',

    // ...
    // Note: if you want to override the automatic release value, do not set a
    // `release` value here - use the environment variable `SENTRY_RELEASE`, so
    // that it will also get attached to your source maps
})
