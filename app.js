const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');


const app = express();
const port = 3000;

// Configuração do banco de dados (substitua as credenciais conforme necessário)
const db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'Jogo',
});

// Conecta ao banco de dados
db.connect((err) => {
  if (err) {
    console.error('Erro na conexão com o banco de dados:', err);
    return;
  }
  console.log('Conexão ao banco de dados estabelecida.');
});

// Configura o middleware para análise do corpo da solicitação (body-parser)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//rota página 1
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/0Comeco.html'); // Substitua 'seuarquivo.html' pelo caminho do seu arquivo HTML
});
app.get('/Pergunta_1', (req, res) => {
    res.sendFile(__dirname + '/public/1Pergunta.html'); // Substitua 'seuarquivo.html' pelo caminho do seu arquivo HTML
  });
  app.get('/Pergunta_2', (req, res) => {
    res.sendFile(__dirname + '/public/2Pergunta.html'); // Substitua 'seuarquivo.html' pelo caminho do seu arquivo HTML
  });
  app.get('/Pergunta_3', (req, res) => {
    res.sendFile(__dirname + '/public/3Pergunta.html'); // Substitua 'seuarquivo.html' pelo caminho do seu arquivo HTML
  });
  app.get('/Pergunta_4', (req, res) => {
    res.sendFile(__dirname + '/public/4Pergunta.html'); // Substitua 'seuarquivo.html' pelo caminho do seu arquivo HTML
  });
  app.get('/Pergunta_5', (req, res) => {
    res.sendFile(__dirname + '/public/5Pergunta.html'); // Substitua 'seuarquivo.html' pelo caminho do seu arquivo HTML
  });
  app.get('/Pergunta_6', (req, res) => {
    res.sendFile(__dirname + '/public/6Pergunta.html'); // Substitua 'seuarquivo.html' pelo caminho do seu arquivo HTML
  });
  app.get('/Pergunta_7', (req, res) => {
    res.sendFile(__dirname + '/public/7Pergunta.html'); // Substitua 'seuarquivo.html' pelo caminho do seu arquivo HTML
  });
  app.get('/Pergunta_8', (req, res) => {
    res.sendFile(__dirname + '/public/8Pergunta.html'); // Substitua 'seuarquivo.html' pelo caminho do seu arquivo HTML
  });
  app.get('/Pergunta_9', (req, res) => {
    res.sendFile(__dirname + '/public/9Pergunta.html'); // Substitua 'seuarquivo.html' pelo caminho do seu arquivo HTML
  });
  app.get('/Pergunta_10', (req, res) => {
    res.sendFile(__dirname + '/public/10Pergunta.html'); // Substitua 'seuarquivo.html' pelo caminho do seu arquivo HTML
  });
  app.get('/Pergunta_11', (req, res) => {
    res.sendFile(__dirname + '/public/11Pergunta.html'); // Substitua 'seuarquivo.html' pelo caminho do seu arquivo HTML
  });
  app.get('/Pergunta_12', (req, res) => {
    res.sendFile(__dirname + '/public/12Pergunta.html'); // Substitua 'seuarquivo.html' pelo caminho do seu arquivo HTML
  });
  app.get('/Pergunta_13', (req, res) => {
    res.sendFile(__dirname + '/public/13Pergunta.html'); // Substitua 'seuarquivo.html' pelo caminho do seu arquivo HTML
  });
  app.get('/Pergunta_14', (req, res) => {
    res.sendFile(__dirname + '/public/14Pergunta.html'); // Substitua 'seuarquivo.html' pelo caminho do seu arquivo HTML
  });
  app.get('/Pergunta_15', (req, res) => {
    res.sendFile(__dirname + '/public/15Pergunta.html'); // Substitua 'seuarquivo.html' pelo caminho do seu arquivo HTML
  });
  app.get('/Pergunta_16', (req, res) => {
    res.sendFile(__dirname + '/public/16Pergunta.html'); // Substitua 'seuarquivo.html' pelo caminho do seu arquivo HTML
  });
  app.get('/Pergunta_17', (req, res) => {
    res.sendFile(__dirname + '/public/17Pergunta.html'); // Substitua 'seuarquivo.html' pelo caminho do seu arquivo HTML
  });
  app.get('/Pergunta_18', (req, res) => {
    res.sendFile(__dirname + '/public/18Pergunta.html'); // Substitua 'seuarquivo.html' pelo caminho do seu arquivo HTML
  });
  app.get('/Pergunta_19', (req, res) => {
    res.sendFile(__dirname + '/public/19Pergunta.html'); // Substitua 'seuarquivo.html' pelo caminho do seu arquivo HTML
  });

  //começo
  app.post('/atualizar_status', (req, res) => {
    const { id, lucro, reputacao, concorrencia } = req.body;
    
    // Atualize os valores no banco de dados
    const sql = `UPDATE Status SET Lucro = ?, Reputação = ?, Concorrencia = ? WHERE Id = ?`;
  
    db.query(sql, [lucro, reputacao, concorrencia, id], (err, result) => {
      if (err) {
        console.error('Erro na atualização:', err);
        res.status(500).send('Erro na atualização.');
        return;
      }
      console.log('Atualização bem-sucedida:', result.affectedRows, 'linhas afetadas.');
      res.send('Atualização bem-sucedida.');
    });
  });

  app.get('/Dados', (req, res) => {
    // Consulta os dados no banco de dados (supondo que sua tabela seja chamada 'Status')
    db.query('select * from Status where id=1', (err, results) => {
      if (err) {
        console.error('Erro na consulta ao banco de dados:', err);
        return res.status(500).send('Erro na consulta ao banco de dados.');
      }
    
      results.forEach((result) => {
        dados = {
          id: result.Id,
          lucro: result.Lucro,
          reputacao: result.Reputação,
          concorrencia: result.Concorrencia,
        };
      });

      
     res.json(dados)
    });
  });


app.get('/Fim', (req, res) => {
    // Consulta os dados no banco de dados (supondo que sua tabela seja chamada 'Status')
    db.query('select * from Status where id=1', (err, results) => {
      if (err) {
        console.error('Erro na consulta ao banco de dados:', err);
        return res.status(500).send('Erro na consulta ao banco de dados.');
      }
    
      results.forEach((result) => {
        dados = {
          id: result.Id,
          lucro: result.Lucro,
          reputacao: result.Reputação,
          concorrencia: result.Concorrencia,
        };
      });

      // Renderiza a página 'dados.ejs' com os dados do banco de dados
     res.render('20Fim', dados)
    });
  });

// Inicie o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor Node.js rodando na porta ${port}`);
});
