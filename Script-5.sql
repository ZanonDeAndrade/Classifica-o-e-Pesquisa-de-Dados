CREATE TABLE Dim_Cliente (
    cliente_sk_id SERIAL PRIMARY KEY,        
    cliente_id INT NOT NULL,                 
    nome VARCHAR(100) NOT NULL,
    endereco VARCHAR(200),
    cidade VARCHAR(50),
    estado VARCHAR(50),
    data_inicio DATE NOT NULL,               
    data_fim DATE                            
);

CREATE TABLE Dim_Centro (
    centro_sk_id SERIAL PRIMARY KEY,         
    centro_id INT NOT NULL,                  
    nome VARCHAR(100) NOT NULL,
    endereco VARCHAR(200),
    cidade VARCHAR(50),
    estado VARCHAR(50),
    data_inicio DATE NOT NULL,               
    data_fim DATE                            
);



CREATE TABLE Dim_Tempo (
    data DATE PRIMARY KEY,                   
    mes INT NOT NULL,
    ano INT NOT NULL,
    trimestre INT NOT NULL,
    dia_da_semana VARCHAR(50) NOT NULL
);



CREATE TABLE Fato_Entregas (
    entrega_id SERIAL PRIMARY KEY,           
    pedido_id INT NOT NULL,                  
    data_saida DATE NOT NULL,
    data_chegada DATE,
    quilometragem INT NOT NULL,
    quantidade INT NOT NULL,                 
    valor_total DECIMAL(10, 2) NOT NULL,     
    cliente_sk_id INT NOT NULL REFERENCES Dim_Cliente(cliente_sk_id),
    centro_saida_sk_id INT NOT NULL REFERENCES Dim_Centro(centro_sk_id),
    centro_destino_sk_id INT NOT NULL REFERENCES Dim_Centro(centro_sk_id)
);



INSERT INTO Dim_Cliente (cliente_id, nome, endereco, cidade, estado, data_inicio, data_fim)
VALUES 
(1, 'João Silva', 'Rua das Flores, 123', 'Porto Alegre', 'RS', '2022-01-01', NULL),
(2, 'Maria Oliveira', 'Avenida Brasil, 456', 'Caxias do Sul', 'RS', '2021-05-15', NULL),
(3, 'Carlos Pereira', 'Rua dos Pioneiros, 789', 'Santa Maria', 'RS', '2023-07-10', NULL);

INSERT INTO Dim_Centro (centro_id, nome, endereco, cidade, estado, data_inicio, data_fim)
VALUES 
(1, 'Centro Logístico Norte', 'Av. Afonso Pena, 101', 'Porto Alegre', 'RS', '2020-06-01', NULL),
(2, 'Centro Logístico Sul', 'Rua Marechal Floriano, 202', 'Caxias do Sul', 'RS', '2021-03-10', NULL),
(3, 'Centro Logístico Oeste', 'Rua das Indústrias, 303', 'Santa Maria', 'RS', '2022-11-20', NULL);

INSERT INTO Dim_Tempo (data, mes, ano, trimestre, dia_da_semana)
VALUES 
('2024-11-01', 11, 2024, 4, 'sexta-feira'),
('2024-11-02', 11, 2024, 4, 'sábado'),
('2024-11-03', 11, 2024, 4, 'domingo');



INSERT INTO Fato_Entregas (pedido_id, data_saida, data_chegada, quilometragem, quantidade, valor_total, cliente_sk_id, centro_saida_sk_id, centro_destino_sk_id)
VALUES 
(1001, '2024-10-30', '2024-11-02', 120, 50, 250.00, 1, 1, 2),
(1002, '2024-10-28', '2024-11-03', 150, 30, 320.00, 2, 2, 3),
(1003, '2024-10-29', '2024-11-01', 180, 40, 400.00, 3, 3, 1);


SELECT 
    SUM(quantidade) AS total_produtos_transportados,
    SUM(DATE_PART('day', data_chegada - data_saida)) AS tempo_total_entrega
FROM 
    Fato_Entregas;


SELECT 
    pedido_id,
    AVG(DATE_PART('day', data_chegada - data_saida)) AS tempo_medio_entrega
FROM 
    Fato_Entregas
GROUP BY 
    pedido_id;


SELECT 
    AVG(valor_total / NULLIF(quilometragem, 0)) AS custo_medio_por_km
FROM 
    Fato_Entregas;


UPDATE Dim_Cliente
SET data_fim = CURRENT_DATE
WHERE cliente_id = 1 AND data_fim IS NULL;

INSERT INTO Dim_Cliente (cliente_id, nome, endereco, cidade, estado, data_inicio, data_fim)
VALUES (1, 'João Silva', 'Novo Endereço', 'Nova Cidade', 'RS', CURRENT_DATE, NULL);


