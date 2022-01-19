import { Component, OnInit } from '@angular/core';
import { FilesService } from '../../services/files.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.css']
})

export class FilesListComponent implements OnInit {

  itemsList: any = {}; 
  tablesUri: string = ['/', environment.TABLES_URI_PATH].join('');
  
  constructor(private service: FilesService) { }

  ngOnInit(): void {
    this.service.getAllFiles().subscribe( files => {
      this.itemsList = files;
    })
  }

}
