let connection;


const setupInput = function (conn) {
  connection = conn
  const stdin = process.stdin;
  const handleUserInput = () => {
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        conn.write("Name: Bye")
        process.exit();
      };
    });
  }

  stdin.on('data', (key) => {
    if (key === 'w') {
      conn.write("Move: up")
    };
    if (key === 'a') {
      conn.write("Move: left")
    };
    if (key === 's') {
      conn.write("Move: down")
    };
    if (key === 'd') {
      conn.write("Move: right")
    };
    if (key === 'e') {
      conn.write("Say: use WASD move!")
    }
    if (key === 'q') {
      conn.write("Say: use WASD move!")
    }
    //could probably store a list of keys in an object and reference but thats a problem for future joel. 
    if (key === 'z') {
      conn.write("Say: use WASD move!")
    }

  });


  handleUserInput('data');
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();



  return stdin;


}



module.exports = setupInput;