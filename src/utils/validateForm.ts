const validateForm = (values: any) => {
    let errors: any ={}
    Object.keys(values).forEach(key=>{

if(values[key]===''){
    errors[key]=`${key} is require`
}else{
    switch (key) {
        case 'password':values.password.length<=3?errors[key]='password must more 5 char':''
            
            break;

            case 'time':{
                const  hour=values.time.split(':')[0]
            if(hour>17){
            errors[key]='time must before 5BM'
            }
            if(hour<8){
             errors[key]='time must after 8AM'
            }
            }

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