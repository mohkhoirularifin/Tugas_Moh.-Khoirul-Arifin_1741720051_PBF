import React, {Component} from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";

class BlogPost extends Component {
    state = {
        listArtikel: [],
        insertArtikel: {
            id: 1,
            NIM: 1,
            nama: "",
            alamat: "",
            hp: "",
            angkatan: "",
            status: "",
        }
    }

    ambilDataDariServerApi = () => {
        fetch('http://localhost:3001/mahasiswa?_sort=id&_order=desc')
            .then(response => response.json())
            .then(jsonHasilAmbilDariApi => {
                this.setState({
                    listArtikel: jsonHasilAmbilDariApi
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerApi()
    }

    handleHapusArtikel = (data) => {
        fetch(`http://localhost:3001/mahasiswa/${data}`, {method: 'DELETE'})
            .then(res => {
                this.ambilDataDariServerApi()
            })
    }

    handleTambahArtikel = (event) => {
        let formInsertArtikel = {...this.state.insertArtikel};
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({
            insertArtikel: formInsertArtikel
        })
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/mahasiswa', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertArtikel)
        })
            .then((Response) => {
                this.ambilDataDariServerApi();
            });
    }

    render() {
        return(
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nama" name="nama" onChange={this.handleTambahArtikel}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">NIM</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="NIM" name="NIM" rows="3" onChange={this.handleTambahArtikel}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Alamat</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="alamat" name="alamat" rows="3" onChange={this.handleTambahArtikel}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">No. Hp</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="hp" name="hp" rows="3" onChange={this.handleTambahArtikel}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Angkatan</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="angkatan" name="angkatan" rows="3" onChange={this.handleTambahArtikel}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Status</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="status" name="status" rows="3" onChange={this.handleTambahArtikel}></input>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Mahasiswa</h2>
            {
                this.state.listArtikel.map(artikel => {
                    return(
                        <Post 
                        key={artikel.id} 
                        judul={artikel.nama} 
                        NIM ={artikel.NIM} 
                        alamat ={artikel.alamat} 
                        hp ={artikel.hp} 
                        angkatan ={artikel.angkatan} 
                        status ={artikel.status} 
                        idArtikel={artikel.id} 
                        hapusArtikel={this.handleHapusArtikel} />
                    ) 
                    
                })
            }
            </div>
        )
    }
}
export default BlogPost;