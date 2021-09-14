import React, {useState, Fragment} from 'react';
const Contador = () => {
    const [numero, setNumero] = useState(0)
    
    function Calcular(num ){
        for (var i = 1; i<11; i++) {
            console.log(num);
            <h2>hola</h2>
        }
    }
    return (
        <Fragment>
            <br />
            <br />


            <label>Ingresa tu numero: <input  onChange={event => setNumero(event.target.value)} /></label>
            <table>
                <tr>
                    <td>{numero}</td>
                    <td> X </td>
                    <td>0</td>
                    <td>=</td>
                    <td>{numero * 0}</td>
                </tr>
                <tr>
                    <td>{numero}</td>
                    <td> X </td>
                    <td>1</td>
                    <td>=</td>
                    <td>{numero * 1}</td>
                </tr>
                <tr>
                    <td>{numero}</td>
                    <td> X </td>
                    <td>2</td>
                    <td>=</td>
                    <td>{numero * 2}</td>
                </tr>
                <tr>
                    <td>{numero}</td>
                    <td> X </td>
                    <td>3</td>
                    <td>=</td>
                    <td>{numero * 3}</td>
                </tr>
                <tr>
                    <td>{numero}</td>
                    <td> X </td>
                    <td>4</td>
                    <td>=</td>
                    <td>{numero * 4}</td>
                </tr>
                <tr>
                    <td>{numero}</td>
                    <td> X </td>
                    <td>5</td>
                    <td>=</td>
                    <td>{numero * 5}</td>
                </tr>
                <tr>
                    <td>{numero}</td>
                    <td> X </td>
                    <td>6</td>
                    <td>=</td>
                    <td>{numero * 6}</td>
                </tr>
                <tr>
                    <td>{numero}</td>
                    <td> X </td>
                    <td>7</td>
                    <td>=</td>
                    <td>{numero * 7}</td>
                </tr>
                <tr>
                    <td>{numero}</td>
                    <td> X </td>
                    <td>8</td>
                    <td>=</td>
                    <td>{numero * 8}</td>
                </tr>
                <tr>
                    <td>{numero}</td>
                    <td> X </td>
                    <td>9</td>
                    <td>=</td>
                    <td>{numero * 9}</td>
                </tr>
                <tr>
                    <td>{numero}</td>
                    <td> X </td>
                    <td>10</td>
                    <td>=</td>
                    <td>{numero * 10}</td>
                </tr>

            </table>
        </Fragment>

      );

    
    
}
 
export default Contador;