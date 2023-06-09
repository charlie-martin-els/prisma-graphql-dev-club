/*
  Warnings:

  - The primary key for the `Team` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Team` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - A unique constraint covering the columns `[id]` on the table `Team` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Team` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Team_id_key` ON `Team`(`id`);
