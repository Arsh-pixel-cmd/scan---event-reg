import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'scan-qrcode-web-app',
  webDir: 'dist',
  server: {
    url: 'http://localhost:5173/',
    cleartext: true,
  },
};

export default config;
