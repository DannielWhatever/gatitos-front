import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UtilService {

  private baseUrl = 'http://localhost:8080';
  private baseHttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public deepClone(obj: any) {
    return JSON.parse(JSON.stringify(obj));
  }

  public *range(max: number, offset = 0): IterableIterator<number> {
    for (let i = 0 + (offset); i < (max + offset); i++) {
      yield i;
    }
  }


  public get<T>(path: string): Observable<T> {
    console.log(`request GET ${this.baseUrl + path}`);
    return this.http.get<T>(this.baseUrl + path);
  }

  public post<T>(path: string, body: any): Observable<T> {
    console.log(`request GET ${this.baseUrl + path}`);
    return this.http.post<T>(this.baseUrl + path, body, this.baseHttpOptions);
  }

  public delete<T>(path: string): Observable<T> {
    console.log(`request DELETE ${this.baseUrl + path}`);
    return this.http.delete<T>(this.baseUrl + path);
  }

  // file from event.target.files[0]
  public uploadFile(file: File): Observable<any> {

    const formData = new FormData();
    formData.append('file', file);

    const params = new HttpParams();

    const options = {
      params: params,
      reportProgress: true,
    };

    // const req = new HttpRequest('POST', `${this.baseUrl}commons/images`, formData, options);
    return this.http.post(`${this.baseUrl}/commons/images`, formData, options);
  }

  public getImageUrl(imageId: string): string {
    return !imageId ? null : imageId.indexOf('http') > -1 ? imageId : `${this.baseUrl}/commons/images/${imageId}`;
  }


}
