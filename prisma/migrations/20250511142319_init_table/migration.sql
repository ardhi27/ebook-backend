/*
  Warnings:

  - Added the required column `userRole` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `userRole` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `BooksAuthor` (
    `authorId` INTEGER NOT NULL AUTO_INCREMENT,
    `author` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`authorId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Books` (
    `booksId` INTEGER NOT NULL AUTO_INCREMENT,
    `booksName` VARCHAR(50) NOT NULL,
    `booksAuthor` VARCHAR(191) NOT NULL,
    `authorId` INTEGER NOT NULL,
    `categoryId` INTEGER NOT NULL,

    PRIMARY KEY (`booksId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rental` (
    `rentalId` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `booksId` INTEGER NOT NULL,
    `rentalDate` DATETIME(3) NOT NULL,
    `returnDate` DATETIME(3) NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`rentalId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Books` ADD CONSTRAINT `Books_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `BooksAuthor`(`authorId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Books` ADD CONSTRAINT `Books_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `BooksCategory`(`categoryId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rental` ADD CONSTRAINT `Rental_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rental` ADD CONSTRAINT `Rental_booksId_fkey` FOREIGN KEY (`booksId`) REFERENCES `Books`(`booksId`) ON DELETE RESTRICT ON UPDATE CASCADE;
