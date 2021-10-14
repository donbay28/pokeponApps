import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function Splash(){
    const router = useRouter()
    setTimeout( () => {
        router.push('./mainMenu')
     },3000);
     return (
        <div className={styles.container}>
            <Image src="/pokemon.svg" alt="Pokeball Logo" width={100} height={200} />
        </div>
     )
}

export default Splash