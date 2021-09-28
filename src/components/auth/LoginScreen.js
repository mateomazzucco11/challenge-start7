import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'


import { RightSide } from '../authComponents/RightSide';

import { Button } from '@mui/material';

import Facebook from '../../images/Facebook.svg';
import Google from '../../images/Google.svg';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = ({setIsLoggedIn, isLoggedIn}) => {

  let history = useHistory();

  const [formValues, handleInputChange] = useForm({
    username: '',
    password: ''
  });

  console.log(isLoggedIn)

  const handleLoginSubmit = async(e) => {
      e.preventDefault();
  
      try{
        const fetchLogin = await axios.post(process.env.REACT_APP_API_URL, {
          username: formValues.username,
          password: formValues.password
        })
  
        if(fetchLogin.data.token){
          localStorage.setItem('accessToken', fetchLogin.data.token);
          Swal.fire('Entering', '', 'success');

          setIsLoggedIn(true)

          if(isLoggedIn){
            history.push('/')
          }
        }

      }
      catch(err) {
        Swal.fire('Email or password was not correct','', 'error');
      }
  }

  return (
    <div className='auth__main-content'>
      <div className='login__rightside-content'>
        <div className='login__rightside-main-box'>
          <span className='login__rightside-line-top'/>
          <h1 className='login__rightside-title'>Bem-vindo de volta!</h1>
          <p className='login__rightside-text'>Estamos felizes que esteja de volta para retomar seus projetos no Projetolist.</p>
          <form className='login__rightside-form' onSubmit={handleLoginSubmit}>
            <input 
              placeholder='E-mail'
              autoComplete='off'
              type='email'
              name='username'
              value={formValues.username}
              onChange={handleInputChange}
            />
            <input 
              className='second-input'
              placeholder='Senha'
              autoComplete='off'
              type='password'
              name='password'
              value={formValues.password}
              onChange={handleInputChange}
            />
            <p>Esqueceu sua senha?</p>
            <Button variant="contained" type='submit'>
              Entrar
            </Button>
          </form>
          <p className='login__bottom-text'>OU ENTRE COM</p>
          <div className='login__social-media'>
            <img src={Facebook} alt={Facebook} className='facebook'/>
            <img src={Google} alt={Google}/>
          </div>
          <p className='login__last-text'>
            Ainda não tem uma conta?<span>Cadastre-se</span>
          </p>
        </div>
      </div>
      <RightSide />
    </div>
  )
}
