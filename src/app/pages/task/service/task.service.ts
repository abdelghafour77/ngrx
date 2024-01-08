import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ITask } from "../task.model";


@Injectable({
      providedIn: 'root'
})
export class TaskService {

      token = "eyJhbGciOiJIUzI1NiJ9.eyJhdXRoIjoiUk9MRV9VU0VSIiwidG9rZW5fdHlwZSI6IkFDQ0VTU19UT0tFTiIsInN1YiI6ImFkbWluMUBnbWFpbC5jb20iLCJpYXQiOjE3MDQ3MjExNDQsImV4cCI6MTc4ODcyMTE0NH0.43X4Q_9Mv2UATURZxfGuHtTjMTaM3zT2NudKeIJFfvc";
      
      private baseUrl = 'http://localhost:8082/api/v1/task';

      constructor(private http: HttpClient) { }

      getTaskList(): Observable<ITask[]> {
            const httpOptions = {
                  headers: new HttpHeaders({
                        'Authorization': `Bearer ${this.token}`
                  })};
            return this.http.get<ITask[]>(`${this.baseUrl}`, httpOptions);
      }
}