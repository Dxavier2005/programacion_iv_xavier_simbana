# Programación IV

**Autor:** Xavier Simbaña

## 🎯 Objetivo principal

El objetivo principal de **Programación IV** es adquirir los conocimientos y habilidades necesarios para el **desarrollo de aplicaciones móviles**, comprendiendo desde los fundamentos de programación hasta la creación, prueba, depuración, compilación y publicación de aplicaciones.

Durante la materia se trabajará con diferentes lenguajes, frameworks, herramientas y servicios utilizados en el desarrollo moderno de aplicaciones móviles, aprendiendo cómo se relacionan entre sí dentro de un proyecto de software.

---

## 📱 Desarrollo móvil

El **desarrollo móvil** es el proceso de crear aplicaciones destinadas a dispositivos móviles como teléfonos inteligentes y tablets.

Las aplicaciones pueden desarrollarse específicamente para un sistema operativo, como Android o iOS, o mediante tecnologías multiplataforma que permiten utilizar una misma base de código para diferentes plataformas.

---

# 🛠️ Tecnologías y herramientas

## Kotlin

**Kotlin** es un lenguaje de programación moderno desarrollado por JetBrains.

Es uno de los principales lenguajes utilizados para desarrollar aplicaciones **Android**. Permite crear aplicaciones de forma segura, concisa y eficiente.

---

## Dart

**Dart** es un lenguaje de programación desarrollado por Google.

Es el lenguaje utilizado principalmente por **Flutter** para crear aplicaciones multiplataforma.

---

## Flutter

**Flutter** es un framework de desarrollo de aplicaciones creado por Google.

Permite desarrollar aplicaciones para:

* Android
* iOS
* Web
* Windows
* macOS
* Linux

Utiliza **Dart** como lenguaje de programación y permite construir interfaces mediante widgets.

---

## React Native

**React Native** es un framework desarrollado por Meta que permite crear aplicaciones móviles utilizando **JavaScript o TypeScript** y React.

Su principal ventaja es permitir desarrollar aplicaciones para Android e iOS utilizando gran parte del mismo código.

---

## Node.js

**Node.js** es un entorno de ejecución que permite ejecutar JavaScript fuera del navegador.

Se utiliza principalmente para desarrollar aplicaciones del lado del servidor, APIs y servicios backend que pueden comunicarse con aplicaciones móviles.

---

## JavaScript

**JavaScript** es un lenguaje de programación utilizado principalmente para desarrollar aplicaciones web y también aplicaciones móviles mediante tecnologías como React Native.

---

## TypeScript

**TypeScript** es un lenguaje basado en JavaScript que incorpora tipado estático y otras características que facilitan el desarrollo de aplicaciones grandes y complejas.

Es utilizado frecuentemente junto con React y React Native.

---

# 🔧 Herramientas de desarrollo

## Git

**Git** es un sistema de control de versiones.

Permite registrar los cambios realizados en un proyecto, crear ramas, regresar a versiones anteriores y trabajar con otros desarrolladores.

---

## GitHub

**GitHub** es una plataforma que permite almacenar y gestionar repositorios Git en Internet.

Se utiliza para:

* Guardar proyectos.
* Controlar versiones.
* Colaborar con otros desarrolladores.
* Crear ramas y Pull Requests.
* Revisar código.
* Gestionar proyectos mediante Issues.

---

## Visual Studio Code

**Visual Studio Code (VS Code)** es un editor de código fuente desarrollado por Microsoft.

Es utilizado para programar en diferentes lenguajes y tecnologías, incluyendo:

* JavaScript
* TypeScript
* Dart
* Node.js
* React
* React Native
* Flutter

Además, permite ampliar sus funciones mediante extensiones.

---

## Android Studio

**Android Studio** es el entorno de desarrollo oficial para aplicaciones Android.

Permite:

* Crear proyectos Android.
* Programar con Kotlin.
* Ejecutar aplicaciones.
* Utilizar emuladores.
* Depurar aplicaciones.
* Administrar proyectos Gradle.
* Generar APK y AAB.

---

## Postman

**Postman** es una herramienta utilizada para probar y desarrollar **APIs**.

Permite enviar solicitudes HTTP como:

* `GET`
* `POST`
* `PUT`
* `PATCH`
* `DELETE`

Es especialmente útil para comprobar que un backend funciona correctamente antes de conectarlo con una aplicación móvil.

---

## Gradle

**Gradle** es una herramienta de automatización utilizada principalmente para construir proyectos Android.

Se encarga de tareas como:

* Descargar dependencias.
* Compilar código.
* Ejecutar tareas.
* Generar aplicaciones.
* Administrar configuraciones del proyecto.

---

## npm

**npm (Node Package Manager)** es el administrador de paquetes utilizado principalmente con Node.js.

Permite instalar, actualizar y administrar las dependencias de un proyecto JavaScript o TypeScript.

---

## pub

**Pub** es el sistema de administración de paquetes utilizado por Dart.

Permite agregar y administrar dependencias utilizadas por proyectos Dart y Flutter.

---

# 🌐 APIs

Una **API (Application Programming Interface)** es una interfaz que permite que diferentes aplicaciones o sistemas se comuniquen entre sí.

Por ejemplo:

```text
Aplicación móvil
       ↓
      API
       ↓
    Backend
       ↓
   Base de datos
```

Una aplicación móvil puede utilizar una API para iniciar sesión, obtener información, registrar usuarios o guardar datos.

---

# 🔄 Comunicación HTTP

Las aplicaciones móviles frecuentemente se comunican con servidores mediante el protocolo **HTTP/HTTPS**.

Algunos métodos utilizados son:

| Método | Uso                     |
| ------ | ----------------------- |
| GET    | Obtener información     |
| POST   | Crear información       |
| PUT    | Actualizar información  |
| PATCH  | Actualizar parcialmente |
| DELETE | Eliminar información    |

---

# 🗄️ Backend

El **backend** es la parte de una aplicación que funciona en el servidor.

Se encarga de tareas como:

* Procesar solicitudes.
* Gestionar usuarios.
* Aplicar reglas de negocio.
* Autenticar usuarios.
* Comunicarse con bases de datos.
* Proporcionar APIs.

Una aplicación móvil puede funcionar como **frontend**, mientras que Node.js puede utilizarse para construir el **backend**.

---

# 💾 Base de datos

Una **base de datos** permite almacenar y organizar información de una aplicación.

Por ejemplo:

```text
Usuarios
 ├── id
 ├── nombre
 ├── correo
 └── contraseña
```

Una aplicación móvil puede comunicarse con un backend para consultar o modificar estos datos.

---

# 📦 JSON

**JSON (JavaScript Object Notation)** es un formato utilizado frecuentemente para intercambiar información entre aplicaciones y APIs.

Ejemplo:

```json
{
  "nombre": "Xavier",
  "edad": 20,
  "activo": true
}
```

---

# 🧪 Testing

El **testing** consiste en realizar pruebas sobre una aplicación para comprobar que funciona correctamente y detectar errores.

Puede incluir:

* Pruebas unitarias.
* Pruebas de integración.
* Pruebas de interfaz.
* Pruebas de APIs.
* Pruebas manuales.

---

# 🐛 Debugging

El **debugging** es el proceso de encontrar, analizar y corregir errores dentro de un programa.

Herramientas como **Visual Studio Code** y **Android Studio** proporcionan depuradores que permiten analizar la ejecución del programa.

---

# 📂 Estructura general de un proyecto

Un proyecto de desarrollo móvil puede estar organizado de la siguiente manera:

```text
proyecto/
│
├── frontend/
│   └── aplicación móvil
│
├── backend/
│   └── API
│
├── database/
│   └── base de datos
│
├── .gitignore
├── README.md
└── package.json
```

La estructura puede variar dependiendo de la tecnología utilizada.

---

# 🚀 Flujo general de desarrollo

El proceso de desarrollo de una aplicación móvil puede seguir un flujo similar a:

```text
Idea
 ↓
Análisis
 ↓
Diseño
 ↓
Programación
 ↓
Control de versiones (Git)
 ↓
Desarrollo del Backend / API
 ↓
Pruebas con Postman
 ↓
Integración con la aplicación móvil
 ↓
Testing
 ↓
Debugging
 ↓
Compilación
 ↓
Publicación
```

---

# 📚 Tecnologías principales de la materia

| Tecnología     | Función principal                 |
| -------------- | --------------------------------- |
| Kotlin         | Desarrollo Android                |
| Dart           | Lenguaje utilizado por Flutter    |
| Flutter        | Desarrollo multiplataforma        |
| React Native   | Desarrollo móvil multiplataforma  |
| Node.js        | Desarrollo backend                |
| JavaScript     | Programación                      |
| TypeScript     | JavaScript con tipado             |
| Git            | Control de versiones              |
| GitHub         | Repositorios y colaboración       |
| Postman        | Pruebas de APIs                   |
| VS Code        | Editor de código                  |
| Android Studio | Desarrollo Android                |
| Gradle         | Construcción de proyectos Android |
| npm            | Gestión de paquetes Node.js       |
| Pub            | Gestión de paquetes Dart/Flutter  |

---

# 🎓 Resultado esperado

Al finalizar **Programación IV**, se busca tener la capacidad de comprender y participar en el desarrollo de aplicaciones móviles, utilizando herramientas modernas para programar, administrar proyectos, consumir APIs, realizar pruebas y trabajar con sistemas de control de versiones.

El objetivo no es solamente aprender un lenguaje o framework, sino comprender **cómo todas estas tecnologías forman parte de un proceso completo de desarrollo de software**.

---

## 📌 Tecnologías estudiadas

```text
                    DESARROLLO MÓVIL
                           │
          ┌────────────────┴────────────────┐
          │                                 │
       ANDROID                       MULTIPLATAFORMA
          │                                 │
       Kotlin                    ┌──────────┴──────────┐
          │                       │                     │
   Android Studio              Flutter           React Native
                                  │                     │
                                Dart              JS / TypeScript
          │                       │                     │
          └───────────────┬───────┴─────────────────────┘
                          │
                         API
                          │
                       Node.js
                          │
                       Backend
                          │
                     Base de datos

        Git + GitHub + VS Code + Postman
                 ↓
        Herramientas de desarrollo
```

---

**Autor:** Xavier Simbaña

**Materia:** Programación IV

**Área:** Desarrollo de Software / Desarrollo Móvil
