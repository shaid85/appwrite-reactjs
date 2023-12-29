import React, { useEffect, useState } from 'react'
import postService from '../appwrite/service'
import { Container, PostCard } from '../components'

function AllPost() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
      postService.getPostList().then((posts) => {
        if(posts){
          setPosts(posts.documents)
        }
      })
  }, [])
  
  return (
    <div className="py-8">
        <Container >
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>    
  )
}

export default AllPost