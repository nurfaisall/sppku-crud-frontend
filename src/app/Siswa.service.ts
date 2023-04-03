import { HttpClient } from "@angular/common/http";
import { Siswa } from "./Siswa";
import {Observable} from "rxjs";
import { Injectable } from "@angular/core";
import { Pembayaran } from "./Pembayaran";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class SiswaService{

    apiUrl: String = 'http://localhost:8080';

    constructor(private http: HttpClient){

    }

    getAllSiswa():Observable<Siswa[]> {
        return this.http.get<Siswa[]>(`${this.apiUrl}/api/findAll`)
    }

    getSiswaById():Observable<Siswa> {
        return this.http.get<Siswa>(`${this.apiUrl}/api/find`)
    }

    addSiswa(siswa: Siswa):Observable<Siswa> {
        return this.http.post<Siswa>(`${this.apiUrl}/api/add`, siswa);
    }

    pembayaranSiswa(pembayaran: Pembayaran): Observable<Pembayaran> {
        return this.http.put<Pembayaran>(`${this.apiUrl}/api/pembayaran`,pembayaran)
    }

    deleteSiswa(id: String): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/api/delete/${id}`)
    }
}