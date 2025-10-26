
import Navbr from '../Navbr/Navbr';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Navbr></Navbr>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;