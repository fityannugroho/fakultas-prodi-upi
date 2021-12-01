# Fakultas-Prodi UPI API

---

## Table of Contents

1. [Description](https://github.com/fityannugroho/fakultas-prodi-upi#description)
2. [Framework & Database](https://github.com/fityannugroho/fakultas-prodi-upi#framework-&-database)
3. [Endpoint API](https://github.com/fityannugroho/fakultas-prodi-upi#endpoint-api)
4. [Setting Environment](https://github.com/fityannugroho/fakultas-prodi-upi#setting-environment)
5. [Running the App](https://github.com/fityannugroho/fakultas-prodi-upi#running-the-app)

---

## Description

This is a Public API that contains general information such as attributes or names of faculties, regional campuses, and study programs at the Indonesian Education University (Universitas Pendidikan Indonesia - UPI), ranging from undergraduate to doctoral levels.

## Framework & Database

This project use [NestJS](https://nestjs.com) framework that writes in Typescript, and use [MongoDB](https://www.mongodb.com) database.

## Endpoint API

### 1. `GET /fakultas-prodi`

**Get all faculties, regional campuses, and study programs.**

Response example :

```json
 // Response for 200 (OK)
{
  "data": {
    "universitas": "Universitas Pendidikan Indonesia",
    "listFakultas": [
      {
        "namaFakultas": "FIP",
        "listProdi": [
          {
            "kodeProdi": "A015",
            "namaProdi": "Administrasi Pendidikan",
          },
          ...
        ]
      },
      ...
    ]
  }
}
```

### 2. `GET /fakultas`

**Get all faculties.**

Response example :

```json
// Response for 200 (OK)
{
  "data": [
    {
      "namaFakultas": "FIP",
    },
    ...
  ]
}
```

### 3. `GET /fakultas/{namaFakultas}/prodi`

**Get all study programs from specific faculty name.** `namaFakultas` parameter is string and can contain spaces.

Response example :

```json
// Response for 200 (OK)
// Request example: /fakultas/FIP/prodi
{
  "data": {
    "namaFakultas": "FIP",
    "listProdi": [
      {
        "kodeProdi": "A015",
        "namaProdi": "Administrasi Pendidikan"
      },
      ...
    ]
  }
}

// Response for 404 (NOT FOUND)
// Request example: /fakultas/unknown/prodi
{
  "errors": [
    {
      "status": "404",
      "title": "Tidak ditemukan",
      "detail": "Prodi dari fakultas bersangkutan tidak ditemukan"
    },
  ]
}
```

### 4. `GET /prodi`

**Get all study programs.**

Response example :

```json
// Response for 200 (OK)
{
  "data": {
    "namaFakultas": "FIP",
    "listProdi": [
      {
        "kodeProdi": "A015",
        "namaProdi": "Administrasi Pendidikan"
      },
      ...
    ]
  }
}
```

### 5. `GET /prodi/{kodeProdi}`

**Get a study program from specified code.** `kodeProdi` parameter is string and alphanumeric.

Response example :

```json
// Response for 200 (OK)
{
  "data": {
    "kode": "G505",
    "prodi": "Rekayasa Perangkat Lunak",
    "fakultas": "Kampus UPI Cibiru",
  }
}

// Response for 404 (NOT FOUND)
{
  "errors": [
    {
      "status": "404",
      "title": "Tidak ditemukan",
      "detail": "Kode prodi tidak ditemukan",
    }
  ]
}
```

## Setting Environment

- Duplicate `.template.env` file and rename it to `.env`.

- Set `APP_PORT` with port number you want (default port is 3000).

- Set `MONGODB_URI` with connection string of your cluster. It looks like `mongodb+srv://USERNAME:PASSWORD@CLUSTER_URL/DB_NAME?retryWrites=true&w=majority`. See [MongoDB docs](https://docs.atlas.mongodb.com/tutorial/connect-to-your-cluster) for details.

- Now you are ready to [run the app](https://github.com/fityannugroho/fakultas-prodi-upi#running-the-app).

## Running The App

For run the app in development environment, use this command :

```bash
$ npm run start
```

> See [nestjs.README.md](./nestjs.readme.md#running-the-app) file for details.
