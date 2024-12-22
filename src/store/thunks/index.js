


// 시간지연 (개발)
export const pause = (duration) =>{
    return new Promise((resolve) =>{
        setTimeout(resolve, duration);
    })
};

export const DOMAIN = `http://localhost:3005`;


export * from "./fetchUsers";
export * from "./addUser";
export * from "./removeUser";
