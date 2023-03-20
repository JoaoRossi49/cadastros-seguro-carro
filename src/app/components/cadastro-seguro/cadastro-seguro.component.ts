import { Component } from '@angular/core';
import { MarcaCarro } from 'src/app/models/MarcaCarro';
import { Seguro } from 'src/app/models/Seguro';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-seguro',
  templateUrl: './cadastro-seguro.component.html',
  styleUrls: ['./cadastro-seguro.component.css']
})
export class CadastroSeguroComponent implements OnInit {
  public seguro = new Seguro();
  public marcasCarros$: Observable<MarcaCarro[]>;

  constructor{
    private marcaCarroService: MarcaCarroService
  } { }

  ngOnInit(){
    this.marcasCarro$ = this.marcaCarroService.getMarcas();
  }

}
