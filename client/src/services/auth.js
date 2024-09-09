import axiosConfig from '../axiosConfig'

// truyen payload la object gom 3 truong name, pass, phone
export const apiRegister = (payload) => new Promise(async (resolve, reject) => {
    try {
        // call api de post data 
        const response = await axiosConfig({
            method: 'POST',
            url: '/api/v1/auth/register',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiLogin = (payload) => new Promise(async (resolve, reject) => {
    try {
        // call api de post data 
        const response = await axiosConfig({
            method: 'POST',
            url: '/api/v1/auth/login',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})