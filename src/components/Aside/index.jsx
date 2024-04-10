import './style.scss'
import icon_zen from '../../assets/icon_zen.png'
import icon_nage from '../../assets/icon_nage.png'
import icon_velo from '../../assets/icon_velo.png'
import icon_muscu from '../../assets/icon_muscu.png'

function Aside() {
  return (
    <aside className="aside">
      <div className="bloc-icones">
        <img className="bloc-icones__icone" src={icon_zen} alt="icon_velo" />
        <img className="bloc-icones__icone" src={icon_nage} alt="icon_velo" />
        <img className="bloc-icones__icone" src={icon_velo} alt="icon_velo" />
        <img className="bloc-icones__icone" src={icon_muscu} alt="icon_velo" />
      </div>
      <p className="copiryght">Copiryght, SportSee 2020</p>
    </aside>
  )
}

export default Aside
