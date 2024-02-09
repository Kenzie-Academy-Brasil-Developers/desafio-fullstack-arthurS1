# ✩ 🧠 Desafio Fullstack ✩

<div align="left">
  <a href="https://arthur-claro-gidrzhlmv-arthurclaro.vercel.app">
    <img src="https://img.shields.io/badge/LINK%20Vercel-000000.svg?style=for-the-badge&logo=Vercel&labelColor=000">
  </a>
  <a aria-label="NPM >= 9.6.7" href="https://www.npmjs.com/">
    <img alt="NPM version" src="https://img.shields.io/badge/NPM-%3E%3D%209.6.7-black?style=for-the-badge&labelColor=white">
  </a>
  <a aria-label="React" href="https://reactjs.org/">
    <img alt="React version" src="https://img.shields.io/badge/React-%3E%3D%2018.0.0-black?style=for-the-badge&labelColor=white">
  </a>
</div>

## CONTACTS Record - Sobre o desafio : 

Neste desafio, pondo em prática conceitos que aprendi ao longo do curso Kenzie Fullstack, desde conhecimento de front-end e back-end. O intuito deste desafio é avaliar meus conhecimentos técnicos como fullstack junior.
Este desafio consiste em criar um pequeno cadastro de clientes com vínculo de contatos, depois mostrar o cliente e seus contatos vinculados.

### ☑️ Front-End 1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```
ou
```shell
npm install
```

### 2. Rodar

Para incializar run dev com o comando:

```
npm run dev
```
 
### ☑️ Back-End 1. Instalando Dependências

Instale as dependências com o comando:

```shell
yarn
```
ou
```shell
npm install
```
### 2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:
```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```
### 4. Rodar

Para incializar run dev com o comando:

```
npm run dev
```

### 🛸 1. **Criação de Cliente**

### `/users`

### Exemplo de Request:
```
POST /users
Host: http://suaapi.com/v1
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"name": "eDuArDo",
	"email": "edu@mail.com",
	"password": "1234",
	"isAdm": true
}
```
