"use client"

export const addUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
}


export const getUser = () => {
  const data = localStorage.getItem('user');
  return data === null ? null : JSON.parse(data);
}

export const clearAll = () => {
  localStorage.clear(); // Clear all data from the local storage
}