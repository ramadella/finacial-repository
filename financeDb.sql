CREATE DATABASE IF NOT EXISTS finance_db;
USE finance_db;

CREATE TABLE kontrak (
    kontrak_no VARCHAR(10) PRIMARY KEY,
    client_name VARCHAR(100),
    otr DECIMAL(15,2)
);

CREATE TABLE jadwal_angsuran (
    id INT AUTO_INCREMENT PRIMARY KEY,
    kontrak_no VARCHAR(10),
    angsuran_ke INT,
    angsuran_per_bulan DECIMAL(15,2),
    tanggal_jatuh_tempo DATE,
    FOREIGN KEY (kontrak_no) REFERENCES kontrak(kontrak_no) ON DELETE CASCADE
);

INSERT INTO kontrak (kontrak_no, client_name, otr) VALUES
('AGR00001', 'SUGUS', 240000000);

INSERT INTO jadwal_angsuran (kontrak_no, angsuran_ke, angsuran_per_bulan, tanggal_jatuh_tempo) VALUES
('AGR00001', 1, 12907000, '2024-01-25'),
('AGR00001', 2, 12907000, '2024-02-25'),
('AGR00001', 3, 12907000, '2024-03-25'),
('AGR00001', 4, 12907000, '2024-04-25'),
('AGR00001', 5, 12907000, '2024-05-25'),
('AGR00001', 6, 12907000, '2024-06-25'),
('AGR00001', 7, 12907000, '2024-07-25'),
('AGR00001', 8, 12907000, '2024-08-25'),
('AGR00001', 9, 12907000, '2024-09-25'),
('AGR00001', 10, 12907000, '2024-10-25'),
('AGR00001', 11, 12907000, '2024-11-25'),
('AGR00001', 12, 12907000, '2024-12-25');
