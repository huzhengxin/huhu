#设置客户端连接使用的编码
SET NAMES UTF8;
#丢弃数据库xuezi，如果存在
DROP DATABASE IF EXISTS xiaomi;
#创建数据库，存储的编码
CREATE DATABASE xiaomi CHARSET=UTF8;
#进入该数据库
USE xiaomi;
#创建数据表
CREATE TABLE laptop_family(
  fid SMALLINT PRIMARY KEY,
  fname VARCHAR(16) UNIQUE NOT NULL,
  laptopCount SMALLINT NOT NULL
);
#插入数据库
INSERT INTO laptop_family VALUES(10,'戴尔燃700',3),