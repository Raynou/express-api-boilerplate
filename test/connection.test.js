const { sequelize } = require("../connection.js");

test("Connection to database is workin", async () => {
  const res = await connectionTest();
  expect(res).toBe(true);
});

const connectionTest = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.close();
    return true;
  } catch (e) {
    return false;
  }
};
