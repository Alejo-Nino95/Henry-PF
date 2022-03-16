##### Route :  
 - /user/update/:userId

##### Method:
 - PUT

##### Body:

```js
{
  correo : "correo@host.com",
  nombre : "usuario 1",
  apellido : "qwertyuiop",
  celular : "123-456-4562",
  direccion : "alguna direccion",
  contraseña : "contraseña1"
}
```

##### Response:
```js
{
  mensaje: 'Usuario actualizado.'
}
```