import { Component, TemplateRef, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { HomeService } from './home.service';
import { FilterPipeModule } from 'ngx-filter-pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userName: any = { title: ''};
  subcription: Subscription;
  result: any;
  modalref: BsModalRef;

  constructor(private modalService: BsModalService, private homeService: HomeService) { }

  ngOnInit(){
    this.homeService.getData().subscribe(resp => {
      this.result = resp['hits'];
      console.log(this.result);
    });
    const source = interval(10000);
    this.subcription = source.subscribe(val => this.openConsole(this.result));
  }

  openModal(template: TemplateRef<any>) {
    this.modalref = this.modalService.show(template);
  }

openConsole(val) {
    console.log(val);
  }














}
