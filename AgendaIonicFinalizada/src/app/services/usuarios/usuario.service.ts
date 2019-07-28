import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  endpoint = 'http://localhost:3000/v2/';
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(
    private http:HttpClient,
    private router : Router
    ) { }

  private extractData(res){
    let body = res;
    return body || [] || {};
  }


  login(correo, password):Observable<any>{
    return this.http.post(this.endpoint + 'login', {correo: correo, password: password}, this.httpOptions).pipe(map(this.extractData));
  }

  searchContacts(id){
    return this.http.post(this.endpoint + 'searchContacts', {id: id}, this.httpOptions).pipe(map(this.extractData));
  }

  logOut() : void{
    localStorage.removeItem('_id')
    localStorage.removeItem('primer_nombre')
    localStorage.removeItem('correo')
    this.router.navigate(['/login'])
  }

  isLogued() : boolean {
    let data = localStorage.getItem('_id')
    if( data != null ){
      console.log('si esta logueado')
      return true
    }else{
      console.log('no estas logueado')
      this.router.navigate(['/login'])
      return false
    }
  }

  myContacts( idUser : string  ) : Observable<any> {
    return this.http.get(`${this.endpoint}/list/contacts/${idUser}` )
  }

  addMyContact( user : any  ) : Observable<any> {
    return this.http.post(`${this.endpoint}newContact`, user )
  }

  newuser( user : any  ) : Observable<any> {
    return this.http.post(`${this.endpoint}newuser`, user )
  }


}
