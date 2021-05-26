import React from "react";
import s from './Table.module.scss'

const Table: React.FC = ({children}) => {
  return (
    <table className={s.defTable}>
      {children}
    </table>
  )
}

export default Table