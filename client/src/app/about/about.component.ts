import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  user: object;
  aboutUser: any;
  name:any;
  items: Array<any> = [];
  userName: string;
  userId: any;
  constructor(private _mainService: MainService, private _http: Http, private _router: Router, private _route: ActivatedRoute) { }

  checkSession() {
    this._mainService.checkSession((res) => {
      if (!res) {
        this._router.navigate([""]);
      }
      else{
        this.user = res;
        this.userName = res.name;
        this.userId = res._id;
      }
    })
  };

  // getAbout(){
  //   this._mainService.getAbout( (data) => {
  //     this.aboutUser = data;
  //     // console.log(data);
  //     })
  // };

  showItems() {
    this._mainService.showItems((data) => {
      this.items = data;
    })
  };

  checkbox(_id) {
    // console.log("in component");
    this._mainService.checkbox(_id, (data) => {
      this.showItems();
    })
  };

  ngOnInit() {
    // this.getAbout();
    this._route.paramMap.subscribe(params => {
      // console.log(params.get('id'));
      var id = params.get('id');
      this._mainService.about(id, (data) => {
        this.aboutUser = data;
        this.name = this.aboutUser.name;
        this.showItems();
        this.checkSession();
      })
    });
  }

}
