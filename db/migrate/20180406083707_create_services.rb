class CreateServices < ActiveRecord::Migration[5.1]
  def change
    create_table :services do |t|
      t.text :description
      t.integer :amout
      t.integer :hour
      t.integer :minute

      t.timestamps
    end
  end
end
