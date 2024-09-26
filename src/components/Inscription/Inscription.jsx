import PropTypes from 'prop-types';

export function Inscription(post){
    if (post.post.placeRemaining > 0){
        return(
            <section>
                <p>Nombre de Places: {post.post.numberOfPeople}</p>
                <div>Inscrivez-Vous!</div>
            </section>
        )
    }else {
        return(
            <section>
                <p>Nombre de Places: {post.post.numberOfPeople}</p>
                <div>Il n'y a plus de places pour l'instant!</div>
            </section>
        )
    }
    
};

Inscription.propTypes={
    post: PropTypes.arrayOf(PropTypes.string)
}