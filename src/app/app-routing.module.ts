import { HomeComponent } from './components/home/home.component';
import { FilesListComponent } from './components/files-list/files-list.component';
import { TablesListComponent } from './components/tables-list/tables-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';

const routes: Routes = [
  {
    component:HomeComponent,
    path: environment.HOME_URI_PATH
  },
  {
    component:FilesListComponent,
    path: environment.FILES_URI_PATH
  },
  {
    component:TablesListComponent,
    path: environment.TABLES_URI_PATH
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
