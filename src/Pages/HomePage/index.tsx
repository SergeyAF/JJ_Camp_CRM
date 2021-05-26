import React from "react";
import s from './HomePage.module.scss';
import Layout from "../../components/Layout";

const HomePage: React.FC = () => {
    return (
        <>
            <div className={s.root}>
                <Layout>
                    <div>Статистика по лагерям</div>
                </Layout>
            </div>
        </>
    )
}

export default HomePage