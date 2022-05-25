import React from "react"
class Card extends React.Component {
    render() {
        return (
            <div className="col-lg-6 col-sm-12 p-2">
                <div className="card">
                    <div className="card-body row">
                        {/* menampilkan Gambar / cover */}
                        <div className="col-5">
                            <img src={this.props.foto} className="img" height="100" />
                        </div>
                        {/* menampilkan deskripsi */}
                        <div className="col-7">
                            <h5 className="text-blue-500 font-bold">
                                {this.props.nama}
                            </h5>
                            <h6 className="text-dark">
                                Deskripsi : {this.props.deskripsi}
                            </h6>
                            <h6 className="text-dark">
                                Harga : {this.props.harga}
                            </h6>
                            <h6 className="text-dark">
                                Jumlah yang Dibeli : {this.props.jumlah}
                            </h6>
                            {/* button untuk mengedit */}
                            <button type="button" className="btn btn-sm btn-primary m-1" onClick={this.props.onEdit}>
                                Edit
                            </button>
                            {/* button untuk menghapus */}
                            <button className="btn btn-sm btn-danger m-1" onClick={this.props.onDrop}>
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card;