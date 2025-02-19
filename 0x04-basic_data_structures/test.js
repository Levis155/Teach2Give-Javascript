const product = {
    name: "socks",
    color: "gray",
    price: 50,
    rating: 5,
    isSoldOut: true,
  };
  
for (let item in product) {
    console.log(item);
}