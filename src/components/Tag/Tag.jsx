import PropTypes from 'prop-types';

export function Tag(post){
    console.log(post.post.tag)
    let liste = undefined
    function tagCount(){
        const dataList = post.post.tag
        var tagList =[];
        dataList.forEach((tag) => {
            tagList.push(<div>{tag}</div>);
        });
        liste = tagList;
    }

    tagCount();
    
    return(
        
        <section className='tag'>
            <span id="list">{liste}</span>
            <span>{post.post.type}</span>
        </section>
         
    )
     
}

Tag.propTypes={
    post: PropTypes.objectOf(PropTypes.array)
}