

 const searchUser = (input, data) => {
    let result = data.filter((data)=>{
        let name = data.name.toUpperCase();

        return ( name.includes(input.toUpperCase()) )
            
  

    })
    return result
}

const searchBlog =   (input, data) => {
    let result = []

    for(let x in data) {
        let title = data[x].title.toUpperCase();

        if( title.includes(input.toUpperCase()) ) {
            result.push(data[x])
        }
    }
    return result

}

const SearchData = (input, isblog, data) => {

    if(isblog) {
        let filtereddata =  searchBlog(input,data);
        return filtereddata;

    }else{
        let filtereddata =  searchUser(input,data);
        return filtereddata;
    }
}


export default SearchData;