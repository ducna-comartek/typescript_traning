function pickObjectKeys(obj, keys){
    let result ={}
    for(const key of keys){
        if(key in obj){
            result[key] = obj[key]
        }
    }
    return result
}

const language = {
    name : 'Typescript',
    age : 9,
    extension : ['ts', 'tsx']
}

const ageAndExtension = pickObjectKeys(language, ['age', 'name'])
console.log(ageAndExtension)