import PropTypes from 'prop-types';

export function Title(post){
    return(
        <section className='title'>
            <h1>{post.post.title}</h1>
            <p>{post.post.author}</p>
        </section>
    )    
}

Title.propTypes={
    post: PropTypes.arrayOf(PropTypes.string)
}