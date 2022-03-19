##### Route :

- /user/create

##### Method:

- POST

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
  mensaje: "Usuario ha sido creado.";
}
```

##### Route :

- /email/send

##### Method:

- POST

##### Body:

```js
{
  emailTo : "destino@host.com", || undefined => envia un email test a la casilla beefshophenry@gmail.com
  motive : "activate" || "reset" || undefined
}
```

##### Response:

```js
{
  done: true || false
  data: 200'id de mensaje' || 401'error'
}
```
