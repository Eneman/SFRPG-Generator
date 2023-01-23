import react from 'react';
import logo from '../assets/logo.svg';

export default class Footer extends react.Component {
    render(): react.ReactNode {
        return (
            <div className=" absolute bottom-0 h-24 w-full flex-none bg-slate-700 text-white">
                <img src={logo} alt="logo" className="h-24" />
            </div>
        );
    }
}
