import {useState, useEffect} from 'react';
import Card from './Card';
const Archetypes = () => {
    const archetypes = ['@Ignister','A.I.','ABC','Abhyss','Abyss Actor','Adamancipator','Aesir','Aether','Alien','Alligator','Allure Queen','Ally of Justice','Altergeist','Amazement','Amazoness','Amorphage','Ancient Gear','Ancient Warriors','Angel','Anti','Apoqliphort','Appliancer','Aquaactress','Arcana Force','Archfiend','Armed Dragon','Aroma','Artifact','Assault Mode','Atlantean','B.E.S.','Bamboo Sword','Barbaros','Batteryman','Battleguard','Battlewasp',"Battlin' Boxer",'Black Luster Soldier','Blackwing','Blaze Accelerator','Blue-Eyes','Bonding','Book of','Boot-Up','Borrel','Bounzer','Bujin','Burning Abyss','Butterfly','Butterspy','Cataclysmic','Celtic Guard','Chaos','Chaos Phantom','Charmer','Chemicritter','Chronomaly','Chrysalis','Cipher','Clear Wing','Cloudian','Code Talker','Codebreaker','Constellar','Crusadia','Crystal Beast','Crystron','Cubic','Cupid','CXyz','Cyber','Cyber Angel','Cyber Dragon','Cyberdark','D.D.','D/D','Danger!','Dark Contract','Dark Magician','Dark Scorpion','Dark World','Darklord','Deep Sea','Demise','Deskbot','Despia','Destiny HERO','Destruction Sword','Dice','Digital Bug','Dinomist','Dinowrestler','Djinn','Dododo','Dogmatika','Doll','Doriado','Dracoslayer','Dracoverlord','Dragonmaid','Dragunity','Dream Mirror','Drytron','Dual Avatar','Duston','Earthbound','Edge Imp','Egyptian God','Eldlich','Elemental HERO','Elemental Lord','Elementsaber','Empowered Warrior','Endymion','Evil Eye','Evil HERO','Evil Twin','Evilswarm','Evolsaur','Evoltile','Evolzar','Exodia','Eyes Restrict','F.A.','Fabled','Fairy Tail','Fire Fist','Fire Formation','Fire King','Fishborg','Flamvell','Fleur','Flower Cardian','Fluffal','Forbidden','Fortune Fairy','Fortune Lady','Fossil','Frightfur','Frog','Fur Hire','Gadget','Gagaga','Gaia The Fierce Knight','Galaxy-Eyes','Gandora','Geargia','Gem-','Generaider','Genex','Ghostrick','Gimmick Puppet','Gishki','Gizmek','Glacial Beast Penguin','Glacial Beast','Gladiator Beast','Gogogo','Golden Castle of Stromberg','Golden Land','Gorgonic','Gouki',"Gravekeeper's",'Graydle','Greed','Grepher','Guardian','Guardragon','Gusto','Harpie','Hazy','Herald','Heraldic','Heraldry','HERO','Heroic','Hi-Speedroid','Hieratic','Hole','Holy Knight','Holy Night','Horus the Black Flame Dragon','Ice Barrier','Igknight','Impcantation','Infernity','Infernoble Knight','Infernoid','Infestation','Infinitrack','Invoked','Inzektor','Iron Chain','Jester','Jinzo','Junk','Jurrac','Kaiju','Karakuri','Knightmare','Koa"ki Meiru','Koala','Kozmo','Krawler','Kuriboh','Laval','Legendary Knight','Lightsworn','Live Twin','Live?Twin','Lunalight','Lyrilusc','Machina','Madolche','Madoor','Magical Musket','Magician','Magician Girl','Magikey','Magistus','Magnet Warrior','Majespecter','Majestic','Maju','Malefic','Malicevorous','Marincess','Mask','Masked HERO','Materiactor','Mathmech','Mayakashi','Mecha Phantom Beast','Megalith','Mekk-Knight','Meklord','Melffy','Melodious','Mermail','Metalfoes','Metaphys','Mist Valley','Monarch','Morphtronic','Mystical Beast of the Forest','Myutant','Naturia','Nekroz','Nemesys','Neo-Spacian','Nephthys','Nimble','Ninja','Ninjitsu Art','Noble Knight','Nordic','Numeron','Odd-Eyes','Ojama','Onomato','Orcust','Paladins of Dragons','Paleozoic','Parasite','Parshath','Pendulum','Pendulum Dragon','Penguin','Performage','Performapal','Phantasm Spiral','Phantom Knights','Photon','Plunder Patroll','Possessed','Potan','Power Tool','Prank-Kids','Predaplant','Prediction Princess','Priestess','PSY-Frame','Qli','Raidraptor','Rank-Up-Magic','Red-Eyes','Reptilianne','Resonator','Rikka','Ritual Beast','Roid','Rokket','Roland','Rose','Rose Dragon','S-Force','Sacred Beast','Salamangreat','Scrap','Secret Six Samurai','Shaddoll','Shark','Shinobird','Shiranui','Silent Magician','Silent Swordsman','Simorgh','Six Samurai','Skull Servant','Sky Scourge','Sky Striker','Slime','Solemn','Solfachord','Speedroid','Spellbook','Sphinx','Spirit Message','Spiritual Art','Springans','SPYRAL','Star Seraph','Stardust','Starliege','Steelswarm','Stellarknight','Stigmata','Stigmatika','Subterror','Sunavalon','Sunseed','Sunvine','Super Defense Robot','Super Quant','Superheavy','Supreme King','Suship','Sylvan','Symphonic Warrior','Synchro','Synchron','T.G.','Tellarknight','Tenyi','The Agent','The Weather','Thunder Dragon','Time Thief','Timelord','Tindangle','Toon','Trap Monster','Traptrix','Tri-Brigade','Triamid','Trickstar','True Draco','U.A.','Umbral Horror','Umi','Unchained','Ursarctic','Utopia','Valkyrie','Vampire','Vassal','Vendread','Venom','Virtual World','Vision HERO','Void','Volcanic','Vylon','War Rock','Watt','Wicked God','Wind-Up','Windwitch','Witchcrafter','World Chalice','World Legacy','Worm','X-Saber','Yang Zing','Yosenju','Yubel','Zefra','ZEXAL','Zoodiac','?ttraction'];
    const [archetype, setArchetype] = useState("");
    const [cards, setCards] = useState([]);
    useEffect(() => {
        if (archetype == "") return;
        fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${archetype}`)
        .then(data => data.json())
        .then(json => setCards(json["data"]));
    }, [archetype]);
    return (
        <div id="details">
        <label>
            Archetypes
            <select
                onChange={e => setArchetype(e.target.value)}
                value={archetype}
            >
                {archetypes.map(arch => (
                    <option value={arch}>{arch}</option>
                ))}
            </select>
        </label>
        <div className="description">
            {`${cards.length} Cards`}
        </div>
        <div id="cards">
            {cards.map(c => (
                <Card name={c["name"]} key={c["id"]} id={c["id"]} image={c["card_images"][0]["image_url"]} />
            ))}
        </div>
        </div>
    )

}

export default Archetypes;