import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg'
import {ButtonContainer} from './Button';
import styled from 'styled-components';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="store"
                    className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Produk
                        </Link>
                    </li>
                </ul>
                <Link to="/keranjang" className="ml-auto">
                    <ButtonContainer>
                        Keranjang
                    </ButtonContainer>
                </Link>
                <Link to="/kritik" className="ml-auto">
                    <ButtonContainer>
                        Kritik
                    </ButtonContainer>
                </Link>
                <Link to="/infocovid19" className="ml-2">
                    <ButtonContainer>
                        Info Covid-19 Terkini
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background: var(--darkModerateBlue) !important;
    .nav-link {
        color: var(--veryLight) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;