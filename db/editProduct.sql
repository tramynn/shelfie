UPDATE 
  inventory 
SET
  image_url = $2,
  product_name = $3,
  price = $4
WHERE
  id = $1;