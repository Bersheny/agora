import Banner from '../components/banner/Banner.jsx';
import { Description } from "../components/Description/Description";
import { Gallery } from "../components/gallery/Gallery";
import { Inscription } from "../components/Inscription/Inscription";
import Navbar from '../components/navbar/Navbar.jsx';
import { Tag } from "../components/Tag/Tag";
import { Title } from "../components/Title/Title";

export function Post(){
    const fetchData = {
                "title": "Lecture en groupe",
                "text": "On se fait un club ? Qui pour de la SF ?",
                "media": ["https://www.babelio.com/couv/CVT_Apprendre-si-par-bonheur_7203.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYIIZqNzpzeDgOxCBqDmg5tp1SzWhLEGy9sg&s"],
                "date_time_creation": "2024-09-12T17:34:00.000Z",
                "tag": ['Lecture','Science Fiction'],
                "type": "Forum",
                "user_id": 2,
                "author": 'John Doe',
                "numberOfPeople": 5,
                "placeRemaining": 2
    };
    

    return(
        <div>
            <Banner/>
            <Title post={fetchData}/>
            <Tag post={fetchData}/>
            <Description post={fetchData.text}/>
            <Gallery medias={fetchData.media}/>
            <Inscription post={fetchData}/>
            <Navbar/>
        </div>
    )
}
