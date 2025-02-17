import React, { useState } from "react";
import { Link } from "react-router-dom";

const CalculateCredit = () => {
    const [onTheRoad, setOnTheRoad] = useState(240000000);
    const [downPayment, setDownPayment] = useState(20);
    const [tenorMonths, setTenorMonths] = useState(18);
    const [installment, setInstallment] = useState(0);

    const calculateInstallment = (e) => {
        e.preventDefault();
        const downPaymentAmount = (onTheRoad / 100) * downPayment;
        const loanPaymentAmount = onTheRoad - downPaymentAmount;

        let interestRate = 0;
        if (tenorMonths <= 12) {
            interestRate = 12 / 100;
        }
        else if (tenorMonths > 12 && tenorMonths <= 24) {
            interestRate = 14 / 100;
        }
        else {
            interestRate = 16.5 / 100;
        }
        const monthlyInstallment = (loanPaymentAmount * (1 + interestRate)) / tenorMonths;
        setInstallment(monthlyInstallment);
    };

    return (
        <div className="container">
            <h1>MENGHITUNG ANGSURAN PER BULAN</h1>
            <form className="formCredit">
                <div>
                    <label htmlFor="onTheRoad">HARGA MOBIL</label>
                    <input id="onTheRoad" type="number" value={onTheRoad} onChange={(e) => setOnTheRoad(Number(e.target.value))} />
                </div>
                <div>
                    <label htmlFor="downPayment">DOWN PAYMENT (%)</label>
                    <input id="downPayment" type="number" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} />
                </div>
                <div>
                    <label htmlFor="tenorMonths">JANGKA WAKTU (TENOR KREDIT)</label>
                    <input id="tenorMonths" type="number" value={tenorMonths} onChange={(e) => setTenorMonths(Number(e.target.value))} />
                </div>
                
                <div className="action-buttons">
                    <button type="submit" onClick={calculateInstallment} className="hitung-kredit">HITUNG ANGSURAN</button>
                    <Link to="/hitung-angsuran" className="nav-button cek-angsuran">CEK ANGSURAN</Link>
                    <Link to="/total-penalty" className="nav-button cek-denda">CEK DENDA</Link>
                </div>

                {installment > 0 && (
                    <p>Angsuran per bulan: Rp {installment.toLocaleString()}</p>
                )}
            </form>
        </div>
    );
};

export default CalculateCredit;