# express-api-boilerplate

1. Crear un archivo de variables de entorno `.env` y crear las variables: `DB_PASSWORD`, `DB_NAME`, `DB_USER`.
2. Ejecutar el comando `npm install`.
3. Ejecutar los test con `npm run test`.

# Esquema de base de datos

En `database/schema.sql` esta la definción del esquema de base de datos, puede modificarlo a conveniencia y ejecutarlo con:
```SQL 
mysql -u `usuario` -p`contraseña` `nombre de la base de datos` < ./database/schema.sql
```
