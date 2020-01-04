export class HttpSimulator {
  public static httpGet(url: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => resolve('httGet(' + url + '): Ok'), 2000);
    });
  }

  public static httpGetWithError(url: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => reject(new HttpError('httGet: Error 500')), 2000);
    });
  }
}

export class HttpError extends Error {}
