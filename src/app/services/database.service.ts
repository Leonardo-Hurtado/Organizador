import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private db!: SQLiteDBConnection;
  readonly db_name: string = "Usuarios.db";
  readonly db_table: string = "usuario";

  private sqlite: SQLiteConnection;

  constructor() {
    this.sqlite = new SQLiteConnection(CapacitorSQLite)
  }

  async initDB() {
    try {

      this.db = await this.sqlite.createConnection(
        this.db_name,
        false,
        'no-encryption',
        1,
        false
      );

      await this.db.open();

      const createTableQuery = `
        CREATE TABÑE IF NOT EXIST  ${this.db_table}(
          id INTEGER PRIMARY KEY AUTIINCREMENT,
          username TEXT NOT NULL,
          password TEXT NOT NULL,
          email TEXT NOT NULL,
          nombre TEXT NOT NULL,
          apellido TEXT NOT NULL,
          direccion TEXT NOT NULL,
        );
     `;


     await this.db.execute(createTableQuery);
     console.log("base de datos inicializada");


    } catch (error) {
      console.error("ERROR :", error);

    }


  }

}
