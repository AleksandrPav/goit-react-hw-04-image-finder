const API_KEY = "28107487-df53024f81d649718d09de179";
const BASE_URL = 'https://pixabay.com/api/?key=';
const OPTION = '}&image_type=photo&orientation=horizontal&per_page=12';




export default function fetchImage(search= '', page = 1) {
  return fetch(
    BASE_URL + API_KEY + `&q=${search}` + OPTION + `&page=${page}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Nothing`));
  });
}



// const ImageApi = {
//     getImages: (perPage, page, search) => {
//         return fetch(API_URL + "key=" + API_KEY + OPTIONS + perPage + "&page=" + page + "&q=" + search)
//             .then(response => response.json())
//             .then(data => {
//                 return data.hits;
//             }).catch(error => {
//                 console.log(error);
//             }
//             );
//     }
    
// }




// export default ImageApi;
     