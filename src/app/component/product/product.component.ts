import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { ProdService } from 'src/app/service/prod.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productList : any ;
  public prodselect : any;
  public filterCategory : any
  searchKey:string ="";
  constructor(private api : ApiService, private cartService : CartService, private prodservice : ProdService) { }

  ngOnInit(): void {
    this.api.getproduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(category:string){
    console.log('netered')
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }
  open(item:any){
    this.prodselect = item
    this.sendData()
  }
  sendData(){
    const data = this.prodselect;
    console.log(data)
    this.prodservice.setData(data);
  }
}
