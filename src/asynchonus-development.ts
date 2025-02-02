async function fetchAll(URL_адреса: string[]): Promise<ЗапросРезультат[]> {
  const запросы = URL_адреса.map(async (url) => {
    try {
      const response = await fetch(url);
      const данные = await response.json();
      return { данные, статус: response.status };
    } catch (error) {
      return { данные: null, статус: 500 }; // Ошибка сервера
    }
  });// Write a function that accepts an array of URLs,
return Promise.all(запросы);
}
const URL_адреса = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2'
];

fetchAll(URL_адреса).then((результаты) => console.log(результаты));// makes parallel queries for each of them, and returns an
type RequestsResult = {
    data: any,
    status: number
}

async function fetchAll(urls: string[]): Promise<RequestsResult[]> {
    //Your code goes here
    return [];
}

module.exports = { fetchAll };
