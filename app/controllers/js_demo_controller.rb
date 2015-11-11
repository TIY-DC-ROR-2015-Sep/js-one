class JsDemoController < ApplicationController
  def counter
    # Just render counter.html.erb as usual
  end

  def receive_message
    flash[:notice] = params[:thing_to_echo]
    redirect_to :back
  end
end
