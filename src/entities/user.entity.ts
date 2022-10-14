// src/entities/user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

/*
  O decorator "Entity" recebe o nome da tabela a qual essa entidade representa.
*/
@Entity("users")
export class User {
  /*
    O decorator PrimaryGeneratedColumn refencia a "PRIMARY KEY" que também é gerada automaticamente,
    nesse caso estamos passando o "increment" para o decorator, isso quer dizer que essa coluna é um "BIGSERIAL".

    Por ele ser um BIGSERIAL a tipagem do id precisa ser um "number"!

  */
  @PrimaryGeneratedColumn("increment")
  readonly id: number;
  // O readonly é uma propriedade do typescript que impede a alteração de um campo.

  /*
    O decorator "Column" referencia uma coluna padrão, ele pode receber diversas opções, mas nesse caso estamos
    apenas limitando a quantidade de caracteres com a propriedade "length".
  */
  @Column({
    length: 50,
  })
  email: string;

  @Column({
    length: 50,
  })
  name: string;

  @Column()
  age: number;
}
