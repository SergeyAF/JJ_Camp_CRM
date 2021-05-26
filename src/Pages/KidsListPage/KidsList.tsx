import React, {useEffect} from "react";
import s from './KidslistPage.module.scss';
import Layout from "../../components/Layout";
import Button from "../../components/button/Button";
import {fetchKidsListThunk, createKidThunk} from "../../redux/actions";
import {bindActionCreators} from "redux";
import {IKid} from "../../MockData/kidList";
import Table from "../../components/Table/Table";
import {Field, Form, Formik} from 'formik';
import {Link, Route} from "react-router-dom";
import {RootState} from "../../redux/store";
import {connect} from "react-redux";


// import { getKids } from "../../utils/request";

interface IMapStateToProps {
  kidsList: IKid[]
  total: number
}

interface IMapDispatchToProps {
  // setKidsList: (args:IKid[]) => void
  fetchKidsList: () => void
  createKid: (data:any) => void
  // startLoading: () => void
  // endLoading: () => void
}


const KidsListPage: React.FC<IMapStateToProps & IMapDispatchToProps> = (props) => {

  const calculateBirthday = (date: string): number => {
    const toUTCDate = date.split('.').reverse().join('.')
    const birthDay = new Date(toUTCDate).getTime()
    const diff = Date.now() - birthDay
    return Math.abs(new Date(diff).getUTCFullYear() - 1970)

  }

  const handleSubmit = (values:any) => {
    props.createKid(values);
  }
  const tableHeaders = ["№", "ФИО", "Пол", "Возраст", "Дата рождения"]


  useEffect(() => {
    props.fetchKidsList()
  },[])

  return (
    <>
      <div className={s.root}>
        <Layout>
          <div className={s.pageTitle}>Список детей: {props.total} человек</div>
          <div>
            <Table>
              <thead>
              <tr>
                {tableHeaders.map((el, index) => <td key={index}>{el}</td>)}
              </tr>
              </thead>
              <tbody>
              {props.kidsList.map((el,index) => (
                // todo: Create "Details Form" with ID
                <tr key={el.id} className={s.editable} onClick={() => {
                  console.log(`Show Details Form with ID: ${el.id}`)
                }}>
                  <td>{index+1}</td>
                  <td>{el.lastName} {el.firstName}</td>
                  <td>{el.gender === 'male' ? 'мальчик' : 'девочка'}</td>
                  <td>{calculateBirthday(el.dateOfBirth)}</td>
                  <td>{el.dateOfBirth}</td>

                </tr>
              ))}
              </tbody>
            </Table>
            {/*todo: реализовать форму создания*/}
            <Link to='/kids/create'><Button>Добавить ребенка</Button></Link>
          </div>
          <Route path='/kids/create' render={(routerProps) => {
            return (
              <div className="formikForm">
                <h3>Добавить нового ребенка</h3>
                <Formik initialValues={{
                  firstName: '',
                  lastName: '',
                  gender: '',
                  dateOfBirth: ''
                }} onSubmit={(values)=>handleSubmit(values)}>
                  <Form>
                    <div className={s.formDiv}>
                      <label htmlFor='firstName'>Имя</label>
                      <Field name='firstName' type='text'/>
                    </div>
                    <div className={s.formDiv}>
                      <label htmlFor='lastName'>Фамилия</label>
                      <Field name='lastName' type='text'/>
                    </div>
                    <div className={s.formDiv}>
                      <span>Пол</span>
                      <div>
                        <label>
                          <Field name='gender' type='radio' value='male'/>
                          мальчик
                        </label>
                        <label>
                          <Field name='gender' type='radio' value='female'/>
                          девочка
                        </label>
                      </div>
                    </div>
                    <div className={s.formDiv}>
                      <label htmlFor='dateOfBirth'>Дата рождения (дд.мм.гггг)</label>
                      <Field name='dateOfBirth' placeholder='01.01.2010' type='text'/>
                    </div>
                    <div className={s.formDiv}><Button type="submit">Добавить</Button>
                      <Link to='/kids'><Button>Отменить</Button></Link></div>

                  </Form>
                </Formik>

              </div>)
          }

          }/>

        </Layout>
      </div>
    </>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    kidsList: state.kids.kidsList,
    total: state.kids.total
    // isLoading: state.common.isLoading
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    // startLoading: startLoadingAction,
    // endLoading: endLoadingAction,
    fetchKidsList: fetchKidsListThunk,
    createKid: createKidThunk
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(KidsListPage)