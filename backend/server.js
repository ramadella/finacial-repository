import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'finance_db',
});

app.get('/angsuran', (req, res) => {
    const { date } = req.query;
    if (!date) return res.status(400).json({ message: 'Tanggal harus diberikan' });

    const query = `
    SELECT
        j.kontrak_no, k.client_name, j.angsuran_ke, j.angsuran_per_bulan,
        DATE_FORMAT(j.tanggal_jatuh_tempo, '%Y-%m-%d') AS tanggal_jatuh_tempo
    FROM
        jadwal_angsuran j
    JOIN
        kontrak k ON j.kontrak_no = k.kontrak_no
    WHERE
        j.tanggal_jatuh_tempo <= ?
    ORDER BY
        j.angsuran_ke
    `;

    db.query(query, [date], (err, results) => {
        if (err) return res.status(500).json(err);
        if (results.length === 0) return res.json([]);
        const totalAngsuran = results.reduce((sum, row) => sum + row.angsuran_per_bulan, 0);

        res.json({
            kontrak_no: results[0].kontrak_no,
            client_name: results[0].client_name,
            total_angsuran: totalAngsuran,
            angsuran: results
        });
    });
});


app.get('/penalty', (req, res) => {
    const { date } = req.query;
    if (!date) return res.status(400).json({ message: 'Tanggal harus diberikan' });

    const query = `
    SELECT
        j.kontrak_no,
        k.client_name,
        j.angsuran_ke,
        DATEDIFF(?, j.tanggal_jatuh_tempo) AS hari_keterlambatan,
        DATEDIFF(?, j.tanggal_jatuh_tempo) * (0.001 * j.angsuran_per_bulan) AS total_denda
    FROM
        jadwal_angsuran j
    JOIN
        kontrak k ON j.kontrak_no = k.kontrak_no
    WHERE
        j.tanggal_jatuh_tempo BETWEEN '2024-06-25' AND '2024-07-25'
        AND j.tanggal_jatuh_tempo <= ?
    `;

    db.query(query, [date, date, date], (err, results) => {
        if (err) return res.status(500).json(err);
        if (results.length === 0) return res.json([]);
        res.json(results);
    });
});

app.listen(5000, () => {
    console.log('Server berjalan di port 5000');
})