import { Component,OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { ProdService } from 'src/app/service/prod.service';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent {
  public productList : any 
  receivedData: any;
  private subscription: Subscription;
 

  constructor(private prodservice: ProdService,private api : ApiService) {
    this.subscription = this.prodservice.data$.subscribe(data => {
      this.receivedData = data;
    });
    
  }
  ngOnInit(): void {
    console.log('inside')
    this.api.getproduct()
    .subscribe(res=>{
      this.productList = res;
      console.log(this.productList)
  });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
