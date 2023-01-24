import * as core from 'express-serve-static-core';

export function initSentry(app: core.Express, env: any) {
    /** DEFINE SENTRY LOGGING */
    const Sentry = require('@sentry/node');
    const SentryTracing = require('@sentry/tracing');
    Sentry.init({
        dsn: env.SENTRY_DSN,
        tracesSampleRate: 1.0,
        integrations: [
            new Sentry.Integrations.Http({ tracing: true }),
            new SentryTracing.Integrations.Express({
                app,
            }),
        ],
    });

    app.use(Sentry.Handlers.errorHandler());
    app.use(Sentry.Handlers.requestHandler());
    app.use(Sentry.Handlers.tracingHandler());
}
