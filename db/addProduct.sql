INSERT INTO inventory (image_url, product_name, price)
VALUES
($1, $2, $3)
RETURNING *;

SELECT * FROM inventory;