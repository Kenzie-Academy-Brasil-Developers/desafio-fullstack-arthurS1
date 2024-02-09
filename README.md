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

### `/clients`

### Exemplo de Request:
```
POST /clients/
Host: 'http://localhost:3000/
Authorization: None
Content-type: application/json
```
### Exemplo de Response:
```
201 Created
```

### Corpo da Requisição:
```json
{
  "name": "Cliente A",
  "email": "abc@gmail.com",
  "password": "1234",
  "phone": "6199301-4861",
  "admin":true (opcional)
}
```

### Exemplo de Request:
```
GET /clients/
Host: 'http://localhost:3000/
Authorization: Required
Content-type: application/json
```

### Exemplo de Response:
```
200 OK
```
```json
{
	"id": 3,
	"name": "Cliente A",
	"email": "abc@gmail.com",
	"phone": "6199301-4861",
	"admin": true,
	"createdAt": "2024-01-30",
	"contacts": [
		{
			"id": 7,
			"name": "Sem d9escr999iption",
			"email": "afiuaw999bfi@gmail.com",
			"phone": "200",
			"createdAt": "2024-01-30"
		},
		{
			"id": 9,
			"name": "Sem d9escr999iption",
			"email": "afiuaw9999bfi@gmail.com",
			"phone": "200",
			"createdAt": "2024-01-30"
		},
		{
			"id": 11,
			"name": "Sem d9escr999iption",
			"email": "afiuaw99999bfi@gmail.com",
			"phone": "200",
			"createdAt": "2024-01-30"
		}
	]
}
```
### `/clients/:id`

### Exemplo de Request:
```
PATCH /clients/:id
Host: 'http://localhost:3000/
Authorization: Required
Content-type: application/json
```
### Corpo da Requisição:
```json
{
  "name": "Cliente AB",
}
```
### Exemplo de Response:
```
200 OK
```
```json
{
	"id": 3,
	"name": "Cliente AB",
	"email": "abc@gmail.com",
	"phone": "6199301-4861",
	"admin": true,
	"createdAt": "2024-01-30",
}
```
### Exemplo de Request:
```
DEL /clients/:id
Host: 'http://localhost:3000/
Authorization: Required
Content-type: application/json
```

### Exemplo de Response:
```
204 Delete Succefully
```

### 🛸 2. **Criação de Contacts**

### `/contacts`

### Exemplo de Request:
```
POST /contacts/
Host: 'http://localhost:3000/
Authorization: Required
Content-type: application/json
```
### Exemplo de Response:
```
201 Created
```

### Corpo da Requisição:
```json
{
  "name": "Sem d9escr999iption",
  "email": "afiuaw99999bfi@gmail.com",
  "phone": "200"
}
```
### Exemplo de Request:
```
GET /contacts/
Host: 'http://localhost:3000/
Authorization: Required
Content-type: application/json
```
### Exemplo de Response:
```
200 Ok
```
```json
[
	{
		"id": 1,
		"name": "Cliente A",
		"email": "abc@gmail.com",
		"phone": "209990",
		"createdAt": "2024-01-30"
	},
	{
		"id": 2,
		"name": "Cliente B",
		"email": "abcd@gmail.com",
		"phone": "299900",
		"createdAt": "2024-01-30"
	}
]
```
### `/contacts/:id`

### Exemplo de Request:
```
PACTH /contacts/
Host: 'http://localhost:3000/
Authorization: Required
Content-type: application/json
```
### Corpo da Requisição:
```json
{
  "name": "Cliente Abc",
}
```

### Exemplo de Response:
```
200 Ok
```
```json
{
		"id": 1,
		"name": "Cliente Abc",
		"email": "abc@gmail.com",
		"phone": "209990",
		"createdAt": "2024-01-30"
}
```
### Exemplo de Request:
```
DEL /contacts/
Host: 'http://localhost:3000/
Authorization: Required
Content-type: application/json
```

### Exemplo de Response:
```
204 Delete Succefully
```

