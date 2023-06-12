import logo from '../../logo.svg';
import '../../App.css';

export default function Image({logoName, className, infos}) {
    return (
        <>
            <img src={logoName} className={className} alt={infos} />
        </>
    );
}
