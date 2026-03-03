# 📱 EcoWash

> **Demo técnica de frontend** — Interfaz basada en un sistema real desarrollado para una empresa del rubro de servicios en terreno. Código recreado de forma independiente con fines estrictamente de demostración técnica.

---

## ⚠️ Aclaración importante

Este proyecto es una **recreación independiente** para mi portafolio personal. Todo el código ha sido implementado por separado con el único propósito de **demostración técnica**. La aplicación original fue desarrollada para un cliente real (cuyo nombre no se divulga por confidencialidad).

**Toda la información, datos, marcas y contenidos visibles son ficticios o simulados**, garantizando el cumplimiento de acuerdos de confidencialidad con el cliente original.

---

## 📲 Diseño Mobile First

Esta aplicación está diseñada bajo un enfoque **mobile first** y pensada principalmente para ser usada en **celulares o dispositivos móviles**. La naturaleza del negocio y el trabajo que se realiza en terreno (visitas a sucursales, registro de pagos en ubicación, etc.) exigen una interfaz optimizada para uso en campo con smartphones.

| Característica | Descripción |
|----------------|-------------|
| 📱 Menú lateral deslizable | Navegación tipo drawer adaptada a pantallas táctiles |
| 📐 Anchos limitados | Formularios y modales ajustados a ~400px (experiencia móvil) |
| 🔄 Responsive | Media queries para adaptación en tablets y escritorio |
| 👆 Interacciones táctiles | Elementos de tamaño adecuado para uso con dedos |

---

## 🛠️ Stack técnico

| Tecnología | Versión | Uso |
|------------|---------|-----|
| Angular | 13.3.x | Framework frontend |
| Angular Material | 13.3.x | Componentes UI |
| Angular CDK | 13.3.x | Utilidades de accesibilidad y layout |
| TypeScript | 4.6.x | Lenguaje |
| RxJS | 7.5.x | Programación reactiva |
| Angular Feather | 6.0.x | Iconos |
| @auth0/angular-jwt | 5.0.x | Manejo de JWT |
| SweetAlert2 | 11.4.x | Alertas y modales |
| ng-multiselect-dropdown | 0.3.x | Selectores múltiples |
| Karma + Jasmine | — | Pruebas unitarias |

---

## ✨ Funcionalidades

| Módulo | Descripción |
|--------|-------------|
| 🔐 **Autenticación** | Login, recuperar contraseña, cambiar contraseña |
| 🏠 **Inicio** | Dashboard con acceso rápido a los módulos principales |
| 📦 **Servicios** | CRUD de servicios (código, nombre, precio, estado) |
| 👥 **Usuarios** | CRUD de usuarios con roles (Administrador, Operador, Jefe de ventas) |
| 📍 **Locales** | CRUD de sucursales/locales con asignación de operadores y servicios |
| 📋 **Reglas** | Gestión de reglas de negocio y ajustes |
| 💰 **Pagos** | Revisión de pagos, historias de pagos, últimos movimientos |
| 💳 **Pagar** | Realizar pago, consulta de pagos pendientes |
| 📊 **Reportes** | Informe consolidado e informe detallado |
| 🔔 **Enviar notificación** | Envío de notificaciones |
| 📉 **Descuentos** | Aprobación de ajustes y descuentos |

---

## 🚀 Instalación y ejecución

### Requisitos previos

| Requisito | Descripción |
|-----------|-------------|
| Node.js | v14 o superior recomendado |
| npm | Incluido con Node.js |

### Pasos para ejecutar en local

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd ecowash
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm start
   ```
   O bien:
   ```bash
   ng serve
   ```

4. **Abrir en el navegador**
   - Navega a `http://localhost:4200/`

### Modo demo (sin backend)

La aplicación incluye **datos simulados** y funciona sin backend. Por defecto está configurada en modo demo.

| Credencial | Valor |
|------------|-------|
| **Usuario** | `demo@example.com` |
| **Contraseña** | `Demo123` |

Con estas credenciales podrás explorar todos los módulos con información de ejemplo.

Para conectar un backend real, configura `useMock: false` y define `urlBase` en `src/environments/environment.ts` y `environment.prod.ts`.

---

## 📜 Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia el servidor de desarrollo en `http://localhost:4200/` |
| `ng serve` | Equivalente a `npm start` |
| `npm run build` | Compila el proyecto para producción (output en `dist/`) |
| `npm run watch` | Compila en modo watch para desarrollo |
| `npm test` | Ejecuta las pruebas unitarias con Karma |

---

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── auth/              # Login, recuperar/cambiar contraseña
│   ├── components/        # Componentes compartidos (header, menu, modales)
│   ├── core/              # Interceptores, mocks
│   ├── models/            # Interfaces y modelos
│   ├── pages/             # Módulos de la aplicación
│   ├── pipes/             # Pipes personalizados
│   └── services/          # Servicios (auth, usuarios, locales, etc.)
├── assets/                # Imágenes y recursos estáticos
└── environments/          # Configuración por entorno
```

---

## ⚖️ Licencia

Este proyecto está bajo una licencia personalizada de "Uso para Evaluación". [Consulta los detalles aquí](LICENSE).
