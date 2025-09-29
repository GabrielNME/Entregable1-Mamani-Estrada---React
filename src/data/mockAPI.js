import products from "./products";

function getMockAPIData() {
  const promiseProducts = new Promise((resolve) => {
    setTimeout(() => {
      console.log("devolviendo los datos...");
      resolve(products);
    }, 1000);
  });

  return promiseProducts;
}

export function getProductbyId(idRequested) {
  const reqItem = products.find((item) => item.id === Number(idRequested));

  const promiseProduct = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Devolviendo item..", reqItem);
      if (reqItem) {
        resolve(reqItem);
      } else {
        reject("Item no encontrado");
      }
    }, 1000);
  });
  return promiseProduct;
}

export function getProductsbyCateg(categRequested) {
  const productsFilter = products.filter(
    (item) => item.category === categRequested
  );
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Productos devueltos...", productsFilter);
      resolve(productsFilter);
    }, 1000);
  });
}

export default getMockAPIData;
