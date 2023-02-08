import Trending from './Trending';
import Random from './Random';
import Search from './Search';
import LoadMore from './LoadMore';

function Content({heroSection, headerData, link, randomImage, array1, array2, setGif, plusten}) {
    return(
        <div>
            {headerData.search.length > 0 
            ?
            <div id='content' style={{paddingTop: !heroSection ? "81px" : "0px"}}>
            <Search 
            search = {headerData.search} 
            link = {link}
            setGif = {setGif}>
            </Search>
            </div>
            : 
            <div id='content' style={{paddingTop: !heroSection ? "81px" : "0px"}}>
                <Random 
                randomImage = {randomImage}
                array = {array1}
                setGif = {setGif}/>
                <Trending 
                array = {array2}
                setGif = {setGif}/>
            </div>
            }
            <LoadMore 
            plusten = {plusten} 
            search = {headerData.search} 
            rating = {headerData.rating} 
            setGif = {setGif}
            link={link}
            />
        </div>
    );
}

export default Content