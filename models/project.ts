import {Model,InferAttributes,InferCreationAttributes} from 'sequelize';



module.exports = (sequelize:any, DataTypes:any) => {
  class Project extends Model <InferAttributes<Project>, InferCreationAttributes<Project>>  {
      declare id : number;
     declare title:string;
     declare status:string;
    static associate(models:any) {
       Project.belongsToMany(models.User,{
        through : 'ProjectAssignments'
       })
    }
  }
  Project.init({
    id: {
       type : DataTypes.INTEGER,
       allowNull : false,
       primaryKey : true,
       autoIncrement : true
    },
    title:{
     type : DataTypes.STRING,
     allowNull : false
    },
    status: {
      type : DataTypes.STRING,
      allowNull : false
    }
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};