import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class creatImages1674057190236 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'images',
            columns: [
              {
                name: 'id',
                type: 'integer',
                unsigned: true,
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'path',
                type: 'varchar',
              },
              {
                name: 'point_id',
                type: 'integer',
              }
            ],
            foreignKeys: [
              {
                name: 'imagePoint',
                columnNames: ['point_id'],
                referencedTableName: 'points',
                referencedColumnNames: ['id'],
                onUpdate: 'CASCADE', 
                onDelete: 'CASCADE',
              }
            ]
          }))
       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images');
    }

}
