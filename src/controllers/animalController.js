const pool = require('../configs/db');

exports.get = (req, res, next) => {
  pool.getConnection((err, connection) => {
    connection.query(`SELECT * FROM animal`,
      function (error, results) {
        connection.release();
        if (error) {
          res.status(500).send('500: Erro ao recuperar animais.');
          throw error;
        } else {
          res.status(200).json({"animais": results});
        }
      }
    );
  });
}

exports.post = (req, res, next) => {
  const nome = req.params.nome;

  pool.getConnection((err, connection) => {
    connection.query(`INSERT INTO animal (id, nome) VALUES (?, ?)`, [
      Math.floor(10000 + Math.random() * 90000),
      nome
    ], function (error) {
      connection.release();
      if (error) {
        res.status(500).send('500: Erro ao criar animal.');
        throw error;
      } else {
        res.status(201).send('201: Animal criado.');
      }
    });
  });
};

exports.put = (req, res, next) => {
  const id = req.params.id;
  const novoNome = req.params.novoNome;

  pool.getConnection((err, connection) => {
    connection.query(`UPDATE animal SET nome = ? WHERE id = ?`, [
      novoNome,
      id
    ], function (error) {
      connection.release();
      if (error) {
        res.status(500).send('500: Erro ao atualizar animal.');
        throw error;
      } else {
        res.status(200).send('200: Animal atualizado.');
      }
    });
  });
};

exports.delete = (req, res, next) => {
  const id = req.params.id;
  
  pool.getConnection((err, connection) => {
    connection.query(`DELETE FROM animal WHERE id = ?`, [
      id
    ], function (error) {
      connection.release();
      if (error) {
        res.status(500).send('500: Erro ao remover animal.');
        throw error;
      } else {
        res.status(200).send('200: Animal excluído');
      }
    });
  });
};