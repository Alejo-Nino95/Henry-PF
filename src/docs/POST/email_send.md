##### Route :

- /email/send

##### Method:

- POST

##### Body:

```js
{
  emailTo : "destino@host.com", | undefined => envia un email test a la casilla beefshophenry@gmail.com
  motive : "activate" | "reset" | undefined
}
```

##### Response:

```json
{
  "done": true|false, "type":"error"|"info"|"warning", "data": "Mensaje acorde"
}
```
