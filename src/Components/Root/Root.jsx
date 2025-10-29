

import Footer from '../Footer/Footer';
import Navbr from '../Navbr/Navbr';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='bg-linear-to-b from-[#0a192f] to-[#020617] min-h-screen'>
            <Navbr></Navbr>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;