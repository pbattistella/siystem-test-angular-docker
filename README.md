# System Test Angular Docker

Projeto frontend desenvolvido com Angular e Bootstrap, containerizado com Docker.

## 🚀 Tecnologias

- [Angular 15](https://angular.io/)
- [Bootstrap 5](https://getbootstrap.com/)
- [Docker](https://www.docker.com/)

## 📋 Pré-requisitos

- Node.js >= 16
- NPM >= 8
- Angular CLI >= 15
- Docker (opcional)

## 💻 Como rodar localmente

Clone o repositório:
```bash
git clone https://github.com/pbattistella/siystem-test-angular-docker.git
cd siystem-test-angular-docker
```

Instale as dependências:
```bash
npm install
```

Rode o projeto:
```bash
ng serve
```

Acesse em: `http://localhost:4200`

## 🐳 Como rodar com Docker

Build da imagem:
```bash
docker build -t system-test-angular-docker .
```

Rode o container:
```bash
docker run -p 4200:4200 system-test-angular-docker
```

Acesse em: `http://localhost:4200`

## 📁 Estrutura do projeto
```
src/
├── app/
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.css
│   └── app.module.ts
├── assets/
└── styles.css
```

## 📝 Funcionalidades

- Formulário com campos de Nome, E-mail e Telefone
- Binding de dados com ngModel
- Estilização com Bootstrap

## 👤 Autor

**Paulo Battistella**  
GitHub: [@pbattistella](https://github.com/pbattistella)