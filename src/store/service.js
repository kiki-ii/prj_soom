import { create } from 'zustand';
import db from '../db/data.json';

export const useServiceStore = create(set => ({
  services: [],
  setServices: services => set({ services }),
  createService: async newService => {
    if (!newService.title || !newService.descript || !newService.iconimg) {
      return { success: false, message: 'Please fill in al fields' }
    }
    
    try {
      const createService = { ...newService, id: Date.now(), createdAt: new Date().toISOString() };
      // set(state => ({ services: [...state.services, createService] }));
      set(state => {
        const newServices = [...state.services, createService];
        localStorage.setItem('services', JSON.stringify(newServices));
        return {services:newServices}
      })
      return {
        success: true,
        message: '작업이 성공적으로 추가되었습니다. ',
        data:createService
      }
      
    } catch (error) {
      console.log('Error', error);
      return {
        success: false,
        message: '작업 추가 중 오류가 발생했습니다.'
      }
    }
  },
  
  fetchServices: async () => {  
    try {
      
    set({ services: db.services || [] })
    } catch (error) {
      console.error('Error fetching works:', error)
      set({ works: [] })
    }
  },
  
  updateService: async (sid, updateService) => {
    
    if (!db.success) return { success: false, message: db.message };
    
    try {
      
      set(state => ({
        services: state.services.map(service => service.id === sid ? {...service, ...updateService, updateAt: new Date().toISOString()} : service)
      }));
      return {
        success: true,
        message: '작업이 성공적으로 추가되었습니다. ',
        data:updateService
      }
    } catch (error) {
      console.log('Error', error);
      return {
        success: false,
        message: '작업 수정 중 오류가 발생했습니다.'
      }
    }
  },
  
  deleteService: async (sid) => {
    try {
      set(state => ({ services: state.services.filter(service => service.id !== sid) }))
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

}));
// export const useServiceStore = create(set => ({
//   services: [],
//   setServices: services => set({ services }),
//   createService: async newService => {
//     if (!newService.title || !newService.descript || !newService.iconimg) {
//       return { success: false, message: 'Please fill in al fields' }
//     }
    
//     const res = await fetch('/api/services', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(newService)
//     })
//     const data = await res.json()
    
//     set(state => ({ services: [...state.services, data.data] }))

//     return { success: true, message: 'Services created successfully' }
//   },
  
//   fetchServices: async () => {
//     const res = await fetch('/api/services');
//     const data = await res.json();
    
//     set({ services: data.data })
//   },
  
//   updateService: async (sid, updateService) => {
//     const res = await fetch(`/api/services/${sid}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(updateService)
//     });
//     const data = await res.json();
//     if (!data.success) return { success: false, message: data.message };
    
//     set(state => ({
//       services: state.services.map(service => service._id === sid ? data.data : service)
//     }));
//     return { success: true, message: data.message };
//   },
  
//   deleteService: async (sid) => {
//     const res = await fetch(`/api/services/${sid}`, {
//       method: 'DELETE',
//     });
//     const data = await res.json();
    
//     if (!data.success) return { success: false, message: data.message }
    
//     set(state => ({
//       services: state.services.filter(service => service._id !== sid)
//     }));
    
//     return { success: true, message: data.message };
//   }

// }));

