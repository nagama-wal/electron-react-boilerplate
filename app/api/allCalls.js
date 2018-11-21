import axiosInstance from '.';
const {ipcRenderer} = window.require('electron')

export default function LoginApi (data) {
    let token
    ipcRenderer.send('requestToken', true)
    ipcRenderer.on('token', (e, data) => {
        token = data
    })
    return axiosInstance ({
        method : 'get',
        url : '/calls/list',
        headers : {
            Authorization : token
        }
    })
}