import {defineConfig} from '@playwright/test';
export default defineConfig({testDir:'tests/kit',workers:1,use:{baseURL:process.env.KIT_BASE_URL||'http://127.0.0.1:4313',viewport:{width:1440,height:1000}},webServer:process.env.KIT_BASE_URL?undefined:{command:'npm run preview:pages',url:'http://127.0.0.1:4313/health',reuseExistingServer:false},reporter:'list'});
