class GameSerializer < ActiveModel::Serializer
    attributes :id, :name, :created_at
  
    has_many :directions
    has_many :drinks
  end