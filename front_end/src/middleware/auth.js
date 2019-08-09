export default function auth({ next, router }) {
  console.log(`si paso por aca`)
  //Middleware para validar si la sesion existe, de lo contrario mandarlo a la pagina de login

  if (!localStorage.getItem('token')) {
    return router.push({ name: 'login' });
  }

  return next();
}