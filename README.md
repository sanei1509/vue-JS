# introducción a vue JS

## mediante un proyecto de la manera más simple de utilizarlo en uno.

## agregando su CDN dentro de head(tag) AQUI head(tag)

```c
<script src="https://unpkg.com/vue@3"></script>
```

<img src="./assets/images/config.png" />

## dentro de la instancia Vue (objeto) configuramos nuestra aplicación

## Challenge 1

- Añadir descripción de un producto al objeto `data`.
- Mostrar la descripción en una TAG "p"

[HECHO]

## v-bind USES

<img src="./assets/images/v-bind-uses.jpg.png">

## Challenge 2

- añadir un URL al objeto `data`
- usando v-bind para linkear con el atributo `href`

[HECHO]

## Challenge 3

- añadir Booleano al objeto `data`
- Que muestre una etiqueta de oferta cuando haya una (onSale == true)

[REALIZADO]

# Operadores ternarios para asignar clases

EJ : el botón debe estar desactivado cuando no hay

```c
<button
	class = "button"
	:style="{!stock ? disabledButton : " "}"
>

</button>
```

# Propiedades computadas / Computed properties

podemos ver este espacio como una calculadora donde vamos a trabajar la lógica aqui dentro preparando los retorno a utilizar luego.

## Challenge 4

- añadir a traves de las propiedades computadas el cartel de oferta en caso de (TRUE)
  [INTENTANDO...]

## Construcción una APP en bloques con vue JS
