

use EventManagement;

CREATE TABLE Event (
    ID int NOT NULL Identity(1,1),
    EventName varchar(100),
    Description varchar(250),
    Price float,
	Discount float,
    PRIMARY KEY (ID)
);

-- Insrted values to table


insert into dbo.[Event] values ('Talent Show','This is a dancing show',98.00,10)
insert into dbo.[Event] values ('Magazine Event','This is a magazine event',98.00,10)
insert into dbo.[Event] values ('Cooking Show','This is a cooking event',198.00,20)

