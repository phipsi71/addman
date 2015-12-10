Rails.application.routes.draw do

  #devise_for :users
  devise_for :users, :controllers => {sessions: 'sessions'}
  
  root to: 'users#index'  

  # devise_for :users,
  #   :controllers => {
  #     :sessions => "sessions"
  # }

  get 'sample_user', to: 'users#sample'     # it's not in resources since we don't have an id when selecting

  resources :users do

        

        # collection do
        #   get   'search_for', to: 'users#search_for',  as: 'search'
        # end

        member do   # member is for passing :id instead of :user_id
          get   'print' #,  to: 'users#print',  as: 'print'
          get   'copy'  #,  to: 'users#edit',   as: 'copy'
        end

        resources :mailgroups do      
          patch 'append',    to: 'users#append',  on: :collection    # append a MAILGROUP to a user
          member do
            delete 'remove', to: 'mailgroups#remove'
          end
        end

  end



  resources :mailgroups do

    member do
      get 'mailto'
      get 'print'
    end

    collection do
      get   'search_for', to: 'mailgroups#search_for',  as: 'search'
    end

    resources :users do
      patch 'append',     to: 'mailgroups#append', on: :collection   # append a USER to a mailgroup
      member do
        delete 'remove',  to: 'users#remove'    # remove USER from a mailgroup
      end
    end

  end


  resources :lists do

    resources :mailgroups do      
      patch 'append',     to: 'lists#append',  on: :collection    # append a MAILGROUP to a user
      member do  
        delete 'remove',  to: 'mailgroups#remove_list'
      end
    end

  end


  


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