const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', function () {
    console.log("connection established!")
    conn.write('Name: JH')
  })

  conn.on('data', function (data) {
    console.log(data);
  });

  conn.on('connect', function () {
    setInterval(function () {
      conn.write("Move: up")
    }, 1000)

  })

  return conn;
}

module.exports = connect;