import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/classes/Address';
import { AddressService } from 'src/app/service/address.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {

  addresses: Address[] = []

  constructor(private service: AddressService) { }

  ngOnInit(): void {
    this.getAllAddresses();
  }

  getAllAddresses() {
    this.service.getAllAddresses().subscribe((info) => {
      this.addresses = info;
      console.log("ADDRESSES", info)
    });
  }

  add() {
    let address = (<HTMLInputElement>document.getElementById("address")).value
    let city = (<HTMLInputElement>document.getElementById("city")).value
    let country = (<HTMLInputElement>document.getElementById("country")).value
    let zipcode = (<HTMLInputElement>document.getElementById("zipcode")).value

    this.service.add(address, city, country, zipcode).subscribe({
      next: (info: any) => {
        console.log(info)
        this.addresses.push(info.address)        
      }, 
      error: () => {
        console.log("ERRO AO ADICIONAR UMA ADDRESS")
      }
    });
  }


}
