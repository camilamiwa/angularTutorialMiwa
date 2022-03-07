import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagemMain = 'https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/01241975-4f8a5b1f0f.jpeg?quality=70&strip=info&w=920?quality=70&strip=info&w=636';
  urlImagemAerea = 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Panorama_de_Macei%C3%B3.jpg';
  urlImagemFrontal = 'https://s3q7j5f5.stackpathcdn.com/wp-content/uploads/2021/07/maceio-cidade-brasil.jpg';

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
