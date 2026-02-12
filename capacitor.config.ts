import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'scan-qrcode-web-app',
  webDir: 'dist',
  server: {
    url: 'https://scan-event-reg.vercel.app/',
    cleartext: true,
  },
};

export default config;
