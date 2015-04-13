class CreateTbMensagems < ActiveRecord::Migration
  def change
    create_table :tb_mensagems do |t|
      t.text :texto
      t.datetime :dt_envio
      t.references :remetente, index: true, foreign_key: true
      t.references :destinatario, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
