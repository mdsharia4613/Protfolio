
import Footer from '../Footer/footer';
import Navbr from '../Navbr/Navbr';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Navbr></Navbr>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;