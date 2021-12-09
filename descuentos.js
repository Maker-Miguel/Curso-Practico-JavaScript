

function calcularPrecioConDescuento(precio, descuento){
  const porcentajePrecioDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;

  return precioConDescuento
}

const coupons = [
  {
    name: "coupon_uno",
    descuento: 15,
  },
  {
    name: "coupon_dos",
    descuento: 30,
  },
  {
    name: "coupon_tres",
    descuento: 25,
  }
];

function onClickButtonPriceDiscount(){
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

  let descuento;

  const isCouponValueValid = function(coupon){
    return coupon.name === couponValue;
  }

  const userCoupon = coupons.find(isCouponValueValid);

  if(!userCoupon) {
    alert("El cupon " + couponValue + "no es valido")
  } else {
    const descuento = userCoupon.descuento;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
  } 
}






















// const coupons = [
//   {
//     name: "coupon1",
//     discount: 15,
//   },
//   {
//     name: "coupon2",
//     discount: 30,
//   },
//   {
//     name: "coupon3",
//     discount: 25,
//   },
// ];

// const isCouponValueValid = function(cuopon){
//   return coupon.name === couponValue;
// };

// const userCoupon = coupons.find(isCouponValueValid);

// if (!userCoupon) {
//   alert("El Cupon " + userCouponValue + "no es valido");
// }