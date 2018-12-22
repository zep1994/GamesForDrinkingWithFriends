class Game < ApplicationRecord
    has_many :directions
    has_many :drinks

    accepts_nested_attributes_for :drinks, :allow_destroy => true
    accepts_nested_attributes_for :directions, :allow_destroy => true
end
