import { useEffect, useState } from 'react'
import axios from 'axios';
import data from './db/data.json'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // const apiUrl = import.meta.env.PROD 
    // ? process.env.PUBLIC_URL + '/db/data.json'  // './db/data.json'  - 프로덕션: 정적 파일
    //   : 'http://localhost:3001/posts';  // 개발: JSON Server
    axios.get(data)
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // Fallback 데이터 로드 (옵션) : API 실패 시 로컬 JSON 파일 자동 로드
      });
    
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Dummy DB</h1>
      
      <ul>
        {data.posts.map(post => (
          <li key={post.id}>
            {post.title} - by {post.author}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
