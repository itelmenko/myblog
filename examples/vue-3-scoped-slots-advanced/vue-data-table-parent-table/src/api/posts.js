import axios from 'axios'

export async function getPosts(params) {
  return await axios.get('https://jsonplaceholder.typicode.com/posts', { params })
}
