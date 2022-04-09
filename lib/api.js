const apiAddress = process.env.NEXT_PUBLIC_HOSTNAME;

// Request Options
var requestOptions = (raw, verb, token) => {
  return {
    method: verb,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(raw),
    redirect: "follow",
  };
};

var reqOp = (raw, verb) => {
  return {
    method: verb,
    headers: {
      Accept: "application/json",
    },
    body: raw,
    redirect: "follow",
  };
};

var getreq = () => {
  return { method: "GET", headers: { Accept: "application/json" } };
};

async function postImage(data) {
  const res = await fetch(`${apiAddress}/store/product`, reqOp(data, "POST"));
  return await res.json();
}

async function createOrder(data) {
  const res = await fetch(
    `${apiAddress}/store/orders`,
    requestOptions(data, "POST", null)
  );
  return await res.json();
}

// G  E  T
async function getProducts(data) {
  const res = await fetch(
    `${apiAddress}/store/product`,
    requestOptions(data, "GET", null)
  );
  return await res.json();
}

// custom fetch function for products, so it does not go berserk on reload
function getAProduct(id) {
  return fetch(`${apiAddress}/store/product/${id}`, getreq());
  // return await res.json();
}

export { postImage, createOrder, getProducts, getAProduct };
