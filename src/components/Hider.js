import { useState } from "react"
import '../style/hider.css'

function Hider(){
    const [visible1, setVisible1] = useState(true)
    const [visible2, setVisible2] = useState(false)

    const [checked, setChecked] = useState(false)

    const handleChange = () => {
        setChecked(!checked)
        console.log(checked)
    }

    return (
        <div className="hider__container">
            <h2>- Exercice Hidden</h2>
            <div className="button__containers">
                <div className="button__1">
                    <button hidden={visible2} onClick={() => {setVisible1(!visible1); setVisible2(!visible2)}}>Bouton 1</button>
                </div>
                <div className="button__2">
                    <button hidden={visible1} onClick={() => {setVisible2(!visible2); setVisible1(!visible1)}}>Bouton 2</button>
                </div>
            </div>

            <form>
                <div>
                    <label>Cocher la case pour faire apparaître le champ de texte.</label>
                    <input type="checkbox" checked={checked} onChange={handleChange}/>
                </div>
                {checked ? <textarea type="text" /> : null}
            </form>
        </div>
    )

}

export default Hider