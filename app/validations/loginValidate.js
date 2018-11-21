function loginValidation (event) {
    let data = {}
    if(event.username.value.length === 0) {
        data = Object.assign(data, {
            username : Object.assign({
                error : 'Username/ E-mail Id is required',
                showError : true,
                value : event.username.value
            })
        })
    }
    if(event.password.value.length < 5) {
        data = Object.assign(data, {
            password : Object.assign({
                error : 'Password should not be less than length of 5',
                showError : true,
                value : event.password.value
            })
        })
    }
    if(event.password.value.length === 0) {
        data = Object.assign(data, {
            password : Object.assign({
                error : 'Password is required',
                showError : true,
                value : event.password.value
            })
        })
    }
    if(event.username.value.length > 0) {
        data = Object.assign(data, {
            username : Object.assign({
                error : '',
                showError : false,
                value : event.username.value
            }),
        })
    }
    if(event.password.value.length > 5) {
        data = Object.assign(data, {
            password : Object.assign({
                error : '',
                showError : false,
                value : event.password.value
            }),
        })
    }
    return data
}

export default loginValidation