import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1703600175308 implements MigrationInterface {
    name = 'MyMigration1703600175308'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "national" ("id" SERIAL NOT NULL, "national" character varying NOT NULL, CONSTRAINT "PK_b52979b8a0078d66f3f1b42fd12" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "national"`);
    }

}
