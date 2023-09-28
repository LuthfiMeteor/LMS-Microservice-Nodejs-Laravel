module.exports = (sequelize, DataTypes) => {
    const RefreshToken = sequelize.define('refresh_tokens', {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        token:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        user_id:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        created_at:{
            type:DataTypes.DATE,
            allowNull:false
        },
        updated_at:{
            type:DataTypes.DATE,
            allowNull:false
        },
    },{
        tableName:'refresh_tokens',
        timestamps:true
    });
    return RefreshToken;
}