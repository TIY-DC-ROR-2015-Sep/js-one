Rails.application.routes.draw do
  devise_for :users

  post "/message" => "js_demo#receive_message"
  root "js_demo#counter"
end
