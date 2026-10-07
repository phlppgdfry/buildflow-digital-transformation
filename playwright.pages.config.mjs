import { defineConfig } from '@playwright/test';
export default defineConfig({testDir:'tests/pages',workers:1,use:{baseURL:'http://127.0.0.1:4313',viewport:{width:1440,height:1000}},webServer:{command:'npm run preview:pages',url:'http://127.0.0.1:4313/health',reuseExistingServer:false},reporter:'list'});
