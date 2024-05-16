import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Taskboard } from '../model/taskboard/taskboard';
import { Task } from '../model/task/task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private hostURL = environment.baseURL;

  constructor(private http: HttpClient) { }

  getAllTaskBoards(): Observable<Taskboard[]> {
    return this.http.get<Taskboard[]>(this.hostURL + 'taskboards/');
  }

  getTaskboardById(id : String): Observable<Taskboard> {
    return this.http.get<Taskboard>(this.hostURL + 'taskboards/' + id);
  }
}
