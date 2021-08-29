import React from 'react'

const Resultado = ({ total,plazo,cantidad }) => (
    
    <div className="u-full-width resultado">
        <h2>Resumen</h2>
        <p>La cantidad es: $ {cantidad}</p>
        <p>Apagar en: {plazo} meses</p>
        <p>Pago mensual es de {total / plazo.toFixed(2)}</p>
        <p>Su total a pagar es: {total.toFixed(2)}</p>
    </div>
)
 
export default Resultado;