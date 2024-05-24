import { Fragment, useState } from "react"
import { NavLink } from "react-router-dom"
import data from "../data/data"
import '../style/table.css'

function Table(){
    
    const [lines, setLine] = useState(data)
    const [isEditable, setisEditable] = useState(data.map(line => ({ ...line, isEditable: false })))

    const deleteLine = (index) => {
        const currentLines = lines
        currentLines.splice(index, 1)
        setLine([...currentLines])
    }

    const editLine = (line, index) => {
        setisEditable(line.isEditable = !line.isEditable)
        if(line.isEditable){
            console.log(`La ligne ${index} est modifiable `)
        }
    }

    const updatedLine = (event, index) => {
        const newValue = event.target.value
        const propriete = event.target.name

        setLine(prevLines => {
            const updatedLines = [...prevLines];
            updatedLines[index] = {
            ...updatedLines[index], 
            [propriete]: newValue 
        };
        return updatedLines;

        })
    }
    
    return (
        <Fragment>
            <table border={2}>
                <thead>
                <tr>
                    <th>Prénom</th>
                    <th>Nom</th>
                    <th>Adresse</th>
                </tr>
                </thead>
                <tbody>
                {lines.map((line, index) => {
                    return (
                    <tr key={index}>
                        <td>{line.isEditable ? <input type="text"   name="prenom"       value={line.prenom}     onChange={(e) => updatedLine(e, index)} /> : line.prenom}</td>
                        <td>{line.isEditable ? <input type="text"   name="nom"          value={line.nom}        onChange={(e) => updatedLine(e, index)} /> : line.nom}</td>
                        <td>{line.isEditable ? <input type="number" name="telephone"    value={line.telephone}  onChange={(e) => updatedLine(e, index)} /> : line.telephone}</td>
                        <td className="buttons">
                            <button onClick={() => deleteLine(index)}>
                                Delete
                            </button>
                            <button onClick={() => {editLine(line, index)}}>
                                {line.isEditable ? 'Save' : 'Edit'}
                            </button>
                        </td>
                    </tr>
                    )
    })}
                </tbody>
            </table>

        <NavLink to='/'>Page d'accueil</NavLink>
        </Fragment>
    )
}

export default Table