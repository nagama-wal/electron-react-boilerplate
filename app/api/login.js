import axiosInstance from '.';

export default function LoginApi (data) {
    let dataTosend = {
        username : data.username.value,
        password : data.password.value,
    }
    return axiosInstance ({
        method : 'post',
        url : '/login/',
        data : dataTosend
    })
}