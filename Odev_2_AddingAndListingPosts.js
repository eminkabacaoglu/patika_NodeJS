const myPosts = [
    {title:"title1",author:"aut1",detail:"det1"},
]

function listPosts(){
    console.log("+++ All Posts +++")
    myPosts.map(post=>{
        console.log(`Title: ${post.title} - Author: ${post.author} - Detail: ${post.detail}`)
    })
}

function addPost(newPost){
    return new Promise((resolve,reject)=>{
        myPosts.push(newPost)
        resolve(newPost)
        //reject("Sorry!! There is an Error Occured.")
    })
    
}



async function showPosts(){
    try {
        let test=await addPost({title:"Kodlama",author:"Emin Kabacaoglu",detail:"Kodlamada yeni trendler şunlardır."})
        console.log(`*** A new post is published by ${test.author} ***`)
        listPosts() 
    } catch (error) {
        console.log("HATA: "+error)
    }
    
}

showPosts()
