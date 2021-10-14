import styles from '../../styles/Home.module.css'

export default function detailPokemon({ name,sprites,stats }) {
    return (
            <div className={styles.container2}>
                <div className={styles.kotak}>
                    <img className={styles.pictureDetail} src={sprites.front_default} alt="Pokemon Picture" width={140} height={140} />  
                    <h2 className={styles.nameDetail}>{name}</h2>
                </div>
                {
                }
            </div>
    )
}
export async function getServerSideProps(req,res) {
    let query = req.query
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon/'+query.id)
    const dataPokemon = await resp.json()
    return {
        props: {
            name    : await dataPokemon.forms[0].name,
            sprites : await dataPokemon.sprites,
            stats   : await dataPokemon.stats,
        },
    }
}