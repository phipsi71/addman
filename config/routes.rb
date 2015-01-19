Rails.application.routes.draw do

  root to: 'users#index'  

  get '/users/search_for', to: 'users#search_for', as: 'users_search'

  resources :users do
    patch 'append_to/:mailgroup_id',   to: 'users#append_to', as: 'append'
      resources :mailgroups do
      member do
        put 'delete'
      end
    end
  end



  resources :mailgroups do  
    patch 'append_to/:user_id',   to: 'mailgroups#append_to', as: 'append'
    resources :users do
      member do
        put 'delete'
      end
    end
  end

 
  get 'mailgroups/choose/:user_id', to: 'mailgroups#choose', as: 'mailgroups_choose'

  get 'users/choose/:mailgroup_id', to: 'users#choose', as: 'users_choose'
  


  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
