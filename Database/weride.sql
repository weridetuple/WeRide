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

CREATE TABLE SCHEDULE (
    userID CHAR(16),
    transportationType VARCHAR(10),
    time TIME,
    dayOfWeek VARCHAR(10),
    morningOrEvening CHAR(7),
    PRIMARY KEY(userID, time, dayOfWeek, morningOrEvening),
    FOREIGN KEY(userID) REFERENCES USER_ACCOUNT(userID));

CREATE TABLE PHONE (
    phoneNum VARCHAR(15),
    phoneType VARCHAR(10),
    userID CHAR(16),
    PRIMARY KEY(userID, phoneNum),
    FOREIGN KEY(userID) REFERENCES USER_ACCOUNT(userID));

CREATE TABLE DRIVER (
    userID CHAR(16),
    transportationID CHAR(16),
    placeID CHAR(16),
    PRIMARY KEY(transportationID),
    FOREIGN KEY(userID) REFERENCES USER_ACCOUNT(userID),
    FOREIGN KEY(transportationID) REFERENCES CARPOOL(transportationID),
    FOREIGN KEY(placeID) REFERENCES PLACE(placeID));

CREATE TABLE PASSENGER (
    userID CHAR(16),
    transportationID CHAR(16),
    placeID CHAR(16),
    estimatedPickUpTime TIME,
    approved BOOLEAN,
    timeRequested TIMESTAMP,
    PRIMARY KEY(userID, transportationID),
    FOREIGN KEY(userID) REFERENCES USER_ACCOUNT(userID),
    FOREIGN KEY(transportationID) REFERENCES CARPOOL(transportationID),
    FOREIGN KEY(placeID) REFERENCES PLACE(placeID));

CREATE TABLE PLACE (
    placeID CHAR(16),
    address1 VARCHAR(100),
    address2 VARCHAR(100),
    stateValue VARCHAR(50),
	city VARCHAR(50),
	zipcode CHAR(5),
    PRIMARY KEY(placeID));

CREATE TABLE TRANSPORTATION (
    transportationID CHAR(16),
    startDate DATE,
    endDate DATE,
    arriveTime TIMESTAMP,
    dayOfWeek DATE,
    PRIMARY KEY(transportationID));
)

CREATE TABLE CARPOOL (
    transportationID CHAR(16),
    passengerRating FLOAT,
    driverRating FLOAT,
    passengerCount INTEGER,
    PRIMARY KEY(transportationID));
