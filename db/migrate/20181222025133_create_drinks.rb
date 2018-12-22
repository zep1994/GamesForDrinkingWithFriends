class CreateDrinks < ActiveRecord::Migration[5.2]
  def change
    create_table :drinks do |t|
      t.string :name
      t.references :game, foreign_key: true

      t.timestamps
    end
  end
end