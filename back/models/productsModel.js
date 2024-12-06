var pool = require('./bd');
async function getProducts() {
    var query = "select * from productos";
    var rows = await pool.query(query);
    return rows;
}
async function insertProduct(obj) {
    try {
        var query = "insert into productos set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
async function deleteProductById(id) {
    var query = "delete from productos where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}
async function getProductById(id) {
    var query = "select * from productos where id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}
async function modifyProductById(obj, id) {
    try {
        var query = "update productos set ? where id=?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getProducts,
    deleteProductById,
    getProductById,
    modifyProductById,
    insertProduct
}