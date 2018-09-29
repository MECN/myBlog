//api.js
import service from './request'
// 接口1
export const getPersonInfo = data => { 
    return service({ 
        url: '/person_pay/getpersoninfo',
        method: 'post', 
        data 
        }) 
    };

