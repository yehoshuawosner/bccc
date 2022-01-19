import { Component, OnInit } from '@angular/core';
import { FilesService } from '../../services/files.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-tables-list',
  templateUrl: './tables-list.component.html',
  styleUrls: ['./tables-list.component.css']
})

export class TablesListComponent implements OnInit {

  panelOpenState = false;
  itemsList: any = {};
  fileUri = ['/', environment.FILES_URI_PATH].join('');

  constructor(private service: FilesService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const source = this.route.snapshot.queryParamMap.get('source');

    this.service.getFileContent(source).subscribe( tables => {
      this.itemsList = tables.tables;
    })
  }

}
