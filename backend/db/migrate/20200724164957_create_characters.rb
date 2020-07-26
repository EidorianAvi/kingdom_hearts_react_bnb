class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :image
      t.string :first_appearance
      t.string :alignment
      
      t.timestamps
    end
  end
end
