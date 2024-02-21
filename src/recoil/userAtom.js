import { atom, selector } from "recoil";
  
export const getUserInfoState = selector({
  key: 'userInfo',
  get: async() => {
    const res = await fetch('/api/user');

    if (!res.ok) {
      throw new Error(`Failed to save record. Status: ${res.status}`);
    }

    return res.json();
   
  }
})
