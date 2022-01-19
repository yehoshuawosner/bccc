import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class FilesService {

  private API_FILES = environment.API_FILES; 

  constructor(private http: HttpClient) { }

  public getAllFiles():Observable<any> {
    return this.http.get(this.API_FILES)
  }

  public getFileContent(fileName: any):Observable<any> {
    let uri = [this.API_FILES, fileName].join('');
    return this.http.get(uri)
  }

}