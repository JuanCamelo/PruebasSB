import { Injectable } from '@angular/core';
import { Config } from '../models/config';


@Injectable({
  providedIn: 'root'
})
export class ConfigServiceService {

  // get config(): Config {
  //   const data = localStorage.getItem(CONFIG_LS_NAME);
  //   if (data && data !== '') {
  //     return JSON.parse(atob(data));
  //   }
  //   return new Config();
  // }

  // constructor(private http: HttpClient) { }

  // clean() {
  //   localStorage.removeItem(CONFIG_LS_NAME);
  // }

  // async getAppConfig(): Promise<void> {
  //   try {
  //     const config = await this.http.get<Config>('assets/config/config.json').toPromise();
  //     if (config) {
  //       localStorage.setItem(CONFIG_LS_NAME, btoa(JSON.stringify(config)));
  //     }
  //   } catch (error) {
  //     console.error(`ConfigService: ${error}`);
  //   }
  // }
}
