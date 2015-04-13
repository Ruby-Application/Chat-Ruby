class CreateTbUsuarios < ActiveRecord::Migration
  def change
    create_table :tb_usuarios do |t|
      t.string :nm_usuario
      t.string :email
      t.string :senha

      t.timestamps null: false
    end
  end
end
