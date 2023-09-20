module.exports = {
	"moduleFileExtensions": ["js", "json", "vue", "ts"],
	"transform": {
		"^.+\\.js$": "babel-jest",
		"^.+\\.vue$": "@vue/vue3-jest",

	},
	"testEnvironment": "jsdom",
	"testEnvironmentOptions": {
		customExportConditions: ["node", "node-addons"],
	},
	preset: 'ts-jest'
}
