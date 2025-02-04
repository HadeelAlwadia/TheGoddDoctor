const validateForm = (values: any) => {
    let errors: any ={}
    Object.keys(values).forEach(key=>{

if(values[key]===''){
    errors[key]=`${key} is require`
}else{
    switch (key) {
        case 'password':values[key].length<=3?errors[key]='password must more 5 char':''
            
            break;
    
        default:
            break;
    }
}


    
})


   
    return errors
}

export {
    validateForm
}