import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit{
  photoCover:string = "https://uploads.jovemnerd.com.br/wp-content/uploads/2022/07/tony_stark_vingadores_ultimato_cena__70kqp20-1210x544.jpg";
  contentTitle: string = "MINHA NOTICIA";
  contentDescription:string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quibusdam, recusandae eaque facere molestias assumenda molestiae laborum inventore. Impedit quam, unde modi possimus porro tempore non atque perferendis nulla enim.";

  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
