const { CONFIG } = require("./index")

const mySqlPromise = require("mysql2/promise");

let pool;
try {
    pool = mySqlPromise.createPool(`${CONFIG.DATABASE_URL}?ssl={"rejectUnauthorized":false}&multipleStatements=true&dateStrings=false&waitForConnections=true&connectionLimit=99&enableKeepAlive=true&keepAliveInitialDelay=10000`);
    console.log(`DB Pool Created.`);
} catch (error) {
    console.error('MySQL Pool Creation Error:', error.message);
    pool = null;
}

exports.getMySqlPromiseConnection = async () => {
  if (!pool) {
    throw new Error('MySQL is not configured. Please set up MySQL database.');
  }
  try {
    return await pool.getConnection();
  } catch (error) {
    console.error("Pool Connection Error: =======>");
    console.error(error);
    throw error;
  }
};
