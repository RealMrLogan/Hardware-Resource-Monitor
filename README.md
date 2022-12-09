# Hardware Resource Monitor
React, Electron, Remote Sensor Monitor (RSM), HWiNFO64

Opens an electron app that displays various sensor metrics

[HWiNFO64](https://www.hwinfo.com/)

**NOTE: RSM will not work with the portable version onHWiNFO64**

**NOTE: HWiNFO64 must be running before RSM can run, otherwise you will get null data.**

## Install
```bash
npm i
```

## Development
```bash
npm run dev
```

For those who aren't familiar, all React (frontend) code is managed in `src/`. All Electron (main) code runs in `public/main.js`.
