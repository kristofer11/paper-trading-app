import styles from './page.module.scss'
import Link from 'next/link'


export default function RootLayout({ children }) {
    return (
        <div>
            <h1 class={styles.title}>Education Section Layout</h1>
            <div className={styles.educationLinks}>
                <Link href='/education/article1' >Article 1</Link>
                <Link href='/education/article2' >Article 2</Link>
                <Link href='/education/article3' >Article 3</Link>
                <Link href='/education/article4' >Article 4</Link>
            </div>
            {children}
        </div>
    )
}