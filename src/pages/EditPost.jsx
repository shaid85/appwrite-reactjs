import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import postService from '../appwrite/service'
import { Container, PostForm } from '../components'

function EditPost() {
    const [post, setPost] = useState(null)
    const navigate = useNavigate()
    const {slug} = useParams()

    useEffect(() => {
          if(slug){
            postService.getPost(slug).then((post) => {
                if(post){
                    setPost(post)
                }
            })
          } else {
            navigate("/")
          } 
    }, [post,navigate])
    
  return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}

export default EditPost