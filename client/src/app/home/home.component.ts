import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: object;
  userName: string;
  userId: any;
  item: object;
  users: Array<any> = [];
  items: Array<any> = [];
  constructor(private _mainService: MainService, private _http: Http, private _router: Router) {
    // this.item = { _creator: this.userId, title: '', desc: '', _tagged: '' };
    this.item = { title: '', desc: '', _tagged: '' };
  }

  checkSession() {
    this._mainService.checkSession((res) => {
      if (!res) {
        this._router.navigate([""]);
      }
      else {
        this.user = res;
        this.userName = res.name;
        this.userId = res._id;
      }
    })
  };

  showUsers() {
    this._mainService.showUsers((data) =>
      this.users = data)
  };

  create() {
    this._mainService.create(this.item, () => {
      this.showItems();
    });
    this.item = { title: '', desc: '', _tagged: '' };
  };

  showItems() {
    this._mainService.showItems((data) => {
      this.items = data;
    })
  };

  about(_id) {
    this._router.navigate(["user", _id])
  };

  checkbox(_id) {
    // console.log("in component");
    this._mainService.checkbox(_id, (data) => {
      this.showItems();
    })
  };

  ngOnInit() {
    this.checkSession();
    this.showUsers();
    this.showItems();
  };

}

