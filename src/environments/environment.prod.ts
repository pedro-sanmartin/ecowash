export const environment = {
  production: true,
  useMock: true,
  urlBase: 'https://api.example.com',
  urlBaseLocales: ':9091/api/v1/local',
  urlBaseAuth: ':9092/api/v1/login',
  urlBaseServicios: ':9093/api/v1/servicio',
  urlBaseUsuarios: ':9094/api/v1/usuario',
  urlBaseUtils: ':9095/api/v1/util',
  urlBasePago: ':9096/api/v1/pago',
  schemes: {
    role: 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role',
    email: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress',
    name: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name',
    descriptionRole:
      'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname',
    id: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid',
  },
};