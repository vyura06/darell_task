const bootstrapSassAbstractsImports = require('vue-cli-plugin-bootstrap-vue/sassAbstractsImports.js')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	css: {
		loaderOptions: {
			sass: {
				additionalData: bootstrapSassAbstractsImports.join('\n')
			},
			scss: {
				additionalData: [...bootstrapSassAbstractsImports, ''].join(';\n')
			}
		}
	},
	devServer:{
		proxy: {
			"api/":{
				target: "http://localhost:3000",
				secure: false
			},
			"img/":{
				target: "http://localhost:3000",
				secure: false
			}
		}
	}	
})
	