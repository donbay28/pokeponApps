import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { Button } from "@material-ui/core";
import { useState } from 'react';
import Progressbar from '../../component/progress_bar';

export default function detailPokemon({ name,sprites,stats,species,type,evo,abilities,weaknes,habitat,capture,breed}) {
    let [showDetailStat, setShowStat] = useState(false);
    let [showDetailEvo, setShowEvo] = useState(false);
    function showStat(){
        setShowStat(true);
        setShowEvo(false);
    }
    function showEvolve(){
        setShowStat(false);
        setShowEvo(true);
    }

    function hideEvolve(){
        setShowEvo(false);
    }
    function hideStat(){
        setShowStat(false);
    }
    return (
            <div className={styles.container2}>
                <div className={styles.kotak}>
                    <img className={styles.pictureDetail} src={sprites.front_default} alt="Pokemon Picture" width={140} height={140} />  
                    <p className={styles.nameDetail}>{name}</p>
                    <p>{species}</p>
                </div>
                <div>
                    <div className={styles.buttonInfo}>
                        <Button onClick={showStat} onDoubleClick = {hideStat}>Stats</Button>
                    </div>
                    <div className={styles.buttonInfo}>
                        <Button onClick={showEvolve} onDoubleClick = {hideEvolve}>Evolution</Button>
                    </div>
                </div>
                {
                    showDetailStat ? (
                        <div className={styles.container3}>
                            <div className={styles.stat}>
                                <Progressbar text={stats[0].stat.name} bgcolor="#99ccff" progress={stats[0].base_stat}  height={30} />
                                <Progressbar text={stats[1].stat.name} bgcolor="#99ccff" progress={stats[1].base_stat}  height={30} />
                                <Progressbar text={stats[2].stat.name} bgcolor="#99ccff" progress={stats[2].base_stat}  height={30} />
                                <Progressbar text={stats[3].stat.name} bgcolor="#99ccff" progress={stats[3].base_stat}  height={30} />
                                <Progressbar text={stats[4].stat.name} bgcolor="#99ccff" progress={stats[4].base_stat}  height={30} />
                                <Progressbar text={stats[5].stat.name} bgcolor="#99ccff" progress={stats[5].base_stat}  height={30} />
                            </div>
                            <h3 className={styles.textCenter}>Weaknes</h3>
                            <div className={styles.weaknes}>
                            <style jsx global>{`
                                table {
                                    border: 1px solid #ccc;
                                    border-collapse: collapse;
                                    margin: auto;
                                    padding: 0;
                                    width: 90%;
                                    table-layout: fixed;
                                  }
                                  
                                  table tr {
                                    background-color: #f8f8f8;
                                    border: 1px solid #ddd;
                                    padding: .35em;
                                  }
                                  
                                  table th,
                                  table td {
                                    padding: .625em;
                                    text-align: center;
                                  }
                                  
                                  table th {
                                    font-size: .85em;
                                    letter-spacing: .1em;
                                    text-transform: uppercase;
                                  }
                            `}</style>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Double Damage From</td>
                                            {weaknes.double_damage_from.map((item, key) =>  
                                                <td key={++key}>{item.name}</td>
                                            )}
                                        </tr>
                                        <tr>
                                            <td>Double Damage To</td>
                                            {weaknes.double_damage_to.map((item, key) => 
                                                <td key={++key}>{item.name}</td>
                                            )}
                                        </tr>
                                        <tr>
                                            <td>Half Damage Form</td>
                                            {weaknes.half_damage_to.map((item, key) =>  
                                                <td key={++key}>{item.name}</td>
                                            )}
                                        </tr>
                                        <tr>
                                            <td>Half Damage To</td>
                                            {weaknes.half_damage_from.map((item, key) => 
                                                <td key={++key}>{item.name}</td>
                                            )}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <h3 className={styles.textCenter}>Abilities</h3>
                            <div className={styles.abilities}>
                                <p className={styles.colorBlue}>{abilities[0].name}</p>
                                <p>{abilities[0].desc[3].flavor_text}</p>
                                <p className={styles.colorBlue}>{abilities[1].name}</p>
                                <p>{abilities[1].desc[1].flavor_text}</p>
                            </div>
                            <h3 className={styles.textCenter}>Breeding</h3>
                            <div className={styles.breeding}>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Egg Group</td>
                                            <td>Hatch Time</td>
                                            <td>Gender</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{breed.egg_groups[0] ? breed.egg_groups[0].name : ''}</td>
                                            <td>{breed.hatch_counter * 255 + " step"}</td>
                                            <td className={styles.pink}>
                                            {
                                                breed.gender_rate == 0 ? (
                                                    '0.0%'
                                                ) : breed.gender_rate == 1 ? (
                                                    '12.5%'
                                                ) : breed.gender_rate <= 3 ? (
                                                    '25.0%'
                                                ) : breed.gender_rate <= 7 ? (
                                                    '50.0%'
                                                ) : breed.gender_rate <= 11 ? (
                                                    '75.0%'
                                                ) : (
                                                    '100.0%'
                                                )
                                            }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{breed.egg_groups[1] ? breed.egg_groups[1].name : null}</td>
                                            <td>{breed.hatch_counter + " cycle"}</td>
                                            <td className={styles.blue}>
                                            {
                                                breed.gender_rate == 0 ? (
                                                    '100.0%'
                                                ) : breed.gender_rate == 1 ? (
                                                    '87.5%'
                                                ) : breed.gender_rate <= 3 ? (
                                                    '75.0%'
                                                ) : breed.gender_rate <= 7 ? (
                                                    '50.0%'
                                                ) : breed.gender_rate <= 11 ? (
                                                    '25.0%'
                                                ) : (
                                                    '0.0%'
                                                )
                                            }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <h3 className={styles.textCenter}>Capture</h3>
                            <div className={styles.capture}>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Habitat</td>
                                            <td>Generation</td>
                                            <td>Capture Rate</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{habitat}</td>
                                            <td>Generation 1</td>
                                            <td>{capture}%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <h3 className={styles.textCenter}>Sprites</h3>
                            <div className={styles.inlineBlock}>
                                <span>Normal</span>
                                <img className={styles.pic} src={sprites.front_default} alt="Pokemon Picture" width={200} height={200} />
                                <span className={styles.shiny}>Shiny</span>
                                <img className={styles.pic2} src={sprites.front_shiny} alt="Pokemon Picture" width={200} height={200} />  
                            </div>
                        </div>
                        
                    ) : showDetailEvo ? (
                        <div className={styles.kotak2}>
                            <div className={styles.inline}>
                                <img src={evo[0].pict} alt="Pokemon Picture" width={100} height={100} />  
                                <div className={styles.line}></div>
                                <h5> Lv. {evo[1].min_level}</h5>
                                <img className={styles.pullRight} src={evo[1].pict} alt="Pokemon Picture" width={100} height={100} /> 
                            </div>
                            {'\n'}
                            <div className={styles.inline}>
                                <img src={evo[1].pict} alt="Pokemon Picture" width={100} height={100} />  
                                <div className={styles.line}></div>
                                <h5> Lv. {evo[2].min_level}</h5>
                                <img className={styles.pullRight} src={evo[2].pict} alt="Pokemon Picture" width={100} height={100} />  
                            </div>
                        </div>
                    ) : (
                        ''
                    )
                }
            </div>
    )
}
export async function getServerSideProps(req,res) {
    let query = req.query
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon/'+query.id)
    const dataPokemon = await resp.json();

    const species = await fetch('https://pokeapi.co/api/v2/pokemon-species/'+query.id)
    const dataSpecies = await species.json();
    
    const type = await fetch(dataPokemon.types[0].type.url);
    const dataType = await type.json();

    const evo = await fetch(dataSpecies.evolution_chain.url);
    const dataEvo = await evo.json();
    
    let dataSkill = dataPokemon.abilities;
    let dataAbilities = new Array();
    
    for(let i = 0; i <dataSkill.length; i++){
        const skill = await fetch(dataSkill[i].ability.url)
        const dataAbiliti = await skill.json();
        dataAbilities.push({
            name : dataAbiliti.name,
            desc : dataAbiliti.flavor_text_entries
        })
    }

    let evoChain = new Array();
    let evoData = dataEvo.chain;
    
    if(evoData['evolves_to']){
        for(let i = 1; i <=3; i++){
            let evoDetails = evoData['evolution_details'][0];
            
            const pict = await fetch('https://pokeapi.co/api/v2/pokemon/'+evoData.species.name)
            const dataPictEvo = await pict.json();
            evoChain.push({
                "species_name": evoData.species.name,
                "min_level": !evoDetails ? null : evoDetails.min_level,
                "trigger_name": !evoDetails ? null :  evoDetails.trigger.name,
                "pict" : dataPictEvo.sprites.front_default,
                "evolve" : evoData['evolves_to']
            });        
            evoData = evoData['evolves_to'][0];
        }
    }
    return {
        props: {
            name      : await dataPokemon.forms[0].name,
            sprites   : await dataPokemon.sprites,
            stats     : await dataPokemon.stats,
            species   : await dataSpecies.flavor_text_entries[6].flavor_text,
            type      : dataPokemon.types.map((item)=> item.type),
            evo       : await evoChain,
            abilities : await dataAbilities,
            weaknes   : await dataType.damage_relations,
            habitat   : await dataSpecies.habitat.name,
            capture   : await dataSpecies.capture_rate,
            breed     : await dataSpecies
        },
    }
}