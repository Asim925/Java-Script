// ===========================================================================
// EXERCISE 1 && 2

// street , city , zip code
// showAddress(address)

// let address = {
//   street: "Mehmoodabad no.6",
//   city: "Karachi",
//   zipCode: "90001",
// };

// function showAddress(address) {
//   for (let key in address) console.log(key, ":", address[key]);
// }

// showAddress(address);

// ===========================================================================
// by factory function

// function showAddress(street, city, zipcode) {
//   return {
//     street,
//     city,
//     zipcode,
//   };
// }

// const addressTemp = showAddress("mehmoodabad 6", "karachi", "90001");
// console.log(addressTemp);

// ===========================================================================
// by constructor function

function ShowAddress(street, city, zipcode) {
  this.street = street;
  this.city = city;
  this.zipcode = zipcode;
}

const address = new ShowAddress("mehmoodabad 6", "karachi", "90001");
console.log(address);
