import { Component, OnInit } from '@angular/core';
import { Siswa } from './Siswa';
import { HttpErrorResponse } from '@angular/common/http';
import { SiswaService } from './Siswa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sppku-app';

  siswas: Siswa[] = [];

  constructor(private siswaService: SiswaService){

  }
  ngOnInit(): void {
    this.getAllSiswa();
  }

  getAllSiswa(){
    this.siswaService.getAllSiswa().subscribe((response: Siswa[]) =>{
      this.siswas = response;
      console.log(this.siswas)
    }, (error: HttpErrorResponse) => {
      alert(error.message)
    }

    )
  }


}
