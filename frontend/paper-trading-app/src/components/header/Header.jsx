import Link from 'next/link'
import './header.scss'

const Header = () => {
  return (
    <header>
        <Link href='/' ><h1>Home</h1></Link>
        <Link href='/login' >Login</Link>
        <Link href='/dashboard' >Dashboard</Link>
        <Link href='/market-view' >Market View</Link>
        <Link href='/portfolio' >Portfolio</Link>
        <Link href='education' >Education</Link>
        <Link href='/about' >About Us</Link>
    </header>
  )
}

export default Header