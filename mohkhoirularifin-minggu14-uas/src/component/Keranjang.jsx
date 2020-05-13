import React, { Component } from "react";
import PostKeranjang from "../stateless/PostKeranjang";
import firebase from "firebase";
import { logoutUser } from "../actions/auth";
import { connect } from "react-redux";
import { ButtonContainer } from "./Button";

class Keranjang extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Komponen State dari React Untuk Statefull Component
      listKeranjang: [], // Variabel Array yang Digunakan untuk Menyimpan data API
    };
  }

  ambilDataDariServerAPI = () => {
    // fungsi untuk mengambil data API dari Realtime Database Firebase
    let ref = firebase.database().ref("/");
    ref.on("value", (snapshot) => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  simpanDataKeServerAPI = () => {
    // Fungsi untuk Mengirim/Insert Data ke API Realtime Database Firebase
    firebase.database().ref("/").set(this.state);
  };

  componentDidMount() {
    // Komponen untuk Mengecek Ketika Component telah di mount-ing, maka panggil API
    this.ambilDataDariServerAPI(); // ambil data dari server API lokal
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.simpanDataKeServerAPI();
    }
  }

  handleHapusArtikel = (idArtikel) => {
    // fungsi yang meng-handle button action hapus data
    const { listKeranjang } = this.state;
    const newState = listKeranjang.filter((data) => {
      return data.id !== idArtikel;
    });
    this.setState({ listKeranjang: newState });
  };

  handleTombolSimpan = (event) => {
    // fungsi untuk meng-handle tombol submit di klik
    let title = this.refs.judulArtikel.value; // this.refs mengacu pada input field (input text, textarea, dll)
    let body = this.refs.isiArtikel.value;
    let uid = this.refs.uid.value;

    if (uid && title && body) {
      // cek apakah semua data memiliki nilai (tidak null)
      const { listKeranjang } = this.state;
      const indeksArtikel = listKeranjang.findIndex((data) => {
        return data.uid === uid;
      });
      listKeranjang[indeksArtikel].title = title;
      listKeranjang[indeksArtikel].body = body;
      this.setState({ listKeranjang });
    } else if (title && body) {
      // Jika data belum ada di server
      const uid = new Date().getTime().toString();
      const { listKeranjang } = this.state;
      listKeranjang.push({ uid, title, body });
      this.setState({ listKeranjang });
    }

    this.refs.judulArtikel.value = "";
    this.refs.isiArtikel.value = "";
    this.refs.uid.value = "";
  };

  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };

  handleBeli = (idArtikel) => {
    console.log(
      `id ${idArtikel} berhasil Dibeli. silahkan melakukan pembayaran`
    );
  };
  render() {
    const { isLoggingOut, logoutError } = this.props;
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <div className="col-12 mx-auto my-2 text-right text-title">
              <ButtonContainer onClick={this.handleLogout}>
                Logout
              </ButtonContainer>
              {isLoggingOut && <p>Logging Out....</p>}
              {logoutError && <p>Error logging out</p>}
            </div>
            <div className="row">
              <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-weight-bold">
                  Daftar Keranjang
                </h1>
              </div>
            </div>

            <div className="row">
              {
                // Looping dan masukan untuk setiap data yang ada di listKeranjang ke variabel artikel
                this.state.listKeranjang.map((artikel) => {
                  return (
                    <PostKeranjang
                      key={artikel.id}
                      judul={artikel.title}
                      isi={artikel.price}
                      gambar={artikel.img}
                      keranjang={artikel.inCart}
                      proc={artikel.processor}
                      vga={artikel.graphic}
                      memory={artikel.ram}
                      idArtikel={artikel.id}
                      hapusArtikel={this.handleHapusArtikel}
                      beliBarang={this.handleBeli}
                    />
                  );
                })
              }
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError,
  };
}

export default connect(mapStateToProps)(Keranjang);
