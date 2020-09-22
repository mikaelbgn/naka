TRUNCATE TABLE item_categories;
TRUNCATE TABLE item;
TRUNCATE TABLE categorie;
TRUNCATE TABLE typemedia;
TRUNCATE TABLE episode;

INSERT INTO typemedia(libelle) VALUES ('Twitter');
INSERT INTO typemedia(libelle) VALUES ('Facebook');
INSERT INTO typemedia(libelle) VALUES ('YouTube');
INSERT INTO typemedia(libelle) VALUES ('Reddit');
INSERT INTO typemedia(libelle) VALUES ('Instagram');
INSERT INTO typemedia(libelle) VALUES ('Riot');


INSERT INTO categorie(nom) VALUES ('League of Legends');
INSERT INTO categorie(nom) VALUES ('Worlds 2020');
INSERT INTO categorie(nom) VALUES ('LoL PBE');
INSERT INTO categorie(nom) VALUES ('KDA');
INSERT INTO categorie(nom) VALUES ('TFT');
INSERT INTO categorie(nom) VALUES ('TellStones');
INSERT INTO categorie(nom) VALUES ('Valorant');
INSERT INTO categorie(nom) VALUES ('Legends of Runeterra');
INSERT INTO categorie(nom) VALUES ('Valorant');


INSERT INTO episode(numero) VALUES (1);
INSERT INTO episode(numero) VALUES (2);
INSERT INTO episode(numero) VALUES (3);


INSERT INTO item(libelle, lien, episode_id, type_media_id) VALUES ('Item 1', 'http://www.lien1.com', 1, 1);
INSERT INTO item(libelle, lien, episode_id, type_media_id) VALUES ('Item 2', 'http://www.lien2.com', 2, 2);
INSERT INTO item(libelle, lien, episode_id, type_media_id) VALUES ('Item 3', 'http://www.lien3.com', 3, 3);



INSERT INTO item_categories(item_id, categories_id) VALUES (1, 1);
INSERT INTO item_categories(item_id, categories_id) VALUES (1, 2);
INSERT INTO item_categories(item_id, categories_id) VALUES (1, 3);
INSERT INTO item_categories(item_id, categories_id) VALUES (2, 4);
INSERT INTO item_categories(item_id, categories_id) VALUES (2, 5);
INSERT INTO item_categories(item_id, categories_id) VALUES (2, 6);
INSERT INTO item_categories(item_id, categories_id) VALUES (3, 7);
INSERT INTO item_categories(item_id, categories_id) VALUES (3, 8);
INSERT INTO item_categories(item_id, categories_id) VALUES (3, 9);

