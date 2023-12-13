// ===========================================================================
// EXERCISE 1

// street , city , zip code
// showAddress(address)

let address = {
  street: "Mehmoodabad no.6",
  city: "Karachi",
  zipCode: "90001",
};

function showAddress(address) {
  for (let key in address) console.log(key, ":", address[key]);
}

showAddress(address);
