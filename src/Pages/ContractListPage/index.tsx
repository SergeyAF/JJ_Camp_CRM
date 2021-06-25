import React, {useEffect} from "react";
import s from './ContractListPage.module.scss';
import Layout from "../../components/Layout";
import {getNameFromId} from "../../utils/getNameFromId";
import {contractsList} from "../../MockData/contractList";
import {campsList} from "../../MockData/campsList";
import Button from "../../components/button/Button";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import Table from "../../components/Table/Table";
import {fetchKidsListThunk} from "../../redux/actions/thunks";

const ContractListPage: React.FC = (props) => {
  const searchFields = [
    {
      key: 1,
      name: '№ путевки',
      value: 'contractNumber'
    },
    {
      key: 2,
      name: 'Смена',
      value: 'shiftID'
    },
    {
      key: 3,
      name: 'Ребенок',
      value: 'contractorId'
    },
    {
      key: 4,
      name: 'Цена',
      value: 'value'
    },


  ]
  const tableHeaders = ["Дата", "Лагерь", "№ путевки", "Смена", "Ребенок", "Цена путевки"]

  const kidsList = useSelector((state: RootState) => state.kids.kidsList)
  const dispatch = useDispatch()

  useEffect(()=>{
    // todo: will refactor to work with DB backend
    if (kidsList.length === 0) {
      dispatch(fetchKidsListThunk())
    }
  },[kidsList])

  return (
    <>
      <div className={s.root}>
        <Layout>
          <div className={s.pageTitle}>Список путевок</div>
          <div className={s.finder}>
            <select className={s.findString} name="contractFind" id="contractFind">
              {searchFields.map(el => <option key={el.key} value={el.value}>{el.name}</option>)}
            </select>
            <input className={s.findString} type="text" placeholder='найти'/>
          </div>
          <div>
            <Table>
              <thead>
              <tr>
                {tableHeaders.map((el, index) => <td key={index}>{el}</td>)}
              </tr>
              </thead>
              <tbody>
              {contractsList.map((el) => (
                <tr key={el.id}>
                  <td>{el.date}</td>
                  <td>{getNameFromId(el.campId, campsList)}</td>
                  <td>{el.contractNumber}</td>
                  <td>{el.shiftId}</td>
                  <td>{getNameFromId(el.contractorId, kidsList)}</td>
                  <td>{el.contractValue} UAH</td>
                </tr>
              ))}
              </tbody>
            </Table>
            <Button>Создать путевку</Button>
          </div>
        </Layout>
      </div>
    </>
  )
}

export default ContractListPage