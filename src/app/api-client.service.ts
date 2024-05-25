import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarModel, CarOptions} from "./shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  private apiUrlModels = '/api/models';
  private apiUrlOptions = '/api/options';

  constructor(private http: HttpClient) { }

  getModels(): Observable<CarModel[]> {
    return this.http.get<CarModel[]>(this.apiUrlModels);
  }

  getOptions(modelId: string): Observable<CarOptions> {
    return this.http.get<CarOptions>(`${this.apiUrlOptions}/${modelId}`);
  }
}
