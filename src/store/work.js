import { create } from 'zustand';
import db from '../db/data.json';
// import axios from 'axios';
// import { data } from 'react-router-dom';

export const useWorkStore = create(set => ({
  works: [],
  setWorks: works => set({ works }),
  createWork: async newWork => {
    if (!newWork.title || !newWork.descript || !newWork.thumb) {
      return { success: false, message: 'Please fill in all fields' };
    }
    
    // NOTE: 백엔드 API 사용시 
    // const res = await fetch(db, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //     //'Content-Type': 'multipart/form-data'
    //   },
    //   body: JSON.stringify(newWork)
    // })
    // const data = await res.json();
    // set(state => ({ works: [...state.works, data.data] }));
    
    try {
      const createdWork = {...newWork, id:Date.now(), createdAt:new Date().toISOString()}
      
      // set(state => ({ works: [...state.works, createdWork] }));
      // 상태 변경시 localStorage에 저장
      set(state => {
        const newWorks = [...state.works, createdWork];
        localStorage.setItem('works', JSON.stringify(newWorks))
        return {works:newWorks}
      })
      
      return {
        success: true,
        message: '작업이 성공적으로 추가되었습니다. ',
        data:createdWork
      }
      
    } catch (error) {
      console.log('Error', error);
      return {
        success: false,
        message: '작업 추가 중 오류가 발생했습니다.'
      }
      
    }

  },

  fetchWorks: async () => {
    // const res = await fetch(db);
    // const data = await res.json();
    try {
      // Case 1: 로컬 JSON 파일을 직접 사용할 경우
      set({ works: db.works || [] });
      
      // Case 2: 실제 API 엔드포인트에서 데이터를 가져올 경우
      // const response = await axios.get('https://api.example.com/works')
      // set({ works: response.data })
      
    } catch (error) {
      console.error('Error fetching works:', error)
      set({ works: [] })
    }
  },
  
  updateWork: async (wid, updateWork) => {
    // NOTE: 백엔드 API 사용시
    // const res = await fetch(`/api/works/${wid}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(updateWork)
    // });
    // const data = await res.json();
    // if (!data.success) return { success: false, message: data.message };
    
    // set(state => ({
    //   works: state.works.map(work => work._id === wid ? data.data : work)
    // }));
    // return { success: true, message: data.message };
    
    // axios 사용.
    // const res = await axios.put(`/api/works/${wid}`, updateWork);
    // set(state => ({ works: state.works.map(work => work.id === wid ? res.data : work) }));
    

    // NOTE: 로컬 JSON 데이터 사용시 
    if (!updateWork.title || !updateWork.descript || !updateWork.thumb) {
      return { success: false, message: '모든 필드를 채워주세요' };
    }
    
    try {
      set(state => ({
        works: state.works.map(work => work.id === wid ? {...work, ...updateWork, updatedAt: new Date().toISOString()} : work)
      }))
      return {
        success: true,
        message: '작업이 성공적으로 추가되었습니다. ',
        data:updateWork
      }
      
    } catch (error) {
      console.log('Error', error);
      return {
        success: false,
        message: '작업 수정 중 오류가 발생했습니다.'
      }
      
    }


  },
  
  deleteWork: async (wid) => {
    
    // NOTE: 백엔드 API 사용시
    // const res = await fetch(`/api/works/${wid}`, {
    //   method: 'DELETE',
    // });
    // const data = await res.json();
    // if (!data.success) return { success: false, message: data.message };
    // set(state => ({
    //   works: state.works.filter(work => work._id !== wid)
    // }));
    
    // return { success: true, message: data.message };
    
    // NOTE: 로컬 JSON 데이터 사용시 
    try {
      set(state => ({ works: state.works.filter(work => work.id !== wid) }))
      return {
        success: true,
        message: '작업이 성공적으로 추가되었습니다. ',
      }
    } catch (error) {
      console.log('Error', error);
      return {
        success: false,
        message: '작업 삭제 중 오류가 발생했습니다.'
      }
    }
  }
  

}))

