import React from "react"
import Article from "./Article"

function ArticleList({posts}){
    console.log(posts)
    const blogPosts= posts.map(blog=>{
        return( <Article 
        key={blog.id} 
        title={blog.title} 
        date={blog.date} 
        preview={blog.preview}/>
        )
    })
    
    return(
        <main>
            {blogPosts}
        </main>
    )
}

export default ArticleList

