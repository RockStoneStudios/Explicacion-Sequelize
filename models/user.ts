import {Model} from 'sequelize';

interface IUser {
  id: number;
  firstName : string;
  lastName : string;
  age : number;
  email : string;
  password: string;
}

module.exports = (sequelize:any, DataTypes:any) => {
  class User extends Model <IUser> implements IUser{
    
     declare id :number;
     declare firstName: string;
     declare lastName: string;
     declare age: number;
     declare email: string;
     declare password: string;
    static associate(models:any) {
        User.belongsToMany(models.Project,{
           through : 'ProjectAssignments'
        })
    }
  }
  User.init({
      id :{
         type : DataTypes.INTEGER,
         allowNull : false,
         autoIncrement : true,
         primaryKey : true
      },
      firstName : {
        type : DataTypes.STRING,
        allowNull : false
      },
      lastName : {
        type : DataTypes.STRING,
        allowNull : false
      },
      age :{
        type : DataTypes.INTEGER,
        allowNull : false
      },
      email : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
      },
      password : {
        type : DataTypes.STRING,
        allowNull : false,
        validate : {
           min : 6
        }
      }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};