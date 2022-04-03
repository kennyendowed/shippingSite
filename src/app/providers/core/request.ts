import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { StoredRequest } from 'src/app/models/model';
import { StorageProvider } from './storage';
const STORAGE_REQ_KEY: any = environment.STORAGE_REQ_KEY;
const API_REQ_KEY: any = environment.API_REQ_KEY;

@Injectable()

export class RequestProvider implements OnInit
{
  jwt:string = null;
  headers: any = {
    responseType: "json",
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
       "X-Authorization": API_REQ_KEY,
    },
  };
  url: string = environment.url;
  internet: any;
  constructor(
    private _storage: StorageProvider,
    private http: HttpClient
  ) { }

  async ngOnInit() {

  }

  setJwt(jwt: string = null): void {
    this.jwt = jwt;
    (!jwt) ? delete this.headers.headers["Authorization"] : this.headers.headers = {
        "Authorization": "Bearer " + this.jwt
      }
  }

  private async storeRequest(url = this.url, type = "GET", data = {}) {
    let action: StoredRequest = {
      url: url,
      type: type,
      data: data,
      headers: this.headers,
      time: new Date().getTime(),
      id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
    };

    const storedOperations = await this._storage.getItem(STORAGE_REQ_KEY);
    console.log(storedOperations)
    let storedObj = JSON.parse(storedOperations);
    if (!storedObj)
      storedObj = [];
    storedObj.push(action);
    return this._storage.saveItem(STORAGE_REQ_KEY, JSON.stringify(storedObj));
  }

  async get(routes:string) {
    return await new Promise((resolve, reject) => {
      try {
        if(!this.internet) this.storeRequest(this.url + routes, "GET");
        this.http.get(this.url + routes, this.headers)
        .subscribe((res: any) => {
          resolve(res)
        }, (err: any) => {
          reject(err.error)
        })
      } catch(ex) {
        reject({error: ex})
      }
    });
  }

  async repost(routes: string, data) {
    return await new Promise((resolve, reject) => {
      try {
        if(!this.internet) this.storeRequest(this.url + routes, "POST", data);
        this.http.post(this.url + routes, data, this.headers)
        .subscribe((res: any) => {
          resolve(res)
        }, (err: any) => {
      //    console.log(err.error.developerMessage);
          reject({error: err.error.developerMessage || err.error || err})
        })
      } catch(ex) {
        reject({error: ex})
      }
    })
  };

  async post(routes: string, data) {
    return await new Promise((resolve, reject) => {
      try {
        if(!this.internet) this.storeRequest(this.url + routes, "POST", data);
        this.http.post(this.url + routes, data, this.headers)
        .subscribe((res: any) => {
          resolve(res)
        }, (err: any) => {
      //    console.log(err.error.developerMessage);
          reject({error: err.error || err.error || err})
        })
      } catch(ex) {
        reject({error: ex})
      }
    })
  };

  async update (routes: string, data) {
    return await new Promise((resolve, reject) => {
      try {
        if(!this.internet) this.storeRequest(this.url + routes, "PUT", data);
        this.http.put(this.url + routes, data, this.headers)
        .subscribe((res: any) => {
          resolve(res)
        }, (err: any) => {
          reject(err.error)
        })
      } catch(ex) {
        reject({error: ex})
      }
    })
  }

  async delete (routes: string) {
    return await new Promise((resolve, reject) => {
      try {
        if(!this.internet) this.storeRequest(this.url + routes, "DELETE");
        this.http.delete(this.url + routes, this.headers)
        .subscribe((res: any) => {
          resolve(res)
        }, (err: any) => {
          reject(err.error)
        })
      } catch(ex) {
        reject({error: ex})
      }
    })
  }

  async uploadFile(routes: string, fileInfo: any, params: any = null) {
    return await new Promise((resolve, reject) => {
      var formdata = new FormData();
      formdata.append("file", fileInfo);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "multipart/form-data");
      myHeaders.append("Authorization", `Bearer ${this.jwt}`);

      let requestOptions: any = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };
      let url = (!params) ? routes : `${routes}?uid=${params.uid}&source=${params.source}` ;
      fetch(`${environment.url}/${url}`, requestOptions)
        .then(response => response.json())
        .then(result => resolve(result))
        .catch(error => reject(error));
    })
  }
}
