import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MainService {
  user: object;
  users: Array<any>;
  item: object;
  items: Array<any>;
  aboutUser: any;


  // quotes: Array<any>;
  constructor(private _http: Http) { }

  login(user, cb) {
    this._http.post('/login', user).subscribe((res) => {
      this.user = res.json();
      // console.log(this.user);
      cb(res.json());
    })
  };

  checkSession(cb) {
    // console.log("in service")
    this._http.get('/check').subscribe((res) => {
      cb(res.json());
    })
  };

  showUsers(cb) {
    this._http.get('/showUsers').subscribe((res) => {
      this.users = res.json();
      cb(this.users);
    })
  };

  create(item, cb) {
    this._http.post('/create', item).subscribe((res) => {
      this.item = res.json();
      cb();
    })
  };

  showItems(cb) {
    this._http.get('/showItems').subscribe((res) => {
      this.items = res.json();
      cb(this.items);
    })
  };

  about(_id, cb) {
    this._http.get('/about/' + _id).subscribe((res) => {
      this.aboutUser = res;
      // console.log(res.json(), 'df');
      cb(res.json());
    })
  };

  getAbout(cb) {
    // console.log("in service");
    cb(this.aboutUser.json());

  };

  checkbox(_id, cb) {
    // console.log("in service", _id);
    this._http.get('/checkbox/' + _id).subscribe((res) => {
      // console.log(res.json(), 'df');
      cb(res.json());
    })
  };

}

