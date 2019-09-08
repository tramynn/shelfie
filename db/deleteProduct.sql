DELETE FROM inventory 
WHERE id = $1;
-- make sure to return things from db after deleting
SELECT * FROM inventory;