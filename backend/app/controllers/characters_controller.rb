class CharactersController < ApplicationController

    def index
        @characters = Character.all

        render json: @characters
    end

    def show
        @character = Character.find params[:id]

        render json:@character
    end

    def create
        @character = Character.create(
            name: params[:name],
            image: params[:image],
            first_appearance: params[:first_appearance],
            alignment: params[:alignment]
        )

        render json: @character, status: :created
    end

    def update
        @character = Character.find params[:id]

        @character.update(
            name: params[:name],
            image: params[:image],
            first_appearance: params[:first_appearance],
            alignment: params[:alignment]
        )

        render json: @character, status: :updated
    end
    
    def destroy
        @character = Character.find params[:id]

        @character.destroy
    end


end
