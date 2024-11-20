const readline = require('readline');
const MotorBuscaJogos = require('./MotorBuscaJogos');
const Jogo = require('./Jogo');

// Cores para a formatação
const cor = {
  reset: '\x1b[0m',
  verde: '\x1b[32m',
  vermelho: '\x1b[31m',
  azul: '\x1b[34m',
  amarelo: '\x1b[33m',
  ciano: '\x1b[36m',
  roxo: '\x1b[35m',
  branco: '\x1b[37m',
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const motor = new MotorBuscaJogos();

// Função para mostrar o menu e obter a opção do usuário
function exibirMenu() {
  console.clear(); // Limpa o terminal
  console.log(`${cor.azul}\n===========================`);
  console.log("   MENU DE BUSCA DE JOGOS");
  console.log("===========================" + cor.reset);
  console.log(`${cor.ciano}1.${cor.reset} Buscar por preço`);
  console.log(`${cor.ciano}2.${cor.reset} Buscar por faixa de preço`);
  console.log(`${cor.ciano}3.${cor.reset} Buscar por gênero`);
  console.log(`${cor.amarelo}4.${cor.reset} Sair`);
  console.log(""); // Espaço extra entre o menu e a entrada

  rl.question("Digite sua opção: ", function (opcao) {
    switch (opcao) {
      case '1':
        buscarPorPreco();
        break;
      case '2':
        buscarPorFaixaDePreco();
        break;
      case '3':
        buscarPorGenero();
        break;
      case '4':
        console.log(`${cor.verde}\nObrigado por usar o sistema! Até mais!${cor.reset}`);
        rl.close();
        break;
      default:
        console.log(`${cor.vermelho}\n⚠️ Opção inválida. Por favor, tente novamente.${cor.reset}`);
        exibirMenu();
        break;
    }
  });
}

// Função para buscar jogos por preço
function buscarPorPreco() {
  console.clear(); // Limpa o terminal
  console.log(`${cor.roxo}\n===========================`);
  console.log("  Buscar por preço do jogo");
  console.log("===========================" + cor.reset);

  rl.question("Digite o preço do jogo (exemplo: 100): R$ ", function (preco) {
    preco = parseInt(preco);
    const jogo = motor.buscarPorPreco(preco);
    if (jogo) {
      console.log(`\n${cor.verde}✔️ Jogo encontrado: ${jogo.titulo} - R$${jogo.preco}${cor.reset}`);
    } else {
      console.log(`${cor.vermelho}\n❌ Nenhum jogo encontrado com esse preço.${cor.reset}`);
    }
    rl.question("\nPressione Enter para voltar ao menu...", () => exibirMenu());
  });
}

// Função para buscar jogos por faixa de preço
function buscarPorFaixaDePreco() {
  console.clear(); // Limpa o terminal
  console.log(`${cor.roxo}\n==============================`);
  console.log("  Buscar jogos por faixa de preço");
  console.log("===============================" + cor.reset);

  rl.question("Digite o preço mínimo: R$ ", function (min) {
    rl.question("Digite o preço máximo: R$ ", function (max) {
      min = parseInt(min);
      max = parseInt(max);
      const jogos = motor.buscarPorFaixaPreco(min, max);
      if (jogos.length > 0) {
        console.log(`${cor.verde}\n✔️ Jogos encontrados na faixa de preço:${cor.reset}`);
        jogos.forEach(jogo => {
          console.log(`${cor.branco}- ${jogo.titulo} - R$${jogo.preco}${cor.reset}`);
        });
      } else {
        console.log(`${cor.vermelho}\n❌ Nenhum jogo encontrado nessa faixa de preço.${cor.reset}`);
      }
      rl.question("\nPressione Enter para voltar ao menu...", () => exibirMenu());
    });
  });
}

// Função para buscar jogos por gênero
function buscarPorGenero() {
  console.clear(); // Limpa o terminal
  console.log(`${cor.roxo}\n===========================`);
  console.log("  Buscar jogos por gênero");
  console.log("===========================" + cor.reset);

  rl.question("Digite o gênero do jogo (exemplo: Aventura): ", function (genero) {
    const jogos = motor.buscarPorGenero(genero.toLowerCase()); // Converte para minúsculas
    if (jogos.length > 0) {
      console.log(`${cor.verde}\n✔️ Jogos encontrados no gênero:${cor.reset}`);
      jogos.forEach(jogo => {
        console.log(`${cor.branco}- ${jogo.titulo} - R$${jogo.preco}${cor.reset}`);
      });
    } else {
      console.log(`${cor.vermelho}\n❌ Nenhum jogo encontrado nesse gênero.${cor.reset}`);
    }
    rl.question("\nPressione Enter para voltar ao menu...", () => exibirMenu());
  });
}

// Adicionando jogos para teste
motor.adicionarJogo(new Jogo(1, 'The Witcher 3: Wild Hunt', 'CD Projekt Red', 120, ['RPG', 'Aventura']));
motor.adicionarJogo(new Jogo(2, 'Minecraft', 'Mojang', 30, ['Aventura', 'Construção']));
motor.adicionarJogo(new Jogo(3, 'Grand Theft Auto V', 'Rockstar Games', 60, ['Ação', 'Aventura']));
motor.adicionarJogo(new Jogo(4, 'The Legend of Zelda: Breath of the Wild', 'Nintendo', 60, ['Aventura', 'RPG']));
motor.adicionarJogo(new Jogo(5, 'Cyberpunk 2077', 'CD Projekt Red', 50, ['RPG', 'Ação']));
motor.adicionarJogo(new Jogo(6, 'Red Dead Redemption 2', 'Rockstar Games', 60, ['Ação', 'Aventura']));
motor.adicionarJogo(new Jogo(7, 'Fortnite', 'Epic Games', 0, ['Ação', 'Battle Royale']));
motor.adicionarJogo(new Jogo(8, 'Call of Duty: Modern Warfare II', 'Infinity Ward', 70, ['Ação', 'FPS']));
motor.adicionarJogo(new Jogo(9, 'Valorant', 'Riot Games', 0, ['Ação', 'FPS']));
motor.adicionarJogo(new Jogo(10, 'Among Us', 'InnerSloth', 5, ['Multiplayer', 'Aventura']));
motor.adicionarJogo(new Jogo(11, 'Hades', 'Supergiant Games', 25, ['Ação', 'RPG']));
motor.adicionarJogo(new Jogo(12, 'Fall Guys', 'Mediatonic', 20, ['Multiplayer', 'Plataforma']));
motor.adicionarJogo(new Jogo(13, 'FIFA 23', 'EA Sports', 60, ['Esporte', 'Futebol']));
motor.adicionarJogo(new Jogo(14, 'Rocket League', 'Psyonix', 20, ['Esporte', 'Futebol']));
motor.adicionarJogo(new Jogo(15, 'Apex Legends', 'Respawn Entertainment', 0, ['Battle Royale', 'Ação']));
motor.adicionarJogo(new Jogo(16, 'Doom Eternal', 'id Software', 60, ['Ação', 'FPS']));
motor.adicionarJogo(new Jogo(17, 'Monster Hunter: World', 'Capcom', 40, ['Ação', 'RPG']));
motor.adicionarJogo(new Jogo(18, 'Overwatch 2', 'Blizzard Entertainment', 0, ['Ação', 'FPS']));
motor.adicionarJogo(new Jogo(19, 'Assassin’s Creed Valhalla', 'Ubisoft', 60, ['Ação', 'Aventura']));
motor.adicionarJogo(new Jogo(20, 'Sekiro: Shadows Die Twice', 'FromSoftware', 60, ['Ação', 'RPG']));
motor.adicionarJogo(new Jogo(21, 'Bloodborne', 'FromSoftware', 40, ['Ação', 'RPG']));
motor.adicionarJogo(new Jogo(22, 'The Elder Scrolls V: Skyrim', 'Bethesda', 40, ['RPG', 'Aventura']));
motor.adicionarJogo(new Jogo(23, 'Persona 5', 'Atlus', 60, ['RPG', 'Aventura']));
motor.adicionarJogo(new Jogo(24, 'Dark Souls III', 'FromSoftware', 40, ['Ação', 'RPG']));
motor.adicionarJogo(new Jogo(25, 'Gears 5', 'The Coalition', 40, ['Ação', 'FPS']));
motor.adicionarJogo(new Jogo(26, 'Spiderman: Miles Morales', 'Insomniac Games', 50, ['Ação', 'Aventura']));
motor.adicionarJogo(new Jogo(27, 'Horizon Zero Dawn', 'Guerrilla Games', 50, ['Aventura', 'RPG']));
motor.adicionarJogo(new Jogo(28, 'God of War', 'Santa Monica Studio', 50, ['Ação', 'Aventura']));
motor.adicionarJogo(new Jogo(29, 'Tomb Raider', 'Crystal Dynamics', 40, ['Aventura', 'Ação']));
motor.adicionarJogo(new Jogo(30, 'Far Cry 5', 'Ubisoft', 40, ['Ação', 'FPS']));
motor.adicionarJogo(new Jogo(31, 'The Sims 4', 'Maxis', 40, ['Simulação', 'Estratégia']));
motor.adicionarJogo(new Jogo(32, 'Stardew Valley', 'ConcernedApe', 15, ['Simulação', 'Aventura']));
motor.adicionarJogo(new Jogo(33, 'Civilization VI', 'Firaxis Games', 60, ['Estratégia', 'Simulação']));
motor.adicionarJogo(new Jogo(34, 'SimCity', 'Maxis', 40, ['Simulação', 'Estratégia']));
motor.adicionarJogo(new Jogo(35, 'Cities: Skylines', 'Colossal Order', 40, ['Simulação', 'Estratégia']));
motor.adicionarJogo(new Jogo(36, 'World of Warcraft', 'Blizzard Entertainment', 0, ['MMORPG', 'RPG']));
motor.adicionarJogo(new Jogo(37, 'Minecraft Dungeons', 'Mojang', 20, ['Ação', 'Aventura']));
motor.adicionarJogo(new Jogo(38, 'Dead by Daylight', 'Behaviour Interactive', 20, ['Horror', 'Multiplayer']));
motor.adicionarJogo(new Jogo(39, 'The Forest', 'Endnight Games', 20, ['Sobrevivência', 'Horror']));
motor.adicionarJogo(new Jogo(40, 'Phasmophobia', 'Kinetic Games', 13, ['Horror', 'Multiplayer']));
motor.adicionarJogo(new Jogo(41, 'Resident Evil Village', 'Capcom', 60, ['Horror', 'Aventura']));
motor.adicionarJogo(new Jogo(42, 'Outlast 2', 'Red Barrels', 20, ['Horror', 'Aventura']));
motor.adicionarJogo(new Jogo(43, 'Unravel', 'Coldwood Interactive', 20, ['Aventura', 'Plataforma']));
motor.adicionarJogo(new Jogo(44, 'Little Nightmares II', 'Tarsier Studios', 30, ['Horror', 'Plataforma']));
motor.adicionarJogo(new Jogo(45, 'The Last of Us Part II', 'Naughty Dog', 60, ['Aventura', 'Ação']));
motor.adicionarJogo(new Jogo(46, 'Final Fantasy XV', 'Square Enix', 40, ['RPG', 'Aventura']));
motor.adicionarJogo(new Jogo(47, 'Monster Hunter Rise', 'Capcom', 40, ['Ação', 'RPG']));
motor.adicionarJogo(new Jogo(48, 'Bioshock Infinite', 'Irrational Games', 20, ['Ação', 'FPS']));
motor.adicionarJogo(new Jogo(49, 'Half-Life: Alyx', 'Valve', 60, ['FPS', 'Aventura']));
motor.adicionarJogo(new Jogo(50, 'Borderlands 3', 'Gearbox Software', 40, ['Ação', 'FPS']));

// Exibe o menu
exibirMenu();
