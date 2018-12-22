class V1::GamesController < ApplicationController
    def index
        @games = Game.all
        render json: @games, status: :ok
    end 

    def show
        render json: @game, status: :ok
    end

    def create 
        @game = Game.new(game_params)

        if @game.save
            render json: @game, status: :created
        else 
            render json: { errors: @game.errors.full_messages,
            message: 'Can not create game because:' }, status: 422
       end
    end

    def update
        @game.update(game_params)
        render json: @game, status: :ok
    end

    def destroy 
        @game.destroy
    end

    private

    def game_params
        params.require(:game).permit(
            :id,
            :name,
            directions_attributes: [:id, :rules],
            drinks_attributes: [:id, :name]
        )
    end

    def set_game
        @game = Game.find(params[:id])
    end
end
