import { Component, OnInit, ViewChild } from '@angular/core';
import { List } from 'src/app/classes/List';
import { Page } from 'src/app/classes/Page';
import { ListService } from 'src/app/service/list.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  @ViewChild('close') closebutton!: any;
  error: boolean = false;
  lists!: Page<List>;
  all_lists!: List[];
  
  constructor(private service: ListService) { }

  ngOnInit(): void {
    this.getLists();
  }

  createList() {
    let name = (<HTMLInputElement>document.getElementById("list_name")).value;

    if (name) {
      this.error = false;
      this.service.createList(name).subscribe({
        next: (info: any) => {
          console.log("LISTA CRIADA COM SUCESSO")
          this.all_lists.push(info);
          this.closebutton.nativeElement.click();
  
        }, 
        error: () => {
          console.log("ERRO AO CRIAR LISTA")
        }
      });

    } else this.error = true;
  }

  getLists() {
    this.service.getLists().subscribe((info) => {
      this.lists = info
      this.all_lists = this.lists.content
    })
  }

  removeList(id : number) {
    let list = this.all_lists.find(x => x.id == id)
    if (list) {
      const index = this.all_lists.indexOf(list, 0);
      if (index > -1) this.all_lists.splice(index, 1);
    } 
  }

}
