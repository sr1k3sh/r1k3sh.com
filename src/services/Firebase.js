import * as firebase from 'firebase'

export const init=()=>{
    var config = {
        apiKey: 'AIzaSyAo9d9--HoQFWScn1w7tpQuKuphg8wSe3c',
        authDomain:'projectId.firebaseapp.com',
        databaseURL:'https://dataset-16616.firebaseio.com/',
        stroageBucket:'bucket.appspot.com',
    }
    firebase.initializeApp(config)
    return firebase.database();
    
}
export const writeData = (firebase,tablename,id,json)=>firebase.ref(tablename+'/'+id).set(json)

export const readData = (firebase,tablename,callback)=>{
    return new Promise((resolve,reject)=>{
        let ref=firebase.ref(tablename+'/')
        resolve(ref.on('value',callback))
    })
}