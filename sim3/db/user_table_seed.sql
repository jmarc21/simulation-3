--67C
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(80),
    last_name VARCHAR(80),
    gender VARCHAR(40),
    hair_color VARCHAR(40),
    eye_color VARCHAR(40),
    hobby VARCHAR(40),
    birtday_day INT,
    birtday_month VARCHAR(20),
    birtday_year INT
)