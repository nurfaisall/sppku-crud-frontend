import { Siswa } from './../Siswa';
import { Component } from '@angular/core';
import { SiswaService } from '../Siswa.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Pembayaran } from '../Pembayaran';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  title = 'sppku-app';

  siswas: Siswa[] = [];

  siswaEdit: Siswa | undefined;

  siswaDetail: Siswa | undefined;
  siswaDetailCount: number = 0;

  bulan: String[] = ['januari','februari','maret','april','mei','juni','juli','agustus','september','oktober','november','desember']

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

  addSiswa(payload: NgForm){
    this.siswaService.addSiswa(payload.value).subscribe(
      (response: Siswa) => {
        console.log(response)
        this.getAllSiswa();
      },(error: HttpErrorResponse) => {
        alert(error.message)
      }
      )
  }

  deleteSiswa(id: String){
    this.siswaService.deleteSiswa(id).subscribe(
      (response: void) => {
        this.getAllSiswa();
        console.log("data telah terhapus")
      },
        (error: HttpErrorResponse) => {
          alert(error.message)
        
      }
    )
  }

  setEditSiswa(siswa: Siswa){
    this.siswaEdit = siswa;
    console.log(this.siswaEdit)
  }

  setDetailSiswa(siswa: Siswa){
    this.siswaDetailCount = 0;
    this.siswaDetail = siswa;
    this.siswaDetailCount = this.siswaDetail.amount / 100000;

  }

  updateSiswa(pembayaran: Pembayaran){
    this.siswaService.pembayaranSiswa(pembayaran).subscribe(
      (response: Pembayaran) => {
        console.log(pembayaran);
        this.getAllSiswa();
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  detailSiswa(siswa: Siswa){
    
  }

  counter(number: number){
    return new Array(number)
  }


  

}
