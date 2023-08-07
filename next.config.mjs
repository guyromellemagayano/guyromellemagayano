import { getWpHostname, withFaust } from "@faustwp/core";
import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const faustConfig = {
	reactStrictMode: true,
	pageExtensions: ["js", "jsx", "ts", "tsx"],
	sassOptions: {
		includePaths: ['node_modules'],
	},
	images: {
		domains: [getWpHostname()],
	},
	experimental: {
		scrollRestoration: true
	},
	sentry: {
		hideSourceMaps: true
	},
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
};

const sentryWebpackPluginOptions = {
	silent: true
};

export default withSentryConfig(withFaust(faustConfig), sentryWebpackPluginOptions);
