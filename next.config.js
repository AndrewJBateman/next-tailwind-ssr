const path = require("path");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
	reactStrictMode: true,
	images: {
		domains: ["source.unsplash.com", "jsonplaceholder.typicode.com"],
	},
	basePath: process.env.NEXT_PUBLIC_BASE_PATH,
	assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,

	pwa: {
		dest: "public",
		runtimeCaching,
	},

	webpack: (config) => {
		config.resolve.modules.push(path.resolve("./"));
		return config;
	},
});
