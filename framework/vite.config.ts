import path from 'path';
import vue from '@vitejs/plugin-vue'
import vike from 'vike/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
    plugins: [
	vue(),
	vike({
	    crawl: {
		git: true,
	    },
	}),
    ],
    resolve: {
	alias: {
	    '#fw': path.join(__dirname, '../framework'),
	},
    },
}

export default config
