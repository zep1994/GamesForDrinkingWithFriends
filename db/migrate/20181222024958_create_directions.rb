class CreateDirections < ActiveRecord::Migration[5.2]
  def change
    create_table :directions do |t|
      t.text :rules
      t.references :game, foreign_key: true

      t.timestamps
    end
  end
end
