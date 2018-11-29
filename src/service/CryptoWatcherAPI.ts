import * as config from '../../config/config.json';

const API_URL = `http://${config.API_HOST}:${config.API_PORT}`;

export interface Watcher {
  id: string;
  type: string;
  extra: any;
}

/**
 * CryptoWatcherAPI Store (API wrapper)
 */
class CryptoWatcherAPI {
  /**
   * Fetch helpers to call the API
   *
   * @param {string} path
   * @param {string} method
   * @param {*} [extra={}]
   * @returns {Promise<any>}
   */
  public static async fetch(path: string, method: string, extra: any = {}): Promise<any> {
    const options: any = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      method,
    };
    try {
      if (method === 'POST') options.body = JSON.stringify(extra);
      const response: Response = await fetch(`${API_URL}${path}`, options);
      const data: any = await response.json();
      if (data.error) {
        throw new Error(data.message);
      }
      return data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get all watchers
   *
   * @returns {Promise<any>}
   */
  public static async getWatchers(): Promise<Watcher[]> {
    try {
      return await CryptoWatcherAPI.fetch('/watchers', 'GET');
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get specific watcher
   *
   * @static
   * @param {string} id
   * @returns {Promise<Watcher>}
   * @memberof CryptoWatcherAPI
   */
  public static async getWatcher(id: string): Promise<Watcher> {
    try {
      return await CryptoWatcherAPI.fetch(`/watchers/${id}`, 'GET');
    } catch (error) {
      throw error;
    }
  }

  /**
   * Create a watcher
   *
   * @static
   * @param {any} watcher
   * @returns {Promise<Watcher>}
   * @memberof CryptoWatcherAPI
   */
  public static async createWatcher(watcher: any): Promise<Watcher> {
    try {
      return await CryptoWatcherAPI.fetch(`/watchers`, 'POST', {
        type: watcher.type,
        exchange: watcher.exchange.toLowerCase(),
        base: watcher.base.toUpperCase(),
        quote: watcher.quote.toUpperCase(),
        extra: watcher.extra,
      });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Start a watcher
   *
   * @static
   * @param {string} id
   * @returns {Promise<void>}
   * @memberof CryptoWatcherAPI
   */
  public static async startWatcher(id: string): Promise<void> {
    try {
      return await CryptoWatcherAPI.fetch(`/watchers/${id}/start`, 'GET');
    } catch (error) {
      throw error;
    }
  }

  /**
   * Stop a watcher
   *
   * @static
   * @param {string} id
   * @returns {Promise<void>}
   * @memberof CryptoWatcherAPI
   */
  public static async stopWatcher(id: string): Promise<void> {
    try {
      return await CryptoWatcherAPI.fetch(`/watchers/${id}/stop`, 'GET');
    } catch (error) {
      throw error;
    }
  }

  /**
   * Delete watcher
   *
   * @static
   * @param {string} id
   * @returns {Promise<void>}
   * @memberof CryptoWatcherAPI
   */
  public static async deleteWatcher(id: string): Promise<void> {
    try {
      return await CryptoWatcherAPI.fetch(`/watchers/${id}`, 'DELETE');
    } catch (error) {
      throw error;
    }
  }
}

export default CryptoWatcherAPI;
