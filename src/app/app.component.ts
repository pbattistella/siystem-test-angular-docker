import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sistema de teste usando angular e docker';

  formulario = {
    nome: '',
    email: '',
    telefone: ''
  };



  onclickEnviar = () => {
    console.log(this.formulario);
    alert(`Nome: ${this.formulario.nome}\nE-mail: ${this.formulario.email}\nTelefone: ${this.formulario.telefone}`);
  }

}
