import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const URL='assets/Datos/Starcbucks.json';


@Injectable({
    providedIn:'root'
})
export class ServicioService{

    constructor(private http:HttpClient){}
    
    get(){
        return this.http.get(URL);
    }

}