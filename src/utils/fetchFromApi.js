import axios from 'axios';



 const BASE_URL = 'https://youtube-v31.p.rapidapi.com'


const options = {
 
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '3d321f0216mshf82a8727742b325p12b2c8jsndcda007f6423',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromApi = async (url) => {
  const {data} =  await axios.get(`${BASE_URL}/${url}`,options)
  return data;
}

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});