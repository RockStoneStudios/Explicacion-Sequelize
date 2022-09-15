import {Model} from 'sequelize';

interface IProject{
   id:number;
   title: string;
   status : string
}

module.exports = (sequelize:any, DataTypes:any) => {
  class Project extends Model <IProject> implements IProject {
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