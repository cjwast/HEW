export default function auth({ next, router }) {
  console.log(`si paso por aca`)
  if (!localStorage.getItem('token')) {
    return router.push({ name: 'login' });
  }

  return next();
}