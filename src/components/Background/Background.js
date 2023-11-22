import './Background.css';
import background__mobile from '../../image/background__mobile.png';
import background__desktop from '../../image/background__desktop.png';

function Background() {
    return (
        <div className="background">
            <img className='background__mobile' src={background__mobile} alt='background' />
            <img className='background__desktop' src={background__desktop} alt='background' />
        </div>
    );
}

export default Background;
