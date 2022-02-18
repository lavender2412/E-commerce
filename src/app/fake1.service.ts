import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Post} from '../app/models/posts.model'

@Injectable({
  providedIn: 'root'
})
export class Fake1Service {
  //Inject HttpClient obj
  constructor(private hc:HttpClient) { }

getPosts():Observable<any>{
    return this.hc.get<any>("https://reqres.in/api/unknown");
  }
getUsers():Observable<Post[]>{
 return this.hc.get<Post[]>("https://jsonplaceholder.typicode.com/users");
  }
getUsersData(id): Observable<Post[]>{
  return this.hc.get<Post[]>("http://localhost:3000/users/" + id);
}
getDataApi():Observable<any>{
 /* const header={
    "x-rapidapi-key": "b2df75db4fmsh491f4078825d025p11c86fjsn373471369daf",
    "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
    "useQueryString": true
  }*/
  return this.hc.get("https://api-football-beta.p.rapidapi.com/players/topscorers",
  {
    "headers":{
      "x-rapidapi-key": "b2df75db4fmsh491f4078825d025p11c86fjsn373471369daf",
    "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
   //"useQueryString": true
    }});

}
}
