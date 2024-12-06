-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 06-12-2024 a las 21:27:22
-- Versión del servidor: 9.1.0
-- Versión de PHP: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto_utn`
--
CREATE DATABASE IF NOT EXISTS `proyecto_utn` DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci;
USE `proyecto_utn`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `price` int NOT NULL,
  `quantity` int NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `name`, `description`, `price`, `quantity`, `img_id`) VALUES
(1, 'Medias de red', 'Panty doll importadas, talle universal, abarca de s a xxl, no forma pelotitas, color unico blanco, hechas de naylon', 5000, 30, NULL),
(2, 'Mochila pochita', 'Mochila peluche con forma de pochita del anime chainsaw man', 20000, 20, 'r85rttcrg4taooiradb0'),
(3, 'Buzo evangelion', 'Buzo negro con estampado del Eva-01 del anime evangilon', 30000, 40, 'xgg1g67h4dunph5kvhs8'),
(19, 'Sueter llorar', 'Sueter Cry\r\nHecho en máquina industrial \r\nCon costuras reforzadas \r\nTalle unico (equivale a un xl a xxl)\r\nLargo 75cm\r\nAncho 64cm\r\nLavar en frio', 40000, 10, 'jcveaw83fl7rfn2fy9mu'),
(20, 'Pullover Flama', 'Pullover Flama \r\nHecho en máquina industrial \r\nViene en modelo unico \r\nTalle xl oversize \r\nMEDIDAS\r\nLargo 74cm\r\nAncho 63cm', 20000, 30, 'nnkmk3grdttuyikluvbg'),
(21, 'Pupilentes Black Doll', 'Pupilentes Black Doll importados \r\nTrabajamos con una de las mejores marcas en lentes de contacto marca Novmas\r\nColor: negro\r\nDiametro:14.5\r\nDuración anual', 5000, 100, 'mpzz9e4twosz6q6u3hym');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'tomas', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
