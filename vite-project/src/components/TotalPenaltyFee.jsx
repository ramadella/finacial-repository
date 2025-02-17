import React, { useState } from "react";
import { Link } from 'react-router-dom';

const TotalPenaltyFee = () => {
    const [date, setDate] = useState('2024-08-14');
    const [penaltyData, setPenaltyData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchPenalty = () => {
        setLoading(true);
        fetch(`http://localhost:5000/penalty?date=${date}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.message) {
                    setError(data.message);
                    setPenaltyData([]);
                }
                else {
                    setPenaltyData(data);
                    setError(null);
                }
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    };

    return (
        <div className="container penalty-container">
            <h1>DENDA KETERLAMBATAN</h1>
            <div className="date-input-container">
                <input id="penalty-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                <button id="cari-penalty" onClick={fetchPenalty}>Cari</button>
            </div>
            <div className="action-buttons">
                <Link to="/" className="nav-button hitung-kredit">
                    HITUNG KREDIT
                </Link>
                <Link to="/hitung-angsuran" className="nav-button cek-angsuran">
                    CEK ANGSURAN
                </Link>
            </div>

            {loading && <p>Loading...</p>}
            {error && <p className="error-message">Error: {error}</p>}
            {penaltyData && penaltyData.length > 0 && (
                <div className="results-container">
                    <p className="result-title">Data Denda</p>
                    <table>
                        <thead>
                            <tr>
                                <th>KONTRAK NO</th>
                                <th>CLIENT NAME</th>
                                <th>INSTALLMENT NO</th>
                                <th>HARI KETERLAMBATAN</th>
                                <th>TOTAL DENDA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {penaltyData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.kontrak_no}</td>
                                    <td>{item.client_name}</td>
                                    <td>{item.angsuran_ke}</td>
                                    <td>{item.hari_keterlambatan}</td>
                                    <td>{Number(item.total_denda).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default TotalPenaltyFee;