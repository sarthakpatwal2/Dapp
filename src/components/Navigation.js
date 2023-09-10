import { ethers } from 'ethers';
import React from 'react'

const Navigation = ({ account, setAccount }) => {
    const connectHandler = async() =>{
        const accounts= await window.ethereum.request({method :'eth_requestAccounts'});
        const account= ethers.utils.getAddress(accounts[0])
        setAccount(account)
    }

    return (
        <nav>
            <div className='nav__brand'>
                <h1>Dappazon</h1>
            </div>

            <input
            type='text'
            className='nav__search'
            />
            
            {account?(
                <button
                type='button'
                className='nav__connect'
                >
                    {account.slice(0, 6)}
                </button>
            ) : (
                <button
                type='button'
                className='nav__connect'
                onClick={connectHandler}
                >
                    Connect
                </button>
            )}

            <ul className='nav__links'>
                <li><a href="#Clothing and Jewelry">Clothing and Jewelry</a></li>
                <li><a href="#Electronics and Gadgets">Electronics and Gadgets</a></li>
                <li><a href="#Toys and Gaming">Toys and Gaming</a></li>
            </ul>




        </nav>
    );
}

export default Navigation;