import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import useShopping from 'hooks/useShopping'
import { SpinnerImage } from 'components';

export const Header = () => {
  const { config, loader } = useShopping();
  const { logo } = config[0] || [];

  return (
    <header className='w-full h-20 flex items-center justify-center'>
      <div className='w-full px-10 xl:px-0 xl:w-[1200px] py-2 h-full flex justify-between items-center overflow-hidden'>
        <Link to="/">
          {
            loader ? <SpinnerImage/> : <img src={logo ? logo : "/images/logo-header.png"} alt="Logo Leugims" className='w-32 rounded-lg object-cover' />
          }
        </Link>
        <nav className='flex items-center gap-3'>
          <div>
            <Link>Inicio</Link>
            <Link>Nosotros</Link>
            <Link>Productos</Link>
          </div>
          <button>
            
          </button>
        </nav>
      </div>
    </header>
  )
}
