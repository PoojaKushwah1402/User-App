
const ValidateUser = (input, users) => {
    console.log(input, users )
    for(let x in users) {
        if(users[x].email === input.email && users[x].username === input.password) {
            return users[x].name;
        }
    }

    return false
}


export default ValidateUser;