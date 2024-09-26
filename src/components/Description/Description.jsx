import PropTypes from 'prop-types';

//<Description post={fetchData}/>

export function Description(post){
    console.log(post)
    return(
        <section className='description'>
            <h2>Description</h2>
            <p>{post.post}</p>
        </section>
    )    
}

Description.propTypes={
    post: PropTypes.string
}