import  Profile  from './model/Profile'

const dbInit = () => {
  Profile.sync({ alter: true });
}

export default dbInit;