Feature: Carrito de compras

Scenario: Agregar producto al carrito
  Given el usuario ingresa como "standard_user"
  When agrega un producto al carrito
  Then el carrito muestra el producto agregado