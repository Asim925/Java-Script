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

// function ShowAddress(street, city, zipcode) {
//   this.street = street;
//   this.city = city;
//   this.zipcode = zipcode;
// }

// const address = new ShowAddress("mehmoodabad 6", "karachi", "90001");
// console.log(address);

// ===========================================================================
// ANOTHER Exercise// ANOTHER Exercise

// function Address(street, city, zipcode) {
// this.street = street;
// this.city = city;
// this.zipcode = zipcode;
// }
//
// let address1 = new Address("a", "b", "c");
// let address2 = new Address("a", "b", "c");
//
// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));
//
// function areEqual(address1, address2) {
// return (
// address1.street === address2.street && // agr to ye sab true hoga to hi log hoga
// address1.city === address2.city && // baghair if ke is tarhan kr liya GEO
// address1.zipcode === address2.zipcode
// );
// }
//
// function areSame(address1, address2) {
// return address1 === address2; // ye dono alag objects hai is waja se false aye ga
// }
//

// ===========================================================================
// ANOTHER Exercise

// blogPost should contain these :
// title ,,, body  ,,, author ,,, views ,,, comments(author,body) ,,, isLive

const blogPost = {
  title: "a",
  body: "b",
  author: "c",
  views: "d",
  comments: { author: "A", body: "B" },
  isLive: true,
};
