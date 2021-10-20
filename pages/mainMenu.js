import styles from '../styles/Home.module.css'
import Link from 'next/link'

function mainMenu({pokemon}){
    return (
        <div className={styles.container}>
            <div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <td>Image</td>
                            <td>Name</td>
                            <td>Type</td>
                        </tr>
                    </thead>
                {
                    pokemon.map((item,idx) => (
                        <tbody>
                            <Link href={`/mainMenu/${++idx}`}>
                            <tr className={styles.trStyleHover}>
                                <td><img className={styles.picture} src={item.picture} alt="Pokemon Picture" width={140} height={140} /></td>
                                <td><p key={++idx}>{item.name}</p></td>
                                <td><p>{item.type.map((poke) => poke.name).join(', ')}</p></td>
                            </tr>
                            </Link>
                        </tbody>
                    ))
                }
        
                </table>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const result = await res.json()

    const data = result.results.map(async (item,idx) => {
        ++idx;
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/'+idx)
        const dataImage = await resp.json()
        let dataTypes = dataImage.types.map((item) => {
            return {
                type : item.name
            }
        })
        return {
            name : dataImage.name,
            type : dataImage.types.map((item)=> item.type),
            picture : dataImage.sprites.front_default
        }
    })
    return {
        props: {
          pokemon: await Promise.all(data),
        },
      }
  }
  

export default mainMenu