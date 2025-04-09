# 📅 Agenda Frontend (Angular + JSON Server)

Este projeto é uma aplicação frontend desenvolvida em Angular, utilizando o `json-server` como backend simulado. Toda a aplicação está dockerizada para facilitar a execução em qualquer ambiente.

---

## ✅ Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/NathanAlmeida2006/Agenda.git
cd Agenda
```

### 2. Construa e inicie os containers

```bash
docker compose up -d --build
```

> Isso irá:
> - Construir a imagem do frontend Angular
> - Subir dois containers:
>   - `agenda-frontend`: Servindo a aplicação Angular na porta `4200`
>   - `json-server`: Servindo a API fake na porta `3000`

---

## 🌐 Acesso à aplicação

- Interface Angular: [http://localhost:4200](http://localhost:4200)
- API JSON Server: [http://localhost:3000](http://localhost:3000)

---

## 📁 Estrutura dos arquivos principais

- `Dockerfile`: Define o build do projeto Angular
- `docker-compose.yml`: Orquestra os containers da aplicação
- `db.json`: Arquivo com os dados simulados da API

---

## 🧹 Encerrando a aplicação

Para parar e remover os containers:

```bash
docker compose down
```
