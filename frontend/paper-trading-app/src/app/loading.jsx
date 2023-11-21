import styles from './page.module.css'
import Image from 'next/image'

//loading message for pages without their own login component specified??
const loading = () => {
    return (
        <>
        <h1>Loading...</h1>
        </>
    )
}

export default loading