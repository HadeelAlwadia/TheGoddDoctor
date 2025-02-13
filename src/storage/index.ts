
// Function to store a value in localStorage
function storeInLocalStorage(key:string, value:string|object) {
    // Ensure the value is converted to a string (if it's not already)
      localStorage.setItem(key, typeof value!=='string'?JSON.stringify(value):value);
}


// Function to retrieve a value from localStorage
function getFromLocalStorage(key:string) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null ; // Return parsed value or null if not found
}

// Function to remove a value from localStorage
function removeFromLocalStorage(key:string) {
    const value = localStorage.getItem(key);
    
     value ? localStorage.removeItem(key):null 
     // Return parsed value or null if not found
}


let userInfo=getFromLocalStorage('userInfo')?getFromLocalStorage('userInfo'):{id:'',name:'',role:''}

  
export {
    getFromLocalStorage,
    storeInLocalStorage,
    removeFromLocalStorage,
    userInfo
}
