module.exports = (sequelize, dataTypes) => {
    let alias = "Category";
    let config = {

        id_category_products: {
            type: dataTypes.INTEGER
        },
        id_products: {
            type: dataTypes.INTEGER,

        },
        Category: {
            type: dataTypes.VARCHAR,

        }
    };


    const Category = sequelize.define(alias, cols, config);

    return Category;
}