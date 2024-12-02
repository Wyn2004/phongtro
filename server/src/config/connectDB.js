const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('phongtro123', 'root', '12345', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3308, // Đảm bảo rằng đây là cổng đúng
  logging: false
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export default connectDB;

//  muon tao database dung lenh sau ( nho la phai cd vao thu muc src
// vi thu muc nay chua file config)

// npx sequelize db:migrate
