import React, {useEffect,useState} from 'react'
import { Container,PostForm } from '../components'
import configService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post, setPost] = useState([])
    const {slug} =useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug){
            configService.getPost(slug).then((res)=>{
                if(res){
                    setPost(res)
                }
            })
        }else{
            navigate('/')
        }
    },[])

    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}

export default EditPost
