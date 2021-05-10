export class UrlTransformer {
  constructor(public resultUrl: string) { }

  public appendParameter(name: string, value: string): void {

    this.resultUrl = (this.resultUrl || '').replace(`[${name}]`, encodeURIComponent(value));
  }
}
