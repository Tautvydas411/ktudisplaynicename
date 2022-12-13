import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { requestAPI } from './handler';

/**
 * Initialization data for the ktudisplaynicename extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'ktudisplaynicename:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension ktudisplaynicename is activated!');

    requestAPI<any>('get_example')
      .then(data => {
        console.log(data);
      })
      .catch(reason => {
        console.error(
          `The ktudisplaynicename server extension appears to be missing.\n${reason}`
        );
      });
  }
};

export default plugin;
