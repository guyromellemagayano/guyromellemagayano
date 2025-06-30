/* eslint-disable no-duplicate-imports */
/**
 * Universal Logger Package
 * Comprehensive, robust, scalable, and flexible logging system
 *
 * @example Basic Usage
 * ```typescript
 * import { logger } from '@guyromellemagayano/logger';
 *
 * logger.info('Hello world');
 * logger.error('Something went wrong', new Error('Details'));
 * ```
 *
 * @example Advanced Usage
 * ```typescript
 * import { createLogger, LogLevel, formatters, transports } from '@guyromellemagayano/logger';
 *
 * const appLogger = createLogger({
 *   level: LogLevel.DEBUG,
 *   transports: [
 *     transports.console,
 *     new HttpTransport({ url: 'https://logs.example.com' })
 *   ],
 *   formatter: formatters.json
 * });
 *
 * const childLogger = appLogger.child({ component: 'user-service' });
 * childLogger.info('User logged in', { userId: 123 });
 * ```
 *
 * @example Integration Usage
 * ```typescript
 * import { createLogger, integrations } from '@guyromellemagayano/logger';
 *
 * const logger = createLogger({
 *   transports: [
 *     integrations.sentry({ dsn: 'your-sentry-dsn' }),
 *     integrations.datadog({ apiKey: 'your-datadog-key' }),
 *     integrations.newrelic({ licenseKey: 'your-newrelic-key' }),
 *   ]
 * });
 *
 * logger.error('Something went wrong', new Error('Details'));
 * ```
 */

// Import logger instance for legacy functions
import { logger as loggerInstance } from "./logger";

// Export adapters for popular libraries
export {
  BuildAdapter,
  ConsoleAdapter,
  createAdapters,
  MorganAdapter,
  NextJsAdapter,
  patchGlobalConsole,
  ReactErrorAdapter,
  WinstonAdapter,
} from "./adapters";

// Export formatters
export {
  ConsoleFormatter,
  createFormatter,
  DevFormatter,
  formatters,
  JsonFormatter,
  ProductionFormatter,
  SimpleFormatter,
} from "./formatters";

// Export integrations for external logging services
export {
  AzureMonitorIntegration,
  CloudWatchIntegration,
  createIntegration,
  DatadogIntegration,
  ElasticsearchIntegration,
  GoogleCloudIntegration,
  type IntegrationConfig,
  integrations,
  LogRocketIntegration,
  NewRelicIntegration,
  PapertrailIntegration,
  SentryIntegration,
  SplunkIntegration,
} from "./integrations";

// Export core logger functionality
export { createLogger, Logger, logger } from "./logger";

// Export transports
export {
  ConsoleTransport,
  createTransport,
  FileTransport,
  HttpTransport,
  MemoryTransport,
  MultiTransport,
  NullTransport,
  StreamTransport,
  transports,
} from "./transports";

// Export types and enums
export {
  type Environment,
  type Formatter,
  type ILogger,
  type LogContext,
  type LogEntry,
  type LoggerConfig,
  type LoggerPlugin,
  LogLevel,
  type LogLevelString,
  type MetricEntry,
  type MetricType,
  type PerformanceEntry,
  type TimerMap,
  type Transport,
} from "./types";

// Export utilities
export {
  AsyncQueue,
  createTimer,
  detectEnvironment,
  formatBytes,
  formatDuration,
  generateId,
  generateRequestId,
  generateSessionId,
  getLogLevelName,
  getMemoryUsage,
  getRuntime,
  getStackTrace,
  mergeContexts,
  parseLogLevel,
  RateLimiter,
  sanitizeData,
  shouldLog,
  utils,
} from "./utils";

// Legacy exports for backward compatibility
export const log = (...args: unknown[]): void => {
  loggerInstance.info(
    typeof args[0] === "string" ? args[0] : String(args[0]),
    args.slice(1)
  );
};

export const logDebug = (...args: unknown[]): void => {
  loggerInstance.debug(
    typeof args[0] === "string" ? args[0] : String(args[0]),
    args.slice(1)
  );
};

export const logError = (...args: unknown[]): void => {
  loggerInstance.error(
    typeof args[0] === "string" ? args[0] : String(args[0]),
    args.slice(1)
  );
};

export const logInfo = (...args: unknown[]): void => {
  loggerInstance.info(
    typeof args[0] === "string" ? args[0] : String(args[0]),
    args.slice(1)
  );
};

export const logTrace = (...args: unknown[]): void => {
  loggerInstance.silly(
    typeof args[0] === "string" ? args[0] : String(args[0]),
    args.slice(1)
  );
};

export const logWarn = (...args: unknown[]): void => {
  loggerInstance.warn(
    typeof args[0] === "string" ? args[0] : String(args[0]),
    args.slice(1)
  );
};

// Default export for convenience
export default loggerInstance;
