import { Component, OnInit } from '@angular/core';
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
      this.service.createList(name).subscribe();

    } else this.error = true;
  }

  getLists() {
    this.service.getLists().subscribe((info) => {
      this.lists = info
      this.all_lists = this.lists.content
    })
  }

  delete(id: number) {
    this.service.delete(id).subscribe({
      next: () => {
        console.log("LISTA REMOVIDA COM SUCESSO")

      }, 
      error: () => {
        console.log("ERRO AO REMOVER LISTA")
      }
    });
  }

}
