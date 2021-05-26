import React from "react"
import {Link} from "react-router-dom"
import s from './Page404.module.scss'

const Page404: React.FC = () => {
    return (
      <>
        <div>Page not found</div>
          <Link className={s.greenLink} to={'/'}>Back to HomePage...</Link>
      </>
    )
}

export default Page404