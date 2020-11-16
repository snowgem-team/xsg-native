import { Injectable } from '@angular/core';

import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name Sum Sub
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { SumSub } from '@ionic-native/sum-sub';
 *
 *
 * constructor(private sumSub: SumSub) { }
 *
 * ...
 *
 *
 * this.sumSub.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'SNSMobileSdkCordovaPlugin',
  plugin: 'SNSMobileSdkCordovaPlugin', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.sumSub', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/expcapitaldev/sumsub-cordova-idensic-mobile-sdk-plugin', // the github repository URL for the plugin
  install: 'ionic cordova plugin add @sumsub/cordova-idensic-mobile-sdk-plugin', // OPTIONAL install command, in case the plugin requires variables
  platforms: ['Android', 'iOS'], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class SumSub extends IonicNativePlugin {
  @Cordova()
  launchSNSMobileSDK(params: {
    apiUrl: string;
    flowName: string;
    accessToken: string;
    locale: string;
    supportEmail: string;
  }): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setNewAccessToken(accessToken: string): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  dismiss(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
}
