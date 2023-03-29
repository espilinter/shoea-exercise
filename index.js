const baseURL = "http://localhost:34322";

//  GET
const fetchData = async () => {
  const res = await fetch(`${baseURL}/users`);
  const data = await res.json();
  console.log(data);
};

// POST

async function postData(data) {
  const res = await fetch(`${baseURL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

const sentData = {
  name: "hesam",
  fName: "hosseini",

};

// DELETE

async function deleteData(id) {
  const res = await fetch(`${baseURL}/users/${id}`, {
    method: "DELETE",
  });
}


// "converse": [
//   {
//       "id": 1,
//       "name": "Converse Spezial",
//       "price": 80,
//       "image": "../Assets/airJordan3.png",
//       "image3x": "../Assets/airJordan3-3x.png"
//       },
//       {
//       "id": 2,
//       "name": "Converse Gazelle",
//       "price": 95,
//       "image": "../Assets/nikeReact.png",
//       "image3x": "../Assets/nikeReact3x.png"
//       },
//       {
//       "id": 3,
//       "name": "Converse Solarglide",
//       "price": 85,
//       "image": "../Assets/nikeAirZoom.png",
//       "image3x": "../Assets/nikeAirZoom3x.png"
//       },
//       {
//       "id": 4,
//       "name": "Converse Superstar",
//       "price": 105,
//       "image": "../Assets/nikeAirMax.png",
//       "image3x": "../Assets/nikeAirMax3x.png"
//       },
//       {
//       "id": 5,
//       "name": "Converse Swift Run",
//       "price": 100,
//       "image": "../Assets/K-Swiss-1.png",
//       "image3x": "../Assets/K-Swiss-1-3x.png"
//       }
//       ]