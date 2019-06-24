import React from 'react';
import './header.css';
import {OrderDelivery} from "../order-delivery/order-delivery.jsx";
import {PersonalAreaBar} from "../personal-area-bar/personal-area-bar";

export function Header() {
    return (<header className="header">
        <div className="header__wrapper">
            <div className="header__logo--wrapper">
                <a className="header__logo" href="javascript: void(0)"/>
            </div>
            <OrderDelivery/>
            <PersonalAreaBar/>
        </div>
    </header>)

};