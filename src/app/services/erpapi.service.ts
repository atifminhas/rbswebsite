import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as crypto from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private enc = crypto.enc.Base64;
  private privateKey = 'Bv3WVq4Kv2R6O53dpCpsaRgCS96REy8490KFc3AM';
  private baseUrl = 'http://localhost:58437/api';
  //private baseUrl = 'http://rbs-api.alruya.edu.kw/api';
  private headerPrefix = 'RBS-Net-Api';
  constructor(
    private http: HttpClient,
  ) { }
  public postRequest(url, data) {
    return this.http.post(`${this.baseUrl}/${url}`, JSON.stringify(data), this.checkHeder(`${this.baseUrl}/${url}`, 'post', data)).pipe();
  }
  public getRequest(url: string) {
    return this.http.get(`${this.baseUrl}/${url}`, this.checkHeder(`${this.baseUrl}/${url}`, 'get', null)).pipe();
  }
  public putRequest(url: string, data: any) {
    return this.http.put(`${this.baseUrl}/${url}`, JSON.stringify(data), this.checkHeder(`${this.baseUrl}/${url}`, 'put', data)).pipe();
  }
  public delRequest(url: string) {
    return this.http.delete(`${this.baseUrl}/${url}`, this.checkHeder(`${this.baseUrl}/${url}`, 'delete', null)).pipe();
  }
  private checkHeder(url, method, body) {
    const acceptHeader = 'application/json, text/plain, */*';
    const userId = localStorage.getItem('app_student') ? localStorage.getItem('app_student') : '0';
    const currentDateTime = new Date();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    httpOptions.headers = httpOptions.headers.append(`${this.headerPrefix}-Date`, currentDateTime.toISOString());
    httpOptions.headers = httpOptions.headers.append(`${this.headerPrefix}-PublicKey`, `${userId}`);
    httpOptions.headers = httpOptions.headers.append(`${this.headerPrefix}-Platform`, '10');
    httpOptions.headers = httpOptions.headers.append('Authorization', 'SmNetHmac ' + this.getSignature(url, method, userId, body, acceptHeader, currentDateTime.toISOString()));
    httpOptions.headers = httpOptions.headers.append('Accept-Language', localStorage.getItem('app_lang') ? localStorage.getItem('app_lang') : 'en');
    if (body) {
      httpOptions.headers = httpOptions.headers.append('Content-Md5', this.getMd5(body));
    }
    return httpOptions;
  }
  private getSignature(url, method, publicKey, body, acceptHeader, timestamp) {
    let signature = null;
    let contentMd5 = null;
    if (body) {
      contentMd5 = this.getMd5(body);
    }
    signature = this.getHmac256(this.privateKey, this.getMessage(url, method, contentMd5, acceptHeader, publicKey, timestamp));

    return signature;
  }
  private getMd5(body) {
    const convertJSToJson = JSON.stringify(body);
    const md5Encrypted = crypto.MD5(convertJSToJson);
    const base65Encoded = md5Encrypted.toString(this.enc);
    return base65Encoded;
  }
  private getHmac256(privateKey, message) {
    const hmacEncrypted = crypto.HmacSHA256(message, privateKey);
    const base65Encoded = hmacEncrypted.toString(this.enc);
    return base65Encoded;
  }
  private getMessage(url, method, content, acceptHeader, publicKey, timestamp) {
    // tslint:disable-next-line: max-line-length
    const result = `${method.toLowerCase()}\n${content ? content : ''}\n${acceptHeader.toLowerCase()}\n${decodeURI(url.toLowerCase())}\n${timestamp}\n${publicKey}`;
    return result;
  }
}
