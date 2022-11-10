import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router'
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  product:any;

  constructor(private router:ActivatedRoute,private service:ProductsService) { }

  ngOnInit(): void {
    let id=this.router.snapshot.paramMap.get("id")
    this.service.getProductDetail(id).then(res=>res.json()).then(data=>this.product=data)
    
  }

}
