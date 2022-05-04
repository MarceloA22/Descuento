let btnEnviar = document.getElementById("precioFinal");
btnEnviar.addEventListener("click", () => {
  let porcDesc: number = 10; //porcDesc=porcentaje de descuento aplicado
  let descuento: number = Number(1 - porcDesc / 100);
  let precio: number = Number(dato1.value);
  let total = precio * descuento;
  console.log("Valor de la compra:", "$", precio);
  console.log("Descuento en porcentaje:", porcDesc, "%");
  console.log("descuento realizado:", "$", precio - total);
  console.log("total de la compra:", "$", total);
});
