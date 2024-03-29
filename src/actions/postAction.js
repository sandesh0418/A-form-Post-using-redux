import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch =>{

    
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(post => dispatch({
                type: FETCH_POSTS,
                payload: post
            }));
    
}


export const createPost = (postData) => dispatch =>{

    
    fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        
    })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        }));
    

}