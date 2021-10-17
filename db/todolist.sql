-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : Dim 23 mai 2021 à 17:04
-- Version du serveur :  10.4.17-MariaDB
-- Version de PHP : 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `todolist`
--

-- --------------------------------------------------------

--
-- Structure de la table `tache`
--

CREATE TABLE `tache` (
  `idtache` int(11) NOT NULL,
  `nom` varchar(45) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `utilisateur_idutilisateur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `tache`
--

INSERT INTO `tache` (`idtache`, `nom`, `description`, `date`, `utilisateur_idutilisateur`) VALUES
(19, 'faire une video linkdin', 'parler du projejt de to do list pour plusieurs personne', '2021-05-23 10:01:00', 4),
(20, '\"test\"', '\"tachetest12\"', '2021-05-23 10:34:04', 14),
(21, '\"nouvelle \"', '\"description nouvelle tache\"', '2021-05-23 10:10:04', 4),
(22, '\"test\"', '\"tachetest12\"', '2021-05-23 10:11:13', 14),
(23, '\"test\"', '\"tachetest12\"', '2021-05-23 10:34:01', 14);

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `idutilisateur` int(11) NOT NULL,
  `nom` varchar(45) DEFAULT NULL,
  `prenom` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `motdepasse` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`idutilisateur`, `nom`, `prenom`, `email`, `motdepasse`) VALUES
(1, 'clotilde', 'kriss', 'kriss.clotilde@gmail.com', '12'),
(2, 'test', 'eee', 'dd', '$2a$10$2HkaHM0sdSAGtuKbo/0wt.t49YZop0reXJ0pBt'),
(3, 'test', 'eee', 'dd3', '$2a$10$zJwAjwIuf9zp673MMzudeewjGSH7cQ2D5nKs7COYdijyhQ1xtT10.'),
(4, NULL, NULL, 'test10', '$2a$10$8ZXhfDpryiEP/JmpLCDNseAShRfrh0a0lXWMStRwR9Iq7U1w/ufN2'),
(5, NULL, NULL, 'test10', '$2a$10$x76871lqOXeyOGdlHiwReOUXnVrgZY4prAXIe/BHSpg60UIWsatJ2'),
(6, NULL, NULL, 'test10', '$2a$10$iaMWg913bRYuhxcIIoXI3OqKvmGNqvjKYT7kZHWT8aN6Q5gCkbUaO'),
(7, NULL, NULL, 'test10', '$2a$10$0ZgRHRwJdjU5mGW4ixVWCOy9qif67VZrmsUPF3bu3jXlVCz5RgudO'),
(8, NULL, NULL, 'test10', '$2a$10$QYh1F7ikhQwXsiw/eb2mseFhnlgrMWS0pvZXQ4/.gWw9ZBma1c.s.'),
(9, NULL, NULL, 'test10', '$2a$10$KskBrWNQACLS0xYWvWg6r.4PI6iq9tY.nPhDBSdCRCdX/Ed4AcY7m'),
(10, NULL, NULL, 'test10', '$2a$10$fuKCjiRFbda1nmU2Grja/.HwT0e1O0UHbzwGUcj7p/a47ydgMjj8.'),
(11, NULL, NULL, 'test10', '$2a$10$MMEKHbUAOSUHlh7Ngj.74uptriSUOTzkUx6.fspHpPD5RPCfHdr0O'),
(12, NULL, NULL, 'test10', '$2a$10$jp8ZHQQsXfPQS3a/XGx2UeJF55Pu9.K7E1yMaf.DFcdI5n0eSwhRa'),
(13, NULL, NULL, 'test10', '$2a$10$73PSFsrVE0pygEakBg0xouq2sFZYu39K30O67Tj.K0XG3MYmMddei'),
(14, NULL, NULL, 'test12', '$2a$10$.Q6bepT1x0xeJr6.ll5EOeyqsHU.uvSTuwbnZpS/5Z7AoKMcAZK2W'),
(15, NULL, NULL, 'test10', '$2a$10$FTLn6p8t6pXjv5AwyzqWIehdd2yWOS5MO45pCSNj/BQUoW7q5Wdya'),
(16, NULL, NULL, 'test10', '$2a$10$oQyqwYA59avVXZqdI3iaPeN0IIIb9NZWAHTAA52WtJrNN4GILvMFa'),
(17, NULL, NULL, 'test10', '$2a$10$JpSArhDdd0Xhp/qWcSgaQORhYJkMpmLak26hPq.xLpvuQIGcSWgAu'),
(18, NULL, NULL, 'test10', '$2a$10$H7nfYRpk.w9mEGE6AccW.eVqdiDkOBf71h5Yoy.b6WthmiLspKuDa'),
(19, NULL, NULL, 'test10', '$2a$10$mgAWPjUqL.TEy43VZowvYOjSa36I8aToLSzgl5ofEJWEmz15C0NYG'),
(20, NULL, NULL, 'test12', '$2a$10$bGV6LGa5KsZjX9z48Z9MmuCvCCe9nTPfSWpPDMyr.mTAV4NX8Bora'),
(21, NULL, NULL, 'test10', '$2a$10$ls5FuuZn1HjHqjYb9FV1Q.1S4QMRSF2DlfnVqjZ6avavl/azD9vZe');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `tache`
--
ALTER TABLE `tache`
  ADD PRIMARY KEY (`idtache`,`utilisateur_idutilisateur`),
  ADD KEY `fk_tache_utilisateur_idx` (`utilisateur_idutilisateur`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`idutilisateur`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `tache`
--
ALTER TABLE `tache`
  MODIFY `idtache` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `idutilisateur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `tache`
--
ALTER TABLE `tache`
  ADD CONSTRAINT `fk_tache_utilisateur` FOREIGN KEY (`utilisateur_idutilisateur`) REFERENCES `utilisateur` (`idutilisateur`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
