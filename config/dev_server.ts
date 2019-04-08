import * as path from 'path';
import webpack from 'webpack';
import express from 'express';

import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import { webpackDevMiddlewareExtendedOptions } from './types/webpack_extensions';
import config from './webpack.config.debug';
import { spawn } from 'child_process';

const DIST_PATH = path.resolve(__dirname, '..');
const PORT = parseInt(process.env.PORT, 10) || 8080;
let HOST = 'localhost';

// if (process.argv.length > 0) {
//   process.argv.forEach(arg => {
//     const splitedArg = arg.split('=');
//     switch (splitedArg[0]) {
//       default:
//         break;
//       case '--host': {
//         if ('local-net') {
//           HOST = ip.address();
//         } else {
//           HOST = splitedArg[1];
//         }
//       }
//     }
//   });
// }


const compiler = webpack(config({ PORT, HOST, PROD: false }));

const devMiddlewareConfig: webpackDevMiddlewareExtendedOptions = {
  quiet: false,
  reload: true,
  overlay: true,
  noInfo: true,
  publicPath: null,
}

const devMiddleware = webpackDevMiddleware(compiler, devMiddlewareConfig);
const hotMiddleware = webpackHotMiddleware(compiler);

const app = express();

app.use(devMiddleware);
app.use(hotMiddleware);

app.use(express.static(DIST_PATH));

console.log("Running in Path: " + DIST_PATH)

const server = app.listen(PORT, HOST, (error: Error) => {

  if (error) {
    return console.error(error);
  }

  const open = require('open');

  open(`http://${HOST}:${PORT}`, { app: 'chrome' }).then((c: { pid: string; }) => {
    console.log('Chrome PID ' + c.pid);
  }).catch((e: Error) => {
    console.error('Could not open Chrome Browser.', e);
  })

  console.log(`\n\nDev server listening on port ${PORT} at ${HOST}: \n\n`);

  spawn('npm', ['run', 'watch'], {
    shell: true,
    env: process.env,
    stdio: 'inherit'
  })
    .on('close', code => process.exit(code))
    .on('error', spawnError => console.error(spawnError));
  

})

process.on('SIGTERM', () => {
  console.log('Stopping dev server');
  devMiddleware.close();
  server.close(() => {
    process.exit(0);
  });
});
