import React, {Component} from "react";
import './Kritik.css';
import Post from "../stateless/PostKritik";
import firebase from "firebase";
import { logoutUser } from "../actions/auth";
import { ButtonContainer } from "./Button";
import { connect } from "react-redux";

class Kritik extends Component{
    constructor(props) {
        super(props);
        this.state = {                              // Komponen State dari React Untuk Statefull Component
            listKritik: []                         // Variabel Array yang Digunakan untuk Menyimpan data API
        }
    }

    ambilDataDariServerAPI = () => {                // fungsi untuk mengambil data API dari Realtime Database Firebase
        let ref = firebase.database().ref("/");
        ref.on("value", snapshot => {
            const state = snapshot.val();
            this.setState(state);
        });
    }

    simpanDataKeServerAPI = () => {                 // Fungsi untuk Mengirim/Insert Data ke API Realtime Database Firebase
        firebase.database()
            .ref("/")
            .set(this.state);
    }

    componentDidMount() {                           // Komponen untuk Mengecek Ketika Component telah di mount-ing, maka panggil API
        this.ambilDataDariServerAPI()               // ambil data dari server API lokal
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            this.simpanDataKeServerAPI();
        }
    }

    handleHapusArtikel = (idArtikel) => {           // fungsi yang meng-handle button action hapus data
        const {listKritik} = this.state;
        const newState = listKritik.filter(data => {
            return data.uid !== idArtikel;
        });
        this.setState({listKritik: newState});
    }

    handleTombolSimpan = (event) => {               // fungsi untuk meng-handle tombol submit di klik
        let title = this.refs.judulArtikel.value;   // this.refs mengacu pada input field (input text, textarea, dll)
        let body = this.refs.isiArtikel.value;
        let uid = this.refs.uid.value;

        if (uid && title && body) {                 // cek apakah semua data memiliki nilai (tidak null)
            const { listKritik } = this.state;
            const indeksArtikel = listKritik.findIndex(data => {
                return data.uid === uid;
            });
            listKritik[indeksArtikel].title = title;
            listKritik[indeksArtikel].body = body;
            this.setState({ listKritik });
        } else if (title && body) {                 // Jika data belum ada di server
            const uid = new Date().getTime().toString();
            const { listKritik } = this.state;
            listKritik.push({ uid, title, body });
            this.setState({ listKritik });
        }

        this.refs.judulArtikel.value = "";
        this.refs.isiArtikel.value = "";
        this.refs.uid.value = "";
    };

    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
      };
    
    render() {
        const { isLoggingOut, logoutError } = this.props;
        return(
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                <div className="col-12 mx-auto my-2 text-right text-title">
              <ButtonContainer onClick={this.handleLogout}>
                Logout
              </ButtonContainer>
              {isLoggingOut && <p>Logging Out....</p>}
              {logoutError && <p>Error logging out</p>}
            </div>
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-weight-bold">
                  Halaman Kritik & Saran
                </h1>
              </div>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" ref="judulArtikel"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="body" rows="3" ref="isiArtikel"></textarea>
                        </div>
                    </div>
                    <input type="hidden" name="uid" ref="uid" />
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <br></br>
                {   // Looping dan masukan untuk setiap data yang ada di listKritik ke variabel artikel
                    this.state.listKritik.map(artikel => {  
                        return <Post key={artikel.uid} judul={artikel.title} isi={artikel.body}
                        idArtikel={artikel.uid} hapusArtikel={this.handleHapusArtikel}/>
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      isLoggingOut: state.auth.isLoggingOut,
      logoutError: state.auth.logoutError,
    };
  }

  export default connect(mapStateToProps)(Kritik);