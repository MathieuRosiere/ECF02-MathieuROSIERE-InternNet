create database if not exists internnet;

use internnet;

create table if not exists Company (
    id int not null auto_increment primary key,
    name varchar(50) not null,
    details varchar(100) not null,
    localisation varchar(50) not null
);

create table if not exists Intership (
    id int not null auto_increment primary key,
    title varchar(50) not null,
    details varchar(100) not null,
    start datetime,
    end datetime,
    company_id int not null,
    constraint fk_company_id foreign key(company_id) references Company(id)
);




