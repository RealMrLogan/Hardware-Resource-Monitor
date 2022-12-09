# Hardware Resource Monitor
React, Electron, Remote Sensor Monitor (RSM), HWiNFO64

Opens an electron app that displays various sensor metrics

[HWiNFO64](https://www.hwinfo.com/)

**NOTE: RSM will not work with the portable version onHWiNFO64**

**NOTE: HWiNFO64 must be running before RSM can run, otherwise you will get null data.**

## How it works
HWiNFO64 collects a lot of juicy data from the sensors running on the machine. RSM magically takes that data and exposes it via a server. The renderer process (React) makes a request to the main process (Electron) at a given interval. Then the main process requests data from RSM and sends that sweet, sweet info back to the frontend.

## Install
```bash
npm i
```

## Development
```bash
npm run dev
```
1) Start HWiNFO64. I know, it'd be nice to do this all with one command.
2) run dev script

For those who aren't familiar, all React (renderer) code is managed in `src/`. All Electron (main) code runs in `public/main.js`.
