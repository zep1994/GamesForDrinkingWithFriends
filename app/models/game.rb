class Game < ApplicationRecord
    has_many :directions
    has_many :drinks
end
