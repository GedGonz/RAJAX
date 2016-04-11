class CreatePersonas < ActiveRecord::Migration
  def change
    create_table :personas do |t|
      t.string :name
      t.string :lasname
      t.string :adress
      t.string :email
      t.integer :age
    end
  end
end
