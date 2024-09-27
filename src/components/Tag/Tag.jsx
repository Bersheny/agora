import PropTypes from 'prop-types';
import './Tag.css';

export function Tag(post){
    let liste = undefined
    function tagCount(){
        const dataList = post.post.tag
        var tagList =[];
        dataList.forEach((tag) => {
            tagList.push(<div className='tag'>{tag}</div>);
        });
        liste = tagList;
    }

    tagCount();

    return(

        <section className='tagSection'>
            <span id="tagList">{liste}</span>
            <span className='tagType'>{post.post.type}</span>
        </section>

    )

}

Tag.propTypes={
    post: PropTypes.objectOf(PropTypes.array)
}