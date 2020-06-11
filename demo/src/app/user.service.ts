import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
	headers: new HttpHeaders({
	'Content-Type': 'application/json'
	})
};
  httpOptions.headers.append('Access-Control-Allow-Origin', '*');
  httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH');
  httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
  httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(private http: HttpClient) { }

  checkUser(name: string ,password: string){
	  if(name=='admin' && password=='admin123'){
	     localStorage.setItem('username','admin');
	     return true;
	  }
		else{
			return false;
		}
  }

  getUser(){
	return this.http.get('https://jsonplaceholder.typicode.com/todos', httpOptions);
  }
	getUserById(id: number){
     return this.http.get('https://jsonplaceholder.typicode.com/todos', httpOptions);
		
	}
  addUser(data){
    return this.http.post('https://jsonplaceholder.typicode.com/todos', data, httpOptions);
  }

  updateUser(user: any){
    this.http.put('https://jsonplaceholder.typicode.com/todos/{user.id}', user, httpOptions);
  }

  deleteUser(id: number){
    this.http.delete('https://jsonplaceholder.typicode.com/todos/{id}' ,httpOptions);

  }

  logout(){
	  localStorage.removeItem('username');
	  localStorage.clear();
  }
}
