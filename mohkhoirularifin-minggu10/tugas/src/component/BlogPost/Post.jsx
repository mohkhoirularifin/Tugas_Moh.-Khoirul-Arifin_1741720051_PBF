import React from "react";

const Post = (props) => {
    return(
        <div className="artikel">
            <div className="gambar-artikel">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Thumbnail Artikel"/>
            </div>
            <div className="konten-artikel">
                <div className="judul-artikel">{props.judul}</div>
                <p className="isi-artikel">NIM &emsp;&emsp; : {props.NIM}</p>
                <p className="isi-artikel">alamat &emsp; : {props.alamat}</p>
                <p className="isi-artikel">No. Hp &emsp; : {props.hp}</p>
                <p className="isi-artikel">Angkatan : {props.angkatan}</p>
                <p className="isi-artikel">Status&emsp;&emsp; : {props.status}</p>
                <button className="btn btn-sm btn-danger" onClick={() => props.hapusArtikel(props.idArtikel)}>Hapus</button>
            </div>
        </div>
    )
}

export default Post;