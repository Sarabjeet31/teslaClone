/* eslint-disable react/prop-types */
import React,{ useState } from 'react'
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'

import CloseIcon from '@mui/icons-material/Close'
import { BurgerNav, CloseWrapper, Content, Content1, Wrapper } from './style';

const Header = ({ textColor }) => {

  const [open,setOpen] = useState(false);

  return (
    <>
    <Wrapper>
      <div className='logo' >
      <Link to='/'>
        {textColor === 'white' ? <img src='/images/logoW.svg' alt='logo'/> : <img src='/images/logo.svg' alt='logo'/>}
        
      </Link>
      </div>
      <Content textColor={ textColor }>
        <Link to='/model-s'>Model S</Link>
        <Link to='/model-3'>Model 3</Link>
        <Link to='/model-x'>Model X</Link>
        <Link to='/model-y'>Model Y</Link>
        <Link to='#'>Solar Roof</Link>
        <Link to='#'>Solar Panels</Link>
      </Content>
      <Content1 textColor={ textColor }>
        <a href='#' className='none' >Shop</a>
        <a href='#' className='none'>Account</a>
        <a href='#' onClick={()=> setOpen(true)} ><MenuIcon style={textColor === 'white' ? { fill: 'white' } : {}}/></a>
      </Content1>      
      <BurgerNav show={open}>
        <CloseWrapper>
          <CloseIcon className='close' onClick={() => setOpen(false)}/>
        </CloseWrapper>
          <li className='half'><Link to='/model-s' onClick={ () => setOpen(false) }>Model S</Link></li>
          <li className='half'><Link to='/model-3' onClick={ () => setOpen(false) }>Model 3</Link></li>
          <li className='half'><Link to='/model-x' onClick={ () => setOpen(false) }>Model X</Link></li>
          <li className='half'><Link to='/model-y' onClick={ () => setOpen(false) }>Model Y</Link></li>
          <li className='half'><a href="#">Solar Roof</a></li>
          <li className='half'><a href="#">Solar Panels</a></li>
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Used Inventory</a></li>
          <li><a href="#">Trade-In</a></li>
          <li><a href="#">Cybertruck</a></li>
          <li><a href="#">Roadster</a></li>
          <li><a href="#">Semi</a></li>
          <li><a href="#">Charging</a></li>
          <li><a href="#">Powerwall</a></li>
          <li><a href="#">Commercial Energy</a></li>
          <li><a href="#">Utilities</a></li>
          <li><a href="#">Find Us</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li className='quarter' ><a href="#">Shop</a></li>
          <li className='quarter'><a href="#">Account</a></li>
      </BurgerNav>
    </Wrapper>
    </>
  )
}

export default Header