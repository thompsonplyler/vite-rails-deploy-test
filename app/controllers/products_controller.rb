class ProductsController < ApplicationController

    def show 
        product = Product.find(product_params[:id])
        render json: {product: product}
    end

    private

    def product_params
        params.permit(:id, :name, :manufacturer)
    end
end
