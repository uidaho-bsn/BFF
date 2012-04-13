Tab::Application.routes.draw do
  get 'home/index'

  resources :users, :path_names => {:new => 'register', :create => 'register'}, 
    :only => [:index, :show, :new, :create, :edit, :update, :destroy] do
      member do
        put :make_admin
      end
      
      collection do
        post :login
        get  :logout
        get  :forgot_password
        post :forgot_password
        get  :check_email
        get  :not_check_email
        get  :check_login
      end
  end

  resources :fingerings, :only => [:index, :new, :show, :create, :edit, :update, :destroy] do
    member do
      put :approve
      put :like
      put :dislike
    end
    
    collection do
      get  'search'
      post 'search_results'
      get  'search_results'
    end
  end

  resources :home do
    collection do
      get 'contact'
    end
  end

  root :to => 'home#index'

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
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
    
  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
end
