import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";

const AuthPage = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth)
  const dispatch = useDispatch()
  return (
    <div>

    </div>
  );
};

export default AuthPage;