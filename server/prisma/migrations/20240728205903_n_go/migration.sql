-- DropIndex
DROP INDEX `Category_name_key` ON `category`;

-- AlterTable
ALTER TABLE `category` MODIFY `phone` VARCHAR(191) NOT NULL;
