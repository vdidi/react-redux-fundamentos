import './Intervalo.css'
import React from 'react'
import Card from './Card'

export default props => {
  const { min,  max } = props
  return (
    <Card title="Média dos Números" green>
      <div>
        <span>
          <span>Mínimo: </span>
          <strong>{(min + max) / 2}</strong>
        </span>
      </div>
    </Card>
  )
}