import React, { useState } from "react";
import { Link } from 'react-router-dom';

const AngsuranList = () => {
    const [date, setDate] = useState('2024-08-14');
    const [data, setData] = useState(null);

    const fetchAngsuran = async () => {
        try {

            const response = await fetch(`http://localhost:5000/angsuran?date=${date}`);
            const result = await response.json();
            if (response.ok) return setData(result);
            else {
                setData(null);
                alert(result.message || 'Terjadi kesalahan');
            }
        }
        catch (error) {
            console.error('Fetch error', error);
            alert('Gagal memuat');
        }
    };

    return (
        <div className="container">
            <div id="total-angsuran-container">
                <h1>TOTAL ANGSURAN</h1>
                <div className="date-input-container">
                    <input id="date"type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                </div>
            </div>

            <div className="action-buttons">
                <button id="cari-data" onClick={fetchAngsuran}>CARI DATA</button>
                <Link to="/" className="nav-button hitung-kredit">HITUNG KREDIT</Link>
                <Link to="/total-penalty" className="nav-button cek-denda">CEK DENDA</Link>
            </div>

            {data && (
                <div className="results-container">
                    <p className="result-title">DETAIL KONTRAK</p>
                    <table>
                        <thead>
                            <tr>
                                <th>KONTRAK NO</th>
                                <th>CLIENT NAME</th>
                                <th>TOTAL ANGSURAN JATUH TEMPO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{data.kontrak_no}</td>
                                <td>{data.client_name}</td>
                                <td>{data.total_angsuran.toLocaleString()}</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="result-title">JADWAL ANGSURAN</p>
                    <table>
                        <thead>
                            <tr>
                                <th>KONTRAK NO</th>
                                <th>ANGSURAN KE</th>
                                <th>ANGSURAN PER BULAN</th>
                                <th>TANGGAL JATUH TEMPO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.angsuran.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.kontrak_no}</td>
                                    <td>{item.angsuran_ke}</td>
                                    <td>{item.angsuran_per_bulan.toLocaleString()}</td>
                                    <td>{item.tanggal_jatuh_tempo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AngsuranList;