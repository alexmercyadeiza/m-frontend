const apiAddress = "http://127.0.0.1:8000/v1";

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

async function postImage(data) {
  const res = await fetch(`${apiAddress}/store/product`, reqOp(data, "POST"));
  return await res.json();
}

async function createOrder(data) {
  const res = await fetch(`${apiAddress}/store/orders`, requestOptions(data, "POST", null));
  return await res.json();
}

export {
  postImage,
  createOrder,
};
