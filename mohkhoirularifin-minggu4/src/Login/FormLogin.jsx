import React from 'react';
import './FormLogin.css'

class FormLogin extends React.Component
{
    render () {
        return (
        <div>
        <h1>Form Login</h1>
        <div className="kotak_login">
          <p className="tulisan_login">Tugas Pertemuan Ketiga</p>
          <form>
            <label className="nama">Username</label>
            <input type="text" name="username" className="form_login" placeholder="Masukkan Username Anda" />
            <label className="nama">Password</label>
            <input type="text" name="password" className="form_login" placeholder="Masukkan Password Anda" />
            <input type="button" className="tombol_login" defaultValue="Login" />
            <center>
            <div className="checkbox">
                <input type="checkbox" defaultChecked/>
                <label>Remember me</label>
            </div>
            </center>
            <br />
            <br />
            <center>
                <input type="button" className="tombol_cancel" defaultValue="Cancel" />
            </center>
          </form>
        </div>
      </div>
        );
    }
}

export default FormLogin;