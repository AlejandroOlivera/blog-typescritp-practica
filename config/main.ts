const config = {
  // port
  port: process.env.PORT || 3000,
  
  //database
  db: "mongodb://localhost/blog-practica",

  // test enviroment
  test_env: "test",
  test_db: "mongodb://localhost/blog-practica-test",
  test_port: 3001
};

export default config;
