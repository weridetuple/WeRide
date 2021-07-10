CREATE TABLE USER_ACCOUNT (
    userID CHAR(16),
    email VARCHAR(100),
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    imageURL VARCHAR(200),
    dateOfBirth DATE,
    department VARCHAR(100),
    rating FLOAT,
    PRIMARY KEY(userID));

CREATE TABLE PHONE (
    phoneNum VARCHAR(15),
    phoneType VARCHAR(10),
    userID CHAR(16),
    PRIMARY KEY(userID, phoneNum),
    FOREIGN KEY(userID) REFERENCES USER_ACCOUNT(userID));

CREATE TABLE DRIVER (
    userID CHAR(16),
    carpoolID CHAR(16),
    placeID CHAR(16),
    PRIMARY KEY(carpoolID),
    FOREIGN KEY(userID) REFERENCES USER_ACCOUNT(userID),
    FOREIGN KEY(carpoolID) REFERENCES CARPOOL(carpoolID),
    FOREIGN KEY(placeID) REFERENCES PLACE(placeID));

CREATE TABLE PASSENGER (
    userID CHAR(16),
    carpoolID CHAR(16),
    placeID CHAR(16),
    estimatedPickUpTime TIME,
    approved BOOLEAN,
    timeRequested TIMESTAMP,
    PRIMARY KEY(userID, carpoolID),
    FOREIGN KEY(userID) REFERENCES USER_ACCOUNT(userID),
    FOREIGN KEY(carpoolID) REFERENCES CARPOOL(carpoolID),
    FOREIGN KEY(placeID) REFERENCES PLACE(placeID));

CREATE TABLE PLACE (
    placeID CHAR(16),
    address1 VARCHAR(100),
    address2 VARCHAR(100),
    stateValue VARCHAR(50),
	city VARCHAR(50),
	zipcode CHAR(5),
    PRIMARY KEY(placeID));

CREATE TABLE CARPOOL (
    carpoolid character(16) COLLATE pg_catalog."default" NOT NULL,
    passengerrating double precision,
    driverrating double precision,
    passengercount integer,
    CONSTRAINT carpool_pkey PRIMARY KEY (carpoolid));
