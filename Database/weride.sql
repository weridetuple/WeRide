CREATE TABLE USER_ACCOUNT (
    userID CHAR(16),
    email VARCHAR(100),
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    imageURL VARCHAR(200),
    dateOfBirth DATE,
    department VARCHAR(100),
    rating FLOAT DEFAULT 5,
    PRIMARY KEY(userID));

CREATE TABLE DRIVER (
    userID CHAR(16) NOT NULL,
    PRIMARY KEY(userID),
    FOREIGN KEY(userID) REFERENCES USER_ACCOUNT(userID));

CREATE TABLE DRIVE_CARPOOL (
    driverID CHAR(16) NOT NULL,
    carpoolID CHAR(16) NOT NULL,
    PRIMARY KEY(driverID, carpoolID),
    FOREIGN KEY(driverID) REFERENCES USER_ACCOUNT(userID),
    FOREIGN KEY(carpoolID) REFERENCES CARPOOL(transportationID));

CREATE TABLE PASSENGER (
    userID CHAR(16) NOT NULL,
    PRIMARY KEY(userID),
    FOREIGN KEY(userID) REFERENCES USER_ACCOUNT(userID));

CREATE TABLE TAKE_CARPOOL (
    passengerID CHAR(16) NOT NULL,
    carpoolID CHAR(16) NOT NULL,
    estimatedPickUpTime TIME,
    approved BOOLEAN,
    timeRequested TIMESTAMP,
    PRIMARY KEY(passengerID, carpoolID),
    FOREIGN KEY(passengerID) REFERENCES USER_ACCOUNT(userID),
    FOREIGN KEY(carpoolID) REFERENCES CARPOOL(transportationID));

CREATE TABLE CARPOOL (
    transportationID CHAR(16),
    passengerRating FLOAT DEFAULT 5,
    driverRating FLOAT  DEFAULT 5,
    passengerCount INTEGER,
    PRIMARY KEY(transportationID),
    FOREIGN KEY(transportationID) REFERENCES TRANSPORTATION(transportationID));

CREATE TABLE TRANSPORTATION (
    transportationID CHAR(16),
    startDate DATE,
    endDate DATE,
    estimatePickUpTime TIME,
    currentState VARCHAR(15),
    PRIMARY KEY(transportationID));

CREATE TABLE SCHEDULE_HAS_TRANSPORTATION (
    userID CHAR(16) NOT NULL,
    arrivingTime TIME NOT NULL,
    scheduleDate DATE NOT NULL,
    morningOrEvening CHAR(7) NOT NULL,
    transportationID CHAR(16) NOT NULL,
    #TODO
)

CREATE TABLE SCHEDULE (
    userID CHAR(16) NOT NULL,
    transportationType VARCHAR(10),
    arrivingTime TIME,
    scheduleDate DATE,
    morningOrEvening CHAR(7),
    transportationID CHAR(16),
    PRIMARY KEY(userID, arrivingTime, dayOfWeek, morningOrEvening),
    FOREIGN KEY(userID) REFERENCES USER_ACCOUNT(userID));

CREATE TABLE PHONE (
    phoneNum VARCHAR(15),
    phoneType VARCHAR(10),
    userID CHAR(16) NOT NULL,
    PRIMARY KEY(userID, phoneNum),
    FOREIGN KEY(userID) REFERENCES USER_ACCOUNT(userID));

CREATE TABLE PLACE (
    placeID CHAR(16),
    address1 VARCHAR(100),
    address2 VARCHAR(100),
    stateValue VARCHAR(50),
	city VARCHAR(50),
	zipcode CHAR(5),
    PRIMARY KEY(placeID));

CREATE TABLE USER_HAS_HOME (
    userID CHAR(16) NOT NULL,
    placeID CHAR(16) NOT NULL,
    PRIMARY KEY(userID, placeID),
    FOREIGN KEY(userID) REFERENCES USER_ACCOUNT(userID),
    FOREIGN KEY(placeID) REFERENCES PLACE(placeID));

CREATE TABLE SCHEDULE_HAS_PLACE (

)
