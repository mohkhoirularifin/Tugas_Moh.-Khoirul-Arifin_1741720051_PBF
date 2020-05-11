import React, { Component } from "react";
import Post from "../stateless/Post";
import firebase from "firebase";

class ListProduks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Komponen State dari React Untuk Statefull Component
      listArtikel: [], // Variabel Array yang Digunakan untuk Menyimpan data API
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
    const { listArtikel } = this.state;
    const newState = listArtikel.filter((data) => {
      return data.uid !== idArtikel;
    });
    this.setState({ listArtikel: newState });
  };

  handleTombolSimpan = (event) => {
    // fungsi untuk meng-handle tombol submit di klik
    let title = this.refs.judulArtikel.value; // this.refs mengacu pada input field (input text, textarea, dll)
    let body = this.refs.isiArtikel.value;
    let uid = this.refs.uid.value;

    if (uid && title && body) {
      // cek apakah semua data memiliki nilai (tidak null)
      const { listArtikel } = this.state;
      const indeksArtikel = listArtikel.findIndex((data) => {
        return data.uid === uid;
      });
      listArtikel[indeksArtikel].title = title;
      listArtikel[indeksArtikel].body = body;
      this.setState({ listArtikel });
    } else if (title && body) {
      // Jika data belum ada di server
      const uid = new Date().getTime().toString();
      const { listArtikel } = this.state;
      listArtikel.push({ uid, title, body });
      this.setState({ listArtikel });
    }

    this.refs.judulArtikel.value = "";
    this.refs.isiArtikel.value = "";
    this.refs.uid.value = "";
  };

  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-weight-bold">
                  List Product
                </h1>
              </div>
            </div>
            <div className="row">
              {
                // Looping dan masukan untuk setiap data yang ada di listArtikel ke variabel artikel
                this.state.listArtikel.map((artikel) => {
                  return (
                    <Post
                      key={artikel.id}
                      judul={artikel.title}
                      isi={artikel.price}
                      gambar={artikel.img}
                      keranjang={artikel.inCart}
                      idArtikel={artikel.id}
                      hapusArtikel={this.handleHapusArtikel}
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

export default ListProduks;
