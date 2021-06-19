import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  photos = [
    {
      url: "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/pier-da-barra-tijuca-rio-de-janeiro-foto-alexandre-macieira-riotur.jpeg?quality=70&strip=info&w=923",
      description: "Tijuca"
    },
    {
      url: "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/pier-da-barra-tijuca-rio-de-janeiro-foto-alexandre-macieira-riotur.jpeg?quality=70&strip=info&w=923",
      description: "Tijuca"
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Sultan_the_Barbary_Lion.jpg/440px-Sultan_the_Barbary_Lion.jpg',
      description: 'Leão'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Lioness_Etosha_NP.jpg/500px-Lioness_Etosha_NP.jpg',
      description: 'Leoa'
    }
  ]
}
