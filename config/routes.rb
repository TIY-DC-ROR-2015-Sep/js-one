Rails.application.routes.draw do
  devise_for :users

  root "js_demo#counter"
end
