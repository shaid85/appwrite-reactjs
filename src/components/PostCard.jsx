import React from 'react'
import { Link } from 'react-router-dom'
import postService from '../appwrite/service'

function PostCard({$id, title, featuredimage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className="w-full border rounded-xl p-4">
            <div className="w-full justify-center mb-4">
                <img src={postService.getfilePreview(featuredimage)} alt={title} />
            </div>
            <h2 className="text-xl font-bold">{title}</h2>
        </div>
    </Link>

  )
}

export default PostCard